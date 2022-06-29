import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { CheckboxIcon } from "src/assets/icons";

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  isChecked: boolean;
  handleChange: () => void;
}

export const Checkbox: React.FC<ICheckbox> = (props) => {
  return (
    <Label>
      <HiddenCheckbox type="checkbox" onChange={props.handleChange} />
      <SCheckbox isChecked={props.isChecked}>
        {props.isChecked && <CheckboxIcon />}
      </SCheckbox>
    </Label>
  );
};

const Label = styled.label`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const SCheckbox = styled.span<{ isChecked: boolean }>`
  width: 28px;
  height: 28px;
  margin: 32px 0 0;
  padding: 4px 5px;
  display: inline-block;
  border-radius: 7px;
  background-color: ${(props) =>
    props.isChecked ? 'var(--light-red)': 'var(--white)'};
  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`;
