import styled from "styled-components";

interface ISettingsBar {
  step: string;
  changeStep: (value: string) => void;
}

export const SettingsBar: React.FC<ISettingsBar> = ({ step, changeStep }) => {
  return (
    <StepList>
      <Step active={step === "info"}>
        <p onClick={() => changeStep("info")}>Personal info</p>
      </Step>
      <Step active={step === "password"}>
        <p onClick={() => changeStep("password")}>Change password</p>
      </Step>
      <Step></Step>
    </StepList>
  );
};

const StepList = styled.ul`
  width: 100%;
  margin-top: 48px;
  display: flex;
  flex-direction: row;
  list-style: none;
`;

const Step = styled.li<{ active?: boolean }>`
  padding: 0 24px 12px;
  border-bottom: 2px solid
    ${(props) => (props.active ? "var(--red)" : "var(--dark-gray)")};
  p {
    color: ${(props) =>
      props.active ? "var(--light-red)" : "var(--dark-gray)"};
    cursor: pointer;
  }
  &:last-child {
    flex: 1 1 0px;
    border-bottom: 2px solid var(--dark-gray);
  }
`;
