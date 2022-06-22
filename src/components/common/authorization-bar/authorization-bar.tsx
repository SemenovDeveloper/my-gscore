import styled from "styled-components";

interface IAuthorizationBar {
  step: "register" | "login" | "checkout";
}

export const AuthorizationBar: React.FC<IAuthorizationBar> = ({ step }) => {
  return (
    <StepList>
      <Step>
        <p>Create account</p>
        <Indicator active />
      </Step>
      <Step>
        <p>Log in</p>
        <Indicator active={step === "checkout" || step === "login"} />
      </Step>
      <Step>
        <p>Checkout</p>
        <Indicator active={step === "checkout"} />
      </Step>
    </StepList>
  );
};

const StepList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 32px;
  list-style: none;
`;

const Step = styled.li`
  width: calc((100% - 32px) / 3);
  p {
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
  }
`;

const Indicator = styled.div<{ active?: boolean }>`
  width: 100%;
  height: 8px;
  margin-top: 12px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.active ? "var(--light-red)" : "var(--dark-gray)"};
`;
