import React from 'react';
import styled from 'styled-components';
import Heading from '../elements/Heading';
import { typography } from '../theme';
const THINGS = [
	'JavaScript',
	'React',
	'Redux',
	'Styled-Components',
	'EmotionJS',
	'Lumen',
	'Flux',
	'Docker',
	'Backbone',
	'Laravel',
	'API',
	'GIT',
	'Code Review',
	'JIRA',
	'BitBucket',
	'GitHub',
	'Reselect',
	'MarionetteJS',
	'Babel',
	'ES6',
	'ES5',
];

// STOLE THIS - Thanks Stack Oveflow
function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

const Styled__ThingsILike = styled.div`
	display: flex;
	justify-content: space-around;
`;

const Styled__Heading = styled(Heading)`
	text-transform: uppercase;
	opacity: 0.4;
	flex: 0 0 auto;
	color: ${typography('popColor')};
`;

const ThingsILike = () => {
	return (
		<Styled__ThingsILike>
			{shuffle(THINGS).map((thing, index) => {
				return (
					<>
						<Styled__Heading level={3}>&nbsp;{thing}&nbsp;</Styled__Heading>
						<Styled__Heading level={3}> | </Styled__Heading>
					</>
				);
			})}
		</Styled__ThingsILike>
	);
};

export default ThingsILike;