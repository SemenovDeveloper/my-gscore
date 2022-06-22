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
  width: 100%;
  display: flex;
  align-items: center;
  padding: 30px 87px;
`;
