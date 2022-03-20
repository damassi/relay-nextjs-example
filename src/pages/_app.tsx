import "regenerator-runtime"
import { RelayEnvironmentProvider } from "react-relay"
import { Theme, injectGlobalStyles } from "@artsy/palette"
import { AppProps } from "next/app"
import { ErrorBoundary } from "system/ErrorBoundary"
import { useEnvironment } from "system/relay/setupEnvironment"
import { RouteLoadingBar } from "system/RouteLoadingBar"

const { GlobalStyles } = injectGlobalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const environment = useEnvironment(pageProps.relayData)

  return (
    <Theme theme="v3">
      <GlobalStyles />

      <RelayEnvironmentProvider environment={environment}>
        <ErrorBoundary>
          <RouteLoadingBar />
          <Component {...pageProps} />
        </ErrorBoundary>
      </RelayEnvironmentProvider>
    </Theme>
  )
}
