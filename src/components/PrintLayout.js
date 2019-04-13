/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const PRINT_LAYOUT_STYLES = {
  margin: `0 auto`,
  padding: 0,
  paddingTop: 0,
}

const PrintLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query PrintTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div style={PRINT_LAYOUT_STYLES}>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <main>{children}</main>
      </div>
    )}
  />
)

PrintLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PrintLayout
