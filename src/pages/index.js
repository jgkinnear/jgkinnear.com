import React from 'react';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Me from '../components/Me';
import styled from 'styled-components';
import { spacing, typography } from '../theme';
import Heading from '../elements/Heading';
import ThingsILike from '../components/ThingsILike';

const SectionBlock = styled.div`
	margin-bottom: ${spacing(5)};
`;

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[`Web Developer`, `Front End`, `React`, `JavaScript`]} />

		<ThingsILike />

		<Layout.Panel>
			<Me />
		</Layout.Panel>

		<Layout.Panel>
			<p>
				I’m a Software Developer who loves what I do. I build quality software, and help teams work productively
				together.
			</p>
		</Layout.Panel>

		<br />
		<Layout.Section title="My Playground">
			<SectionBlock>
				<Heading level={3}>redux-entity-reducer</Heading>
				<p>
					A package that allows a REST-like API to be normalized and stored client side. Includes memoization for
					selecting entities, and support for relationship management
				</p>
				<a href="https://github.com/jgkinnear/redux-entities-reducer">
					https://github.com/jgkinnear/redux-entities-reducer
				</a>
			</SectionBlock>

			<SectionBlock>
				<Heading level={3}>normlizr-strategies</Heading>
				<p>
					A package the provides a means to compose normalizr process strategies and providing a sensible default suite
					of strategies.
				</p>
				<a href="https://github.com/jgkinnear/normalizr-strategies">
					https://github.com/jgkinnear/normalizr-strategies
				</a>
			</SectionBlock>

			<SectionBlock>
				<Heading level={3}>NRLtip.com</Heading>
				<p>
					A pet project I've been rebuilding every since 2010. A sports tipping platform built from a JSON API and
					JavaScript SPA.
				</p>
				<strong style={{ fontWeight: 'bold' }}>Technology</strong>
				<ul>
					<li>React / Redux</li>
					<li>Emotion JS</li>
					<li>Laravel</li>
				</ul>
				<a href="https://nrltip.com">https://nrltip.com</a>
			</SectionBlock>
		</Layout.Section>
	</Layout>
);

export default IndexPage;
