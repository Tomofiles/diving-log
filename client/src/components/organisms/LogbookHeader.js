import React, { useState } from 'react'

import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Avatar,
  IconButton,
  Popper,
  Paper,
  Box,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const LogbookHeader = props => {
  const element =  document.getElementsByName('csrf-token')[0];
  const [ anchorEl, setAnchorEl ] = useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const onClickLogout = () => {
    document.location = "/logout";
  }

  return(
    <div className={classes.root}>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            LOG BOOK
          </Typography>
          <IconButton color="inherit" onClick={handleClick}>
            <Avatar
              alt={props.session.name}
              src={props.session.avatar} />
          </IconButton>
          <Popper open={open} anchorEl={anchorEl}>
            <Paper elevation={3}>
              <Box p={4}>
                <Button color="inherit" onClick={onClickLogout}>ログアウト</Button>
              </Box>
            </Paper>
          </Popper>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default LogbookHeader 