import React from "react"
import { Link } from "gatsby"

import PrintLayout from "../components/PrintLayout"
import SEO from "../components/seo"

const HEADER_STYLES = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}

const Header = () => {
  return (
    <div style={HEADER_STYLES}>
      <h1>Jason Kinnear</h1>
      <h2>==Professional Tagline==</h2>
    </div>
  )
}

const PageHr = () => {
  return (
    <hr
      style={{
        height: "4px",
      }}
    />
  )
}

const ResumePage = () => (
  <PrintLayout>
    <SEO title="Resume" />
    <Header />

    <PageHr />
    <i class="material-icons">face</i>
  </PrintLayout>
)

export default ResumePage
