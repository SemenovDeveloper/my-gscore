import Link from "next/link";
import styled from "styled-components";
import { ContentContainer } from "src/ui";
import { Input, Button, SlimContainer } from "src/ui";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { AuthorizationBar } from "src/components";
import { EMAIL_REGEX } from "src/lib/constants";
import { axiosInstance } from "src/utils";
import { useRouter } from "next/router";

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

export const Registration: React.FC = () => {
  const { control, handleSubmit } = useForm<UserProps>();
  const router = useRouter();

  const onSubmit: SubmitHandler<UserProps> = async (data) => {
    try {
      const response = await axiosInstance.post<UserExport>(
        `/users/sign-up`,
        data
      );
      if (response.status === 201) {
        router.push("/users/login");
      }
    } catch (err: any) {}
  };

  return (
    <>
      <ContentContainer>
        <SlimContainer>
          <AuthorizationBar step="register" />
          <Container>
            <SRegistration>
              <h2>Create account</h2>
              <SDescription>
                You need to enter your name and email. We will send you a
                temporary password by email
              </SDescription>
              <SForm onSubmit={handleSubmit(onSubmit)}>
                <SInputs>
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
                          placeholder="Password"
                          {...field}
                          ref={null}
                          error={fieldState.error}
                        />
                      );
                    }}
                  />
                </SInputs>
                <Button theme="primary" type="submit" smallText>
                  Send password
                </Button>
              </SForm>
              <STextBlock>
                <p>Have an account? </p>
                <Link href="/users/login">
                  <SLink>Go to the next step</SLink>
                </Link>
              </STextBlock>
            </SRegistration>
          </Container>
        </SlimContainer>
      </ContentContainer>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 60px;
`;

const SRegistration = styled.div`
  display: flex;
  flex-direction: column;
`;

const SDescription = styled.p`
  padding-top: 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 32px;
  margin-bottom: 48px;
  gap: 24px;
`;

const STextBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 48px;
  p {
    padding-right: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
  }
`;

const SLink = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: var(--light-red);
`;
