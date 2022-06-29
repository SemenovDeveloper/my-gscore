import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { CheckboxIcon } from "src/assets/icons";

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  isChecked: boolean;
  handleChange: () => void;
}

export const Checkbox: React.FC<ICheckbox> = ({ isChecked, handleChange }) => {
  return (
    <Label isChecked={isChecked}>
      <HiddenCheckbox type="checkbox" onChange={handleChange} />
      <StyledCheckbox isChecked={isChecked}>
        {isChecked && <CheckboxIcon />}
      </StyledCheckbox>
    </Label>
  );
};

const Label = styled.label<{ isChecked: boolean }>`
  &:hover {
    span {
      box-shadow: 0 0 0 4px
        ${(props) =>
          props.isChecked
            ? "rgba(252, 88, 66, 0.3)"
            : "rgba(255, 255, 255, 0.3)"};
    }
  }
`;

const HiddenCheckbox = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.span<{ isChecked: boolean }>`
  display: inline-block;
  height: 28px;
  width: 28px;
  margin: 32px 0 0;
  padding: 4px 5px;
  border: 1px solid
    ${(props) => (props.isChecked ? 'var(--red)' : 'var(--white)')};
  border-radius: 7px;
  background-color: ${(props) =>
    props.isChecked ? 'var(--light-red)': 'var(--white)'};
  &:hover:enabled {
    background-color: ${(props) =>
      props.isChecked ? 'var(--red)' : 'var(--light-red)'};
    border: 1px solid
      ${(props) =>
        props.isChecked ? 'var(--red)' : 'var(--light-red)'};
  }
  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`;
