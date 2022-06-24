import styled from "styled-components";
import { ContentContainer } from "src/ui";
import { Input, Button, SlimContainer } from "src/ui";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { AuthorizationBar } from "src/components";
import { loginUser } from 'src/store/ducks'
import { axiosInstance } from "src/utils";
import { useSelector } from "react-redux";
import { store } from "src/store";
import { useAppSelector } from "src/hooks";
import { EMAIL_REGEX } from "src/lib/constants";
import { useEffect } from "react";
import Router from "next/router";

type LoginProps = {
  email: string;
  password: string;
};

export const Login: React.FC = () => {
  const { loginStatus, error } = useAppSelector((state) => state.user);


  const { control, handleSubmit } = useForm<LoginProps>();
  const onSubmit: SubmitHandler<LoginProps> = async (data) => {
    const {email, password} = data;
    store.dispatch(loginUser({email, password}))
  };

  useEffect(() =>{
    if(loginStatus === 'resolved') {
      Router.push('/users/checkout')
    }
  } ,[loginStatus])

  return (
    <ContentContainer>
      <SlimContainer>
        <AuthorizationBar step="login" />
          <SLogin>
            <h2>Log in</h2>
            <SForm onSubmit={handleSubmit(onSubmit)}>
              <SInputs>
                <Controller
                    control={control}
                    name="email"
                    rules={{
                      required: "Email is not valid",
                      pattern: {
                        value: EMAIL_REGEX,
                        message:"Wrong format of email"
                      },
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
                Log in
              </Button>
              {<p>{error}</p>}
            </SForm>
          </SLogin>
      </SlimContainer>
    </ContentContainer>
  );
};

const SLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 60px;
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

export default Login;
