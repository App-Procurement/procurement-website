import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
	toTop: {
		zIndex: 2,
		position: 'fixed',
		bottom: '1rem',
		backgroundColor: '#DCDCDC',
		color: 'black',
		'&:hover, &.Mui-focusVisible': {
			transition: '0.3s',
			color: '#397BA6',
			backgroundColor: '#DCDCDC'
		},
		left: '2%',
		padding: '7px'
	}
}));

const ScrollBottom = ({ showBelow }) => {
	const classes = useStyles();

	const [ show, setShow ] = useState(showBelow ? false : true);

	const handleScroll = () => {
		if (window.pageYOffset > showBelow) {
			if (!show) setShow(true);
		} else {
			if (show) setShow(false);
		}
	};

	const handleClick = () => {
		window.scrollBy(0, 800);
		// window[`scrollTo`]({ top: document.body.scrollHeight, behavior: `smooth` })
		// window[`scrollBy`]({ top: 200, behavior: `smooth` });
	};

	useEffect(() => {
		if (showBelow) {
			window.addEventListener(`scroll`, handleScroll);
			return () => window.removeEventListener(`scroll`, handleScroll);
		}
	});

	return (
		<div>
			<IconButton onClick={handleClick} className={classes.toTop}>
				<ExpandMoreIcon />
			</IconButton>
		</div>
	);
};

export default ScrollBottom;
