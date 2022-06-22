import styled from "styled-components";
import { Input, Button } from "src/ui";
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  userName: string;
  email: string;
  password: string;
};


export const Registration: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => {
    
  }

  return (
    <SRegistration>
      <h2>Create account</h2>
      <SDescription>
        You need to enter your name and email. We will send you a temporary
        password by email
      </SDescription>
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <SInputs>
          <Input {...register("userName")} placeholder='Username'/>
          <Input type="email"{...register("email")} placeholder='Email'/>
          <Input {...register("password")} placeholder='Password'/>
        </SInputs>
        <Button theme="primary" type='submit' smallText>
          Send password
        </Button>

      </SForm>
    </SRegistration>
  );
};

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
`

const SInputs = styled.div`
  margin-bottom: 48px;
`