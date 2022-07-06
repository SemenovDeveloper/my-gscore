import styled from "styled-components"
import { ContentContainer } from "../content-container"

export const Preloader: React.FC =() => {
  return (
    <Root>
      <h1>Loading...</h1>
    </Root>
  )
}

const Root = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`