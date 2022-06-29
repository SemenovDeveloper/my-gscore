import Link from "next/link"
import { Button, ContentContainer } from "src/ui"
import styled from "styled-components"
export const NoSubscriptions: React.FC = () => {
  return (
    <SNoSubscriptions>
      <STitle>No active subscriptions</STitle>
      <SText>
        You can subscribe right now by clicking on the button below
      </SText>
      <Link href="/" passHref>
        <a>
          <Button theme="primary">Get Gscore</Button>
        </a>
      </Link>
    </SNoSubscriptions>
  )
}

const SNoSubscriptions = styled.div`
  width: 100%;
  min-height: 770px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const STitle = styled.h3`
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
`

const SText = styled.p`
  width: 320px;
  margin: 8px 0 32px;
  font-weight: 400;
  text-align: center;
`