import { fetchQuery, GraphQLTaggedNode } from "relay-runtime"
import { initEnvironment } from "./createEnvironment"

export const getRelayData = async (
  query: GraphQLTaggedNode,
  variables = {},
  cacheConfig = {}
) => {
  const { environment, relaySSR } = initEnvironment()
  await fetchQuery(environment, query, variables, cacheConfig).toPromise()
  const data = (await relaySSR.getCache())?.[0]
  const relayData = data ? [[data[0], data[1].json]] : {}

  return {
    relayData,
  }
}
