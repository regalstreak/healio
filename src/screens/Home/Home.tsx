import React from 'react';
import "../../library/res/css/Home.css";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';

import heroImage from '../../library/res/images/hero-free.svg';
import Why from './Why';
import What from './What';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(2),
            borderRadius: '200px',
            width: '10rem',
            height: '3rem',
            fontFamily: 'Raleway',
            fontSize: 16
        },
        buttonBottom: {
            borderRadius: '200px',
            width: '10rem',
            height: '3rem',
            fontFamily: 'Raleway',
            fontSize: 16,
            marginTop: 20
        },
        try: {
            background: '#22242B',
            color: 'white'
        },
        input: {
            display: 'none',
        },
        toolbar: {
            background: 'white',
            padding: '1.5rem 3rem',
        },
        blueButton: {
            background: '#2A64D6'
        },
        buttonLink: {
            width: '6rem'
        }
    }),
);


interface IHomeProps {

}

interface IHideOnScrollProps {
    window?: () => Window;
    children: React.ReactElement;
}

const HideOnScroll = (props: IHideOnScrollProps) => {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}


export default (props: IHomeProps) => {

    const classes = useStyles();

    return (
        <div>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar className={classes.toolbar}>
                        <div className='logo-container'>
                            healio
                            {/* <Button
                                variant='text'
                                className={classes.buttonLink}
                            >
                                Login
                            </Button>
                            <Button
                                variant='text'
                                className={classes.buttonLink}

                            >
                                Login
                            </Button> */}
                        </div>

                        <div className='buttons-container'>
                            <Button
                                variant="outlined"
                                className={classes.button}

                            >
                                Login
                            </Button>
                            <Button
                                variant="contained"
                                className={classes.button + ' ' + classes.try + ' ' + classes.blueButton}

                            >
                                Try Healio
                    </Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <div
                style={{ marginTop: '2rem' }}
                className='home'
            >

                <div className='main-text'>

                    <div className='hero-text'>
                        It's Your Data.
                    <br />
                        Get Paid For it!
                    </div>

                    <div className='hero-subText'>
                        healio provides a secure marketplace for verified medical research
                        and EMR data. We put you in control to pick who to sell to.
                        And also get you a cut of the profits.
                    </div>

                    <Button
                        variant="contained"
                        className={classes.buttonBottom + ' ' + classes.try + ' ' + classes.blueButton}

                    >
                        Try Healio
                    </Button>
                </div>

                <img src={heroImage}
                    className='hero-image'></img>


            </div>

            <div>
                <What />
            </div>
            <div>
                <Why />
            </div>


        </div>
    )
}
