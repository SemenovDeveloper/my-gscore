import Link from "next/link";
import styled from "styled-components";
import { ContentContainer } from "src/ui";
import { Input, Button, SlimContainer } from "src/ui";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { SettingsBar } from "src/components";
import { EMAIL_REGEX } from "src/lib/constants";
import { api } from "src/utils";
import { useRouter } from "next/router";
import { useState } from "react";

type UserProps = {
  username: string;
  email: string;
  password: string;
};

export interface User {
  id: number;
  email: string;
  username: string;
}

export interface UserExport {
  user: User;
  token: string;
}

export const Settings: React.FC = () => {
  const [step, setStep] = useState<string>("info");
  const { control, handleSubmit } = useForm<UserProps>();
  const router = useRouter();

  const onSubmit: SubmitHandler<UserProps> = async (data) => {
    try {
      const response = await api.post<UserExport>(`/users/sign-up`, data);
      if (response.status === 201) {
        router.push("/users/login");
      }
    } catch (err: any) {}
  };

  return (
      <ContentContainer>
        <SettingsContainer>
          <h2>Settings</h2>
          <SettingsBar step={step} changeStep={(value) => setStep(value)} />
          {step === "info" ? (
            <Form>
              <h3>Personal Info</h3>
              <Controller
                control={control}
                name="username"
                rules={{
                  required: "Username is missing",
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters long",
                  },
                }}
                render={({ field, fieldState }) => {
                  return (
                    <Input
                      type="text"
                      placeholder="Username"
                      {...field}
                      ref={null}
                      error={fieldState.error}
                    />
                  );
                }}
              />
              <Controller
                control={control}
                name="email"
                rules={{
                  required: "Email is not valid",
                  pattern: EMAIL_REGEX,
                }}
                render={({ field, fieldState }) => {
                  return (
                    <Input
                      type="text"
                      placeholder="Email"
                      {...field}
                      ref={null}
                      error={fieldState.error}
                    />
                  );
                }}
              />
              <Button theme="primary" type="submit" smallText>
                Save
              </Button>
            </Form>
          ) : (
            <Form>
              <h3>Change password</h3>
              <Controller
                control={control}
                name="password"
                rules={{
                  required: "Password is missing",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                }}
                render={({ field, fieldState }) => {
                  return (
                    <Input
                      type="password"
                      placeholder="Current Password"
                      {...field}
                      ref={null}
                      error={fieldState.error}
                    />
                  );
                }}
              />
              <Controller
                control={control}
                name="password"
                rules={{
                  required: "Password is missing",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                }}
                render={({ field, fieldState }) => {
                  return (
                    <Input
                      type="password"
                      placeholder="New Password"
                      {...field}
                      ref={null}
                      error={fieldState.error}
                    />
                  );
                }}
              />
              <Button theme="primary" type="submit" smallText>
                Save
              </Button>
            </Form>
          )}
        </SettingsContainer>
      </ContentContainer>
  );
};

const SettingsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  width: 100%;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  input {
    max-width: 512px;
    margin: 24px 0;
  }
  button {
    margin-top: 48px;
  }
`;
