import styled from "styled-components";
import { CodeCard } from "src/components";
import { useAppSelector } from "src/hooks";
import { Button, ErrorMessage, Preloader } from "src/ui";
import { useState } from "react";
import Media from "react-media";
import { MEDIA_QUERY } from "src/lib/constants";

interface ICodesList {
  openedCardId: number;
  handleManageCodes: (codeIds: number[]) => void;
  handleActivateCode: (code: string) => void;
}

export const CodesList: React.FC<ICodesList> = ({
  openedCardId,
  handleActivateCode,
  handleManageCodes,
}) => {
  const [selectedCodes, setSelectedCodes] = useState<number[]>([]);
  const { codes, codesLoading, error } = useAppSelector((state) => state.codes);

  const filteredCodes = codes.filter(
    (code) => code.subscribeId == openedCardId
  );

  const handleCodes = (codeId: number) => {
    if (!selectedCodes.includes(codeId)) {
      setSelectedCodes((perv) => [...perv, codeId]);
    } else {
      setSelectedCodes((perv) => [...perv].filter((item) => codeId !== item));
    }
  };
  return (
    <>
      {codesLoading && openedCardId !== 0 ? (
        <Preloader />
      ) : (
        <SCodesList>
          <Media queries={{ small: { maxWidth: 426 } }}>
            {(matches) =>
              matches.small && <h3>Select the domains you want to keep</h3>
            }
          </Media>
          {filteredCodes.map((code) => (
            <CodeCard
              key={code.id}
              code={code}
              isChecked={selectedCodes.includes(code.id)}
              selectCode={handleCodes}
              handleActivateCode={handleActivateCode}
            />
          ))}
          {filteredCodes.some((code) => code.status === "HOLD") && (
            <HoldCodesFooter>
              <Media queries={{ small: { maxWidth: 426 } }}>
                {(matches) =>
                  !matches.small && <h3>Select the domains you want to keep</h3>
                }
              </Media>
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <StyledButton
                theme="primary"
                onClick={() => handleManageCodes(selectedCodes)}
              >
                Confirm
              </StyledButton>
            </HoldCodesFooter>
          )}
        </SCodesList>
      )}
    </>
  );
};

const SCodesList = styled.ul`
  width: 100%;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  list-style: none;
  @media ${MEDIA_QUERY.mobile} {
    gap: 24px;
    padding: 0;
  }
`;

const HoldCodesFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(Button)`
  @media ${MEDIA_QUERY.mobile} {
    width: 100%;
  }
`;
