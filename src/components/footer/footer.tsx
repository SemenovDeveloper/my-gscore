import { COLORS } from "src/lib"
import styled from "styled-components"

export const Footer: React.FC = () => {
  return(
    <>
      <Decription>Ut enim ad minim veniam quis<br/>nostrud exercitation  ea commodo</Decription>
      <Title>Footer</Title>
    </>
  )
}

const Title = styled.h3`
  color: ${COLORS.white};`

const Decription = styled.p`

`