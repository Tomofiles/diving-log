import React, { useState } from 'react'

import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Avatar,
  IconButton,
  Popover,
  Button,
} from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const LogsHeader = props => {
  const [ anchorEl, setAnchorEl ] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const classes = useStyles();

  const onClickBack = () => {
    history.back();
  }

  const onClickAvatar = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const onClickClose = () => {
    setAnchorEl(null);
  };

  const onClickLogout = () => {
    document.location = "/logout";
  }

  return(
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" onClick={onClickBack}>
            <ArrowBackIos />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          <IconButton color="inherit" onClick={onClickAvatar}>
            <Avatar
              alt={props.session.name}
              src={props.session.avatar} />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={onClickClose}    
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            >
            <Button color="inherit" onClick={onClickLogout}>ログアウト</Button>
          </Popover>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default LogsHeader 