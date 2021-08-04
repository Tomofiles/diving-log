import React, { useEffect, useState } from 'react'

import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Avatar,
  IconButton,
  Popover,
  Button,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import { Collections, Map, Store } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
}));

const LogbookHeaderAndNavigation = props => {
  const [ anchorEl, setAnchorEl ] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const classes = useStyles();

  const [ myLog, setMyLog ] = useState(false);
  const [ myShop, setMyShop ] = useState(false);
  const [ myMap, setMyMap ] = useState(false);
  const [ title, setTitle ] = useState("");

  useEffect(() => {
    if (props.isMyLog) {
      setMyLog(true);
      setTitle("マイ・ログ");
    }
    if (props.isMyShop) {
      setMyShop(true);
      setTitle("マイ・ショップ");
    }
    if (props.isMyMap) {
      setMyMap(true);
      setTitle("マイ・マップ");
    }
  }, [ props, setMyLog, setMyShop, setMyMap, setTitle ])

  const onClickAvatar = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const onClickClose = () => {
    setAnchorEl(null);
  };

  const onClickMenu = mode => {
    document.location = "/logbook?m=" + mode;
  }

  const onClickLogout = () => {
    document.location = "/logout";
  }

  return(
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button key="my-log" selected={myLog} onClick={() => onClickMenu("mylog")}>
            <ListItemIcon><Collections/></ListItemIcon>
            <ListItemText primary="マイ・ログ" />
          </ListItem>
          <ListItem button key="my-shop" selected={myShop} onClick={() => onClickMenu("myshop")}>
            <ListItemIcon><Store/></ListItemIcon>
            <ListItemText primary="マイ・ショップ" />
          </ListItem>
          <ListItem button key="my-map" selected={myMap} onClick={() => onClickMenu("mymap")}>
            <ListItemIcon><Map/></ListItemIcon>
            <ListItemText primary="マイ・マップ" />
          </ListItem>
        </List>
      </Drawer>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {title}
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

export default LogbookHeaderAndNavigation 