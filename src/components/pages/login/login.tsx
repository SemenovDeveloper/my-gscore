import styled from "styled-components";
import {
  Input,
  Button,
  SlimContainer,
  ErrorMessage,
  ContentContainer,
} from "src/ui";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { AuthorizationBar } from "src/components";
import { loginUser } from "src/store/ducks";
import { store } from "src/store";
import { useAppSelector } from "src/hooks";
import { EMAIL_REGEX } from "src/lib/constants";
import router from "next/router";

type LoginProps = {
  email: string;
  password: string;
};

export const Login: React.FC = () => {
  const { error, selectedProduct } = useAppSelector((state) => state.user);
  const { control, handleSubmit } = useForm<LoginProps>();

  const onSubmit: SubmitHandler<LoginProps> = async (data) => {
    const { email, password } = data;
    store.dispatch(loginUser({ email, password })).then((response) => {
      if (response.payload.token) {
        if (selectedProduct) {
          router.push("/users/checkout");
        } else {
          router.push("/");
        }
      }
    });
  };

  return (
    <ContentContainer>
      <SlimContainer>
        <AuthorizationBar step="login" />
        <LoginBlock>
          <h2>Log in</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Inputs>
              <Controller
                control={control}
                name="email"
                rules={{
                  required: "Email is not valid",
                  pattern: {
                    value: EMAIL_REGEX,
                    message: "Wrong format of email",
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
            </Inputs>
            <Button theme="primary" type="submit" smallText>
              Log in
            </Button>
          </Form>
          {<ErrorMessage>{error}</ErrorMessage>}
        </LoginBlock>
      </SlimContainer>
    </ContentContainer>
  );
};

const LoginBlock = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Inputs = styled.div`
  margin-top: 32px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 24px;
`;
