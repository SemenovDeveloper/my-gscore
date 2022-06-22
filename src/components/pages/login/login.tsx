import styled from "styled-components";
import { ContentContainer } from "src/ui";
import { Input, Button, SlimContainer } from "src/ui";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthorizationBar } from "src/components";

type FormValues = {
  userName: string;
  email: string;
  password: string;
};

export const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <ContentContainer>
      <SlimContainer>
        <AuthorizationBar step="login" />
        <Container>
          <SLogin>
            <h2>Log in</h2>
            <SForm onSubmit={handleSubmit(onSubmit)}>
              <SInputs>
                <Input
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                />
                <Input {...register("password")} placeholder="Password" />
              </SInputs>
              <Button theme="primary" type="submit" smallText>
                Log in
              </Button>
            </SForm>
          </SLogin>
        </Container>
      </SlimContainer>
    </ContentContainer>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;

const SLogin = styled.div`
  display: flex;
  flex-direction: column;
`;

const SForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SInputs = styled.div`
  margin-bottom: 48px;
`;

export default Login;
