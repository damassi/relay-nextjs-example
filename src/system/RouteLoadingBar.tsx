import { Box, THEME_V3 } from "@artsy/palette"
import NextNProgress from "nextjs-progressbar"

export const RouteLoadingBar: React.FC = () => {
  return (
    <NextNProgress
      color={THEME_V3.colors.brand}
      startPosition={Math.random() * 1}
      stopDelayMs={200}
      height={2}
      options={{
        easing: "ease-in-out",
        speed: 700,
        minimum: 0.5,
        showSpinner: false,
      }}
    />
  )
}
