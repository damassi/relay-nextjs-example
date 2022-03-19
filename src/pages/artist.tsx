import { getRelayData } from "system/relay"
import { useLazyLoadQuery } from "react-relay"
import { graphql } from "relay-runtime"
import { artistQuery } from "__generated__/artistQuery.graphql"
import { Box, Text } from "@artsy/palette"

interface ArtistProps {
  artist: artistQuery["response"]["artist"]
}

const ARTIST_QUERY = graphql`
  query artistQuery {
    artist(id: "andy-warhol") {
      internalID
      bio
    }
  }
`

const Home: React.FC<ArtistProps> = () => {
  const { artist } = useLazyLoadQuery<artistQuery>(ARTIST_QUERY, {})

  if (!artist) {
    return null
  }

  return (
    <Box m={1}>
      <Text variant="md">{artist.bio}</Text>
    </Box>
  )
}

export async function getServerSideProps() {
  const { relayData } = await getRelayData(ARTIST_QUERY)

  return {
    props: {
      relayData,
    },
  }
}

export default Home
