import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 68px;
  margin: 24px 0;
  padding: 25px 23px;
  border: 1px solid var(--lightest-gray);
  border-radius: 6px;
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.06);
  background: var(--white);
  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: var(--gray);
  }
`;
