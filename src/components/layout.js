import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import 'normalize.css';
import Heading from '../elements/Heading';
import styled, { createGlobalStyle } from 'styled-components';
import { typography, spacing } from '../theme';
import Me from './Me';
import ThingsILike from './ThingsILike';

const GlobalStyle = createGlobalStyle`
  * {
    color: ${typography('color')};
    font-family: 'Nunito Sans', 'Open Sans', sans-serif;
    font-size: 12px;
    font-weight: 300;
  }

	p {
		margin-top: 0;
		margin-bottom: ${spacing(1)};
	}

  body {
    background-color: #fbfbfb;
    border-top: 25px solid ${typography('subtleColor')};
    padding-top: 20px;
  }
`;

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={(data) => (
			<>
				{/* <Header siteTitle={data.site.siteMetadata.title} /> */}
				<div>
					<GlobalStyle />
					<ThingsILike />

					<main>{children}</main>
					{/* <footer>© {new Date().getFullYear()}, Built with Love</footer> */}
				</div>
			</>
		)}
	/>
);

Layout.Panel = styled.div`
	max-width: 700px;
	margin: ${spacing(5)} auto;
`;

const Styled__LayoutSection = styled(Layout.Panel)`
	margin-bottom: 100px;
`;

Layout.Section = ({ children, title }) => {
	return (
		<Styled__LayoutSection>
			<Heading pop level={3}>
				{title}
			</Heading>
			{children}
		</Styled__LayoutSection>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
