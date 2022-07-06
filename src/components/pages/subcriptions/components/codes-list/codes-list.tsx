import styled from "styled-components";
import { CodeCard } from "src/components";
import { useAppSelector } from "src/hooks";
import { Button, ErrorMessage, Preloader } from "src/ui";
import { useState } from "react";

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
              <h3>Select the domains you want to keep</h3>
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <Button
                theme="primary"
                onClick={() => handleManageCodes(selectedCodes)}
              >
                Confirm
              </Button>
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
`;

const HoldCodesFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
