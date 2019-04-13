import m from 'modularscale';

const BASE_FONT_SIZE = 12;
const SPACING_DIV = 4;

function calcSize(mNumber) {
	return m(mNumber) * BASE_FONT_SIZE;
}

function getPx(mNumber) {
	return `${calcSize(mNumber)}px`;
}

const THEME = {
	typography: {
		color: '#403F41',
		popColor: '#738B7E',
		subtleColor: '#E6E5E5',
		fontSize: {
			'-2': getPx(-2),
			'-1': getPx(-1),
			'0': getPx(0),
			'1': getPx(1),
			'2': getPx(2),
			'3': getPx(3),
			'4': getPx(4),
			'5': getPx(5),
		},
	},
	spacings: {
		'0': `${calcSize(0)}px`,
		'1': `${calcSize(1) / SPACING_DIV}px`,
		'2': `${calcSize(2) / SPACING_DIV}px`,
		'3': `${calcSize(3) / SPACING_DIV}px`,
		'4': `${calcSize(4) / SPACING_DIV}px`,
		'5': `${calcSize(5) / SPACING_DIV}px`,
	},
};

export function typography(name) {
	if (name && THEME.typography[name]) {
		return THEME.typography[name];
	}

	return THEME.typography;
}

export function fontSize(size = 0) {
	return THEME.typography.fontSize[size];
}

export function spacing(size = 0) {
	return THEME.spacings[size];
}

export default THEME;
