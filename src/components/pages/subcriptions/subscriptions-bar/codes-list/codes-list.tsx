import { ICode } from "src/types";
import styled from "styled-components";
import { CodeCard } from "src/components";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { getCodes } from "src/store/ducks";
import { unwrapResult } from "@reduxjs/toolkit";
import { Button, ErrorMessage, Preloader } from "src/ui";
import { useEffect, useState } from "react";

interface ICodesList {
  openedCardId: number;
}

export const CodesList: React.FC<ICodesList> = ({ openedCardId }) => {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   async () => {
  //     await dispatch(getCodes());
  //   };
  // }, []);

  const { codes, codesLoading } = useAppSelector((state) => state.codes);
  const filteredCodes = codes.filter(
    (code) => code.subscribeId == openedCardId
  );
  
  return (
    <>
      {codesLoading ? (
        <Preloader />
      ) : (
        <SCodesList>
          {filteredCodes.map((code) => (
            <CodeCard key={code.id} code={code} />
          ))}
          {filteredCodes.some((code) => code.status === "HOLD") && (
            <HoldCodesFooter>
              <h3>Select the domains you want to keep</h3>
              <Button theme="primary">Confirm</Button>
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
