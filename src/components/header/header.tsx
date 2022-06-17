import { COLORS } from "src/lib"
import styled from "styled-components"
import Logo from 'public/img/logo.svg'


export const Header: React.FC = () => {
  return(
    <header>
      <StyledHeader>
        <Logo />
      </StyledHeader>
    </header>
  )
}

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 30px 87px;
`