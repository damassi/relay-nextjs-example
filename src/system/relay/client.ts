import { RelayNetworkLayer } from "react-relay-network-modern/node8"
import RelaySSR from "react-relay-network-modern-ssr/node8/client"
import { Environment, RecordSource, Store } from "relay-runtime"
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment"
import { middleware } from "./middleware"

const source = new RecordSource()
const store = new Store(source)

let storeEnvironment: RelayModernEnvironment

export const clientEnvironment = {
  createEnvironment: (relayData: any) => {
    if (storeEnvironment) {
      return storeEnvironment
    }

    storeEnvironment = new Environment({
      store,
      network: new RelayNetworkLayer([
        ...middleware,
        new RelaySSR(relayData).getMiddleware({
          lookup: false,
        }),
      ]),
    })

    return storeEnvironment
  },
}
