import { RelayNetworkLayer } from "react-relay-network-modern"
import RelaySSR from "react-relay-network-modern-ssr/node8/server"
import { Environment, Network, RecordSource, Store } from "relay-runtime"
import { middleware } from "./middleware"

export const serverEnvironment = {
  initEnvironment: () => {
    const source = new RecordSource()
    const store = new Store(source)
    const relaySSR = new RelaySSR()

    return {
      relaySSR,
      environment: new Environment({
        store,
        network: new RelayNetworkLayer([
          ...middleware,
          relaySSR.getMiddleware(),
        ]),
      }),
    }
  },
  createEnvironment: (relayData: any) => {
    const source = new RecordSource()
    const store = new Store(source)

    return new Environment({
      store,
      network: Network.create(() => {
        return relayData?.[0][1] || Promise.resolve()
      }),
    })
  },
}
