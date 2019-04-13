import React from 'react';
import PrintLayout from '../components/PrintLayout';
import SEO from '../components/seo';

const HEADER_STYLES = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
};

const Header = () => {
	return (
		<div style={HEADER_STYLES}>
			<h1>Jason Kinnear</h1>
		</div>
	);
};

const PageHr = () => {
	return (
		<hr
			style={{
				height: '4px',
			}}
		/>
	);
};

const ResumePage = () => (
	<PrintLayout>
		<SEO title="Resume" />
		soon
	</PrintLayout>
);

export default ResumePage;
