import styled from "styled-components";
import { ContentContainer } from "src/ui";
("react-hook-form");
import { SettingsBar } from "src/components";
import { useState } from "react";
import { PersonalInfoForm, NewPasswordForm } from "src/components";
import { useAppSelector } from "src/hooks";
import Router from "next/router";

export interface ISettingsExport {
  username: string;
  email: string;
  password: string;
  newPassword: string;
}

export const Settings: React.FC = () => {
  const [step, setStep] = useState<string>("info");
  const { token } = useAppSelector((state) => state.user);

  const registerRouter = () => {
    Router.push("/users/registration");
  };

  return (
    <>
      {token ? (
        <ContentContainer>
          <SettingsContainer>
            <h2>Settings</h2>
            <SettingsBar step={step} changeStep={(value) => setStep(value)} />
            {step === "info" ? (
              <PersonalInfoForm
                changeStep={(value: string) => setStep(value)}
              />
            ) : (
              <NewPasswordForm />
            )}
          </SettingsContainer>
        </ContentContainer>
      ) : (
        registerRouter()
      )}
    </>
  );
};

const SettingsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
