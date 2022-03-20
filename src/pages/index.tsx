import { graphql } from "relay-runtime"
import { pagesQuery } from "__generated__/pagesQuery.graphql"
import { Box, Text } from "@artsy/palette"
import Link from "next/link"
import { fetchRelayData } from "system/relay"
import { GetServerSideProps } from "next"
import { useExtractNodes } from "hooks/useExtractNodes"

interface HomeProps {
  artistsConnection: pagesQuery["response"]["artistsConnection"]
}

const Home: React.FC<HomeProps> = ({ artistsConnection }) => {
  const nodes = useExtractNodes(artistsConnection)

  if (!nodes.length) {
    return null
  }

  return (
    <>
      {nodes.map((artist, index) => {
        if (!artist.href) {
          return null
        }

        return (
          <Box m={1} key={index}>
            <Link href={artist.href} passHref>
              <Text variant="xxl" style={{ cursor: "pointer" }}>
                {artist.name} {">"}
              </Text>
            </Link>
          </Box>
        )
      })}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const props = await fetchRelayData({
    query: graphql`
      query pagesQuery {
        artistsConnection(first: 10, letter: "C") {
          edges {
            node {
              internalID
              name
              href
            }
          }
        }
      }
    `,
    cache: true,
  })

  return {
    props,
  }
}

export default Home
