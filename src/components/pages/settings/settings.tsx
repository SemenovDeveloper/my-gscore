import styled from "styled-components";
import { ContentContainer } from "src/ui";"react-hook-form";
import { SettingsBar } from "src/components";
import { useRouter } from "next/router";
import { useState } from "react";
import { PersonalInfoForm, NewPasswordForm } from "src/components";

export interface ISettingsExport {
  username: string;
  email: string;
  password: string;
  newPassword: string;
}

export const Settings: React.FC = () => {
  const [step, setStep] = useState<string>("info");
  const router = useRouter();

  // const onSubmit: SubmitHandler<UserProps> = async (data) => {
  //   try {
  //     const response = await api.post<UserExport>(`/users/sign-up`, data);
  //     if (response.status === 201) {
  //       router.push("/users/login");
  //     }
  //   } catch (err: any) {}
  // };

  return (
    <ContentContainer>
      <SettingsContainer>
        <h2>Settings</h2>
        <SettingsBar step={step} changeStep={(value) => setStep(value)} />
        {step === "info" ? <PersonalInfoForm changeStep={(value: string) => setStep(value)}/> : <NewPasswordForm />}
      </SettingsContainer>
    </ContentContainer>
  );
};

const SettingsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
