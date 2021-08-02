import React from 'react'

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Avatar,
  Box,
  Link,
  IconButton,
} from '@material-ui/core';

import logo from '../../images/diving_log_logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const AccountHeader = props => {
  const classes = useStyles();

  const onClickLogo = () => {
    document.location = "/";
  }

  const onClickLogin = () => {
    document.location = "/login";
  }

  const onClickSignup = () => {
    document.location = "/signup";
  }

  return(
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={onClickLogo}>
            <Box mx={1}>
              <img width="40px" alt="logo" src={logo}/>
            </Box>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link href="#" onClick={onClickLogo} color="inherit">
              DIVING LOG
            </Link>
          </Typography>
          {props.login && 
            <Button color="inherit" onClick={onClickLogin}>ログイン</Button>
          }
          {props.signup &&
            <Button color="inherit" onClick={onClickSignup}>登録</Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default AccountHeader 