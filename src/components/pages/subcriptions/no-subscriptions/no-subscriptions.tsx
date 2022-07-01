import Link from "next/link"
import { Button } from "src/ui"
import styled from "styled-components"

export const NoSubscriptions: React.FC = () => {

  return (
    <Root>
      <Title>No active subscriptions</Title>
      <Text>
        You can subscribe right now by clicking on the button below
      </Text>
      <Link href="/" passHref>
        <a>
          <Button theme="primary">Get Gscore</Button>
        </a>
      </Link>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  min-height: 770px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h3`
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
`

const Text = styled.p`
  width: 320px;
  margin: 8px 0 32px;
  font-weight: 400;
  text-align: center;
`