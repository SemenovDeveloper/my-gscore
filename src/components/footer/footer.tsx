import { COLORS } from "src/lib"
import styled from "styled-components"
import Logo from "public/img/logo.svg"

export const Footer: React.FC = () => {
  return(
    <StyledFooter>
      <Description>
        <Logo />
        <p>Ut enim ad minim veniam quis<br/>nostrud exercitation  ea commodo</p>
      </Description>
    </StyledFooter>
  )
}

const StyledFooter = styled.div `
  position:absolute;
  bottom:0;
  height: 362px;
  border-top: 1px solid ${COLORS.darkGray};
  background-color: ${COLORS.black};
  color: ${COLORS.lightGray};
  padding: 60px 86px 0;
  margin-top: 40px;
`

const Description = styled.div`
  height: 246px;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`