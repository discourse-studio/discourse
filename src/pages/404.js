import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import MarkAnimation from "../components/MarkAnimation"

const PageTitle = styled.h1`
  color: #fff;
`
const HomeLink = styled(Link)`
  color: #fff;

  &:hover {
    animation-name: ${MarkAnimation};
    animation-duration: 0.75s;
    animation-iteration-count: infinite;
  }
`

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <PageTitle>
      nothing here take the trip <HomeLink to="/">home</HomeLink>
    </PageTitle>
  </Layout>
)

export default NotFoundPage
