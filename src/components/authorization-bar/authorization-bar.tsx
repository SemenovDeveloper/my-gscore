import styled from "styled-components";
import { COLORS } from "src/lib";

interface IAuthorizationBar{
  step: 'register' | 'login' | 'checkout'
}

export const AuthorizationBar: React.FC<IAuthorizationBar> = ({step}) => {

  return (
    <StepList>
      <Step>
        <p>Create account</p>
        <Indicator active />
      </Step>
      <Step>
        <p>Log in</p>
        <Indicator active={step === 'checkout' || step === 'login'}/>
      </Step>
      <Step>
        <p>Checkout</p>
        <Indicator active={step === "checkout"} />
      </Step>
    </StepList>
  );
};

const StepList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`;

const Step = styled.li`
  width: calc((100% - 32px) / 3);
  p {
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
  }
`;

interface IIndicator {
  active?: boolean;
}

const Indicator = styled.div<IIndicator>`
  width: 100%;
  height: 8px;
  margin-top: 12px;
  background-color: ${(props) =>
    props.active ? COLORS.lightRed : COLORS.darkGray};
  border-radius: 4px;
`;
