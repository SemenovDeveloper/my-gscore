import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { ContentContainer } from "src/ui";
import { useState } from "react";
import { COLORS } from "src/lib";
import { Registration } from "src/components";

const LoginPage: NextPage = () => {
  const [activeStep, setActiveStep] = useState("register");

  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <ContentContainer>
        <Login>
          <StepList>
            <Step>
              <p>Create account</p>
              <Indicator active={activeStep === "register"} />
            </Step>
            <Step>
              <p>Log in</p>
              <Indicator active={activeStep === "login"} />
            </Step>
            <Step>
              <p>Checkout</p>
              <Indicator active={activeStep === "checkout"} />
            </Step>
          </StepList>
          <Container>
            <Registration />
          </Container>
        </Login>
      </ContentContainer>
    </>
  );
};

const Login = styled.div`
  width: 620px;
  height: 916px;
  border: 1px solid red;
`;

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

const Container = styled.div`
  width: 100%;
  border: 1px solid green;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;

export default LoginPage;
