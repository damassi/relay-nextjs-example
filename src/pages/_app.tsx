import "regenerator-runtime"
import { RelayEnvironmentProvider } from "react-relay"
import { Theme, injectGlobalStyles } from "@artsy/palette"
import { AppProps } from "next/app"
import { ErrorBoundary } from "system/ErrorBoundary"
import { Suspense } from "react"
import { isServer } from "system/env"
import { useEnvironment } from "system/relay/setupEnvironment"

const { GlobalStyles } = injectGlobalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const environment = useEnvironment(pageProps.relayData)

  return (
    <Theme theme="v3">
      <GlobalStyles />

      <RelayEnvironmentProvider environment={environment}>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </RelayEnvironmentProvider>
    </Theme>
  )
}
