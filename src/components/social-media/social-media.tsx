import Link from "next/link"
import styled from "styled-components"
import Facebook from "public/img/facebook.svg"
import Twitter from "public/img/twitter.svg"
import LinkedIn from "public/img/linkedIn.svg"




export const SocialMedia: React.FC = () => {
  return (
    <StyledSocialMedia>
      <Link href=""><a><Facebook /></a></Link>
      <Link href=""><a><Twitter /></a></Link>
      <Link href=""><a><LinkedIn /></a></Link>
    </StyledSocialMedia>
  )
}

const StyledSocialMedia = styled.div`
  width: 134px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
`