import { COLORS } from "src/lib"
import styled from "styled-components"
import Logo from "public/img/logo.svg"
import Link from "next/link"
import { SocialMedia } from "src/components"

export const Footer: React.FC = () => {
  return(
    <StyledFooter>
      <Description>
        <Logo />
        <DescText>Ut enim ad minim veniam quis<br/>nostrud exercitation  ea commodo</DescText>
      </Description>
      <CopyrightContainer>
          <p>Copyright © 2022 GScore | All Rights Reserved | <Link href=""><a>Cookies</a></Link> | <Link href=""><a>Privacy Policy</a></Link></p>
          <SocialMedia /> 
      </CopyrightContainer>
    </StyledFooter>
  )
}

const StyledFooter = styled.div `
  height: 15px;
  border-top: 1px solid ${COLORS.darkGray};
  background-color: ${COLORS.black};
  color: ${COLORS.lightGray};
  padding: 0 87px;
`

const Description = styled.div`
  padding-bottom: 60px;
  width: 100%;
  height: 246px;
`

const DescText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  margin-top: 24px;
`
const CopyrightContainer = styled.div`
  width: 100%;
  height: 116px;
  border-top: 1px solid ${COLORS.darkGray};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

