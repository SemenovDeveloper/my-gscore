import { ICode } from "src/types";
import styled from "styled-components";
import { CodeCard } from "src/components"

interface ICodesList {
  codes: ICode[];
}

export const CodesList: React.FC<ICodesList> = ({ codes }) => {

  return (
    <SCodesList>
      {codes.map((code) => (
        <CodeCard key={code.id} code={code} />
      ))}
    </SCodesList>
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
