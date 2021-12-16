import * as React from "react"
import VimeoPlayer from "../components/VimeoPlayer"

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <VimeoPlayer Src="https://player.vimeo.com/video/397582425?background=1" />
    </main>
  )
}

export default IndexPage
