import React from 'react';
import styled from 'styled-components';
import Heading from '../elements/Heading';
import { typography, spacing } from '../theme';
const StyledMe = styled.div`
	padding-top: ${spacing(5)};
	/* padding-bottom: ${spacing(5)}; */
`;

// const StyledProfileImage = styled.img`
// 	position: relative;
// 	height: 150px;
// 	width: 150px;
// 	margin-right: 10px;
// 	border-radius: 50%;
// 	overflow: hidden;
// 	border: 5px solid white;
// 	/* box-shadow: 1px 1px 15px -5px black; */
// 	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
// 	transition: all 0.3s ease;
// `;

const Me = () => {
	return (
		<StyledMe>
			{/* <StyledProfileImage src="https://media.licdn.com/dms/image/C5103AQG2FBBl5DLn6g/profile-displayphoto-shrink_100_100/0?e=1560384000&v=beta&t=dWcgyVQCeUukp1WkbdcAjdARwSAZRyISgoJU-eBZbSY" /> */}

			<Heading>
				Jason <span style={{ color: typography('popColor'), fontSize: 'inherit' }}>Kinnear</span>
			</Heading>
			<Heading level={3}>Software Developer</Heading>
		</StyledMe>
	);
};

export default Me;
