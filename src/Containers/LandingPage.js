import React from 'react';
import logo from '../logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Button  from '@material-ui/core/Button'
import Icon  from '@material-ui/core/Icon';
import '../App.css';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <div className="App">
    <body className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Welcome to Dosadata! Let's Get Started!
        </p>
        <Button
            variant='contained'
            color='default'
            className = { classes.button }
            endIcon={<Icon>dvr</Icon>}
            component={Link}
            to='/home'
            >
            Get Started
        </Button>  
    </body>
    </div>
  );
}

export default LandingPage;
