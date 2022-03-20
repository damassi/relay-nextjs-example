import { screen } from "@testing-library/react"
import { graphql } from "react-relay"
import { setupTestWrapper } from "system/relay"
import ArtistName from "../ArtistName"

jest.unmock("react-relay")

const { renderWithRelay } = setupTestWrapper({
  Component: ArtistName,
  query: graphql`
    query ArtistNameTestQuery @relay_test_operation {
      artist(id: "example") {
        ...ArtistName_artist
      }
    }
  `,
})

describe("ArticleSeries", () => {
  it("renders the article", () => {
    renderWithRelay({
      Artist: () => ({
        name: "Picasso",
      }),
    })

    expect(screen.getByText("Picasso")).toBeInTheDocument()
  })
})
