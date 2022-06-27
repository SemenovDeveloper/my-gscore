import React, { FC, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import styled, { css } from "styled-components";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | undefined;
  ref: null;
}

export const Input: FC<IInput> = ({ error, ...props }) => {
  return (
    <SInput>
      <InputField $isValid={!error} {...props} />
      {error && <Error>{error.message}</Error>}
    </SInput>
  );
};

interface StyleProps {
  $isValid: boolean;
}

const SInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputField = styled.input`
  width: 100%;
  height: 68px;
  padding: 25px 23px;
  ${(props: StyleProps) => {
    if (props.$isValid) {
      return css`
        border: 1px solid var(--lightest-gray);
      `;
    } else {
      return css`
        border: 1px solid var(--red);
      `;
    }
  }}
  border-radius: 6px;
  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: var(--gray);
  }
`;

const Error = styled.p`
  color: var(--red);
`;
