import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    toTop: {
        zIndex: 2,
        position: 'fixed',
        bottom: '1rem',
        backgroundColor: '#DCDCDC',
        color: 'black',
        "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            color: '#397BA6',
            backgroundColor: '#DCDCDC'
        },
        right: '2%',
        padding: '7px'
    }
}))

const ScrollTop = ({
    showAbove,
}) => {

    const classes = useStyles();

    const [show, setShow] = useState(showAbove ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showAbove) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (showAbove) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return (
        <div>
            <IconButton onClick={handleClick} className={classes.toTop}>
                <ExpandLessIcon />
            </IconButton>
        </div>
    )
}

export default ScrollTop

