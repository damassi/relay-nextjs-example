import "regenerator-runtime"

import { RelayEnvironmentProvider } from "react-relay"
import { createEnvironment } from "system/relay"
import { Theme, injectGlobalStyles } from "@artsy/palette"
import { AppProps } from "next/app"
import { ErrorBoundary } from "system/ErrorBoundary"
import { Suspense } from "react"
import { isServer } from "system/env"

const { GlobalStyles } = injectGlobalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const environment = createEnvironment(pageProps.relayData)

  return (
    <Theme theme="v3">
      <GlobalStyles />

      <RelayEnvironmentProvider environment={environment}>
        <ErrorBoundary>
          {isServer ? (
            <Component {...pageProps} />
          ) : (
            <Suspense fallback={null}>
              <Component {...pageProps} />
            </Suspense>
          )}
        </ErrorBoundary>
      </RelayEnvironmentProvider>
    </Theme>
  )
}
