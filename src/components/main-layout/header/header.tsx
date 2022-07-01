import styled from "styled-components";
import { Logo } from "src/assets/icons";
import { useAppSelector } from "src/hooks";
import { NavBar } from 'src/components'
import Link from "next/link";
export const Header: React.FC = () => {
  const token = useAppSelector(state => state.user.token)

  return (
    <Root>
      <Link href='/'><a><Logo /></a></Link>
      {token && <NavBar/>}
    </Root>
  );
};

const Root = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 30px 87px;
`;
