import Link from "next/link";
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

export const Registration: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
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
                  <Input {...register("userName")} placeholder="Username" />
                  <Input
                    type="email"
                    {...register("email")}
                    placeholder="Email"
                  />
                  <Input {...register("password")} placeholder="Password" />
                </SInputs>
                <Button theme="primary" type="submit" smallText>
                  Send password
                </Button>
              </SForm>
              <STextBlock>
                <p>Have an account? </p>
                <Link href="">
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
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;

const SRegistration = styled.div`
  display: flex;
  flex-direction: column;
`;

const SDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  padding-top: 16px;
`;

const SForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SInputs = styled.div`
  margin-bottom: 48px;
`;

const STextBlock = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 48px;
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    padding-right: 8px;
  }
`;

const SLink = styled.a`
  color: var(--light-red);
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
`