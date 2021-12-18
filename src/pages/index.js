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
  height: 100%;
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
  return (
    <Layout>
      <Seo
        title="Discourse"
        metaDescription="A Design Studio. The Gossip About town."
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
