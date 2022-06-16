import 'styles/normalize.css'
import 'styles/fonts.css'
import { GlobalStyle } from 'styles/global'

import type { AppProps } from 'next/app'
import { MainContainer } from 'src/components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainContainer>
      <GlobalStyle />
      <Component {...pageProps} />
    </MainContainer>
  )
}

export default MyApp
