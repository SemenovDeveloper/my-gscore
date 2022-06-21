import styled from "styled-components";
import { Input } from "src/ui";

export const Registration: React.FC = () => {
  return (
    <SRegistration>
      <h2>Create account</h2>
      <SDescription>
        You need to enter your name and email. We will send you a temporary
        password by email
      </SDescription>
      <Input></Input>
      <Input></Input>
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
