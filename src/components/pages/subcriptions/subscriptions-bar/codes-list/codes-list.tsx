import styled from "styled-components";
import { CodeCard } from "src/components";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { getCodes, manageCodes } from "src/store/ducks";
import { Button, ErrorMessage, Preloader } from "src/ui";
import { useState } from "react";
import { store } from "src/store";

interface ICodesList {
  openedCardId: number;
}

export const CodesList: React.FC<ICodesList> = ({ openedCardId }) => {
  const dispatch = useAppDispatch();
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

  const handleConfirm = () => {
    dispatch(
      manageCodes({ codesIds: selectedCodes, subscribeId: openedCardId })
    ).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        (async () => {
          await store.dispatch(getCodes());
        })();
      }
    });
  };
  return (
    <>
      {codesLoading ? (
        <Preloader />
      ) : (
        <SCodesList>
          {filteredCodes.map((code) => (
            <CodeCard key={code.id} code={code} selectCode={handleCodes} />
          ))}
          {filteredCodes.some((code) => code.status === "HOLD") && (
            <HoldCodesFooter>
              <h3>Select the domains you want to keep</h3>
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <Button theme="primary" onClick={() => handleConfirm()}>
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
