import React from 'react';
import styled from 'styled-components';

import { fontSize, spacing, typography } from '../theme';

const H1 = styled.h1`
	font-size: ${fontSize(3)};
	margin-top: ${spacing(3)};
	margin-bottom: ${spacing(3)};
`;

const H2 = styled.h2`
	font-size: ${fontSize(2)};
	margin-top: ${spacing(2)};
	margin-bottom: ${spacing(2)};
`;

const H3 = styled.h3`
	font-size: ${fontSize(1)};
	margin-top: ${spacing(1)};
	margin-bottom: ${spacing(1)};
`;

const HeadingMap = {
	1: H1,
	2: H2,
	3: H3,
};

const Heading = ({ level = 1, children, pop, ...rest }) => {
	const Component = HeadingMap[level] || H1;

	let props = { ...rest };

	if (pop) {
		props.style = {
			color: typography('popColor'),
		};
	}

	return <Component {...props}>{children}</Component>;
};

export default Heading;
