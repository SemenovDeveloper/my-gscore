import styled from "styled-components";
import { Logo } from "src/assets/icons";

export const Header: React.FC = () => {
  return (
    <SHeader>
      <Logo />
    </SHeader>
  );
};

const SHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 30px 87px;
`;
