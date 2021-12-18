import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

import Mark from "../components/Mark"
import MarkAnimation from "../components/MarkAnimation"
import VimeoPlayer from "../components/VimeoPlayer"

const Content = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  justify-content: space-between;
`
const EmailLink = styled.a`
  align-self: flex-end;
  font-size: 2rem;
  color: #000;
  text-decoration: none;

  &:hover {
    animation-name: ${MarkAnimation};
    animation-duration: 0.75s;
    animation-iteration-count: infinite;
  }
`

const IndexPage = () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty("--vh", `${vh}px`)

  React.useEffect(() => {
    onResize()
    window && window.addEventListener("resize", onResize)
    return () => {
      window && window.removeEventListener("resize", onResize)
    }
  }, [])
  const onResize = (e) => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }

  return (
    <Layout>
      <Seo
        title="Discourse"
        metaDescription="A Design Studio. The Subject of Local Gossip."
      />
      <Content>
        <Mark />
        <EmailLink href="mailto:hello@discourse.studio">Contact</EmailLink>
        <VimeoPlayer Src="https://player.vimeo.com/video/658003139?background=1" />
      </Content>
    </Layout>
  )
}

export default IndexPage
