import Link from "next/link"
import styled from "styled-components"
import { Products } from "src/components"
import { COLORS } from "src/lib"

export const Start: React.FC = () => {
  return(
    <StyledStart>
      <h2>Get started with Gscore today!</h2>
      <Products />
      <p>Have more than 10 sites?</p>
      <Link href=""><a>Contact Us</a></Link>
    </StyledStart>
  )
}

const StyledStart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a{
    color: ${COLORS.red}
  }
`