/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import "./layout.css"
import "./fonts.css"

const MainLayout = styled.main`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
`

const Layout = ({ children }) => {
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
    <>
      <MainLayout>{children}</MainLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
