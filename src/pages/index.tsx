import { getRelayData } from "system/relay"
import { useLazyLoadQuery } from "react-relay"
import { graphql } from "relay-runtime"
import { pagesQuery } from "__generated__/pagesQuery.graphql"
import { Box, Text } from "@artsy/palette"
import Link from "next/link"

interface HomeProps {
  artist: pagesQuery["response"]["artist"]
}

const APP_QUERY = graphql`
  query pagesQuery {
    artist(id: "andy-warhol") {
      internalID
      name
    }
  }
`

const Home: React.FC<HomeProps> = () => {
  const { artist } = useLazyLoadQuery<pagesQuery>(APP_QUERY, {})

  if (!artist) {
    return null
  }

  return (
    <Box m={1}>
      <Text variant="xxl">{artist.name}</Text>
      <Link href="/artist">Go to artist</Link>
    </Box>
  )
}

export async function getServerSideProps() {
  const { relayData } = await getRelayData(APP_QUERY)

  return {
    props: {
      relayData,
    },
  }
}

export default Home
