import { ReactNode } from "react"
import styled from "styled-components"

interface IErrorMessage {
  children: ReactNode
}

export const ErrorMessage: React.FC<IErrorMessage> = ({children}) => {
  return (<Root>
    {children}
  </Root>)
}

const Root = styled.p`
  color: var(--light-red)
`