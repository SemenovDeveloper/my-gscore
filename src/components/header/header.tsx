import { COLORS } from "src/lib"
import styled from "styled-components"

export const Header: React.FC = () => {
  return(
    <>
      <Title>Header</Title>
    </>
  )
}

const Title = styled.h3`
  color: ${COLORS.white}
`