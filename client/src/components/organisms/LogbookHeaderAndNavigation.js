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
  Hidden,
} from '@material-ui/core';

import { Collections, Map, Menu, Store } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
    },
  },
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
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
  const [ mobileOpen, setMobileOpen ] = useState(false);

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
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
    </div>
  );

  return(
    <div className={classes.root}>
      <nav>
        <Hidden smUp implementation="css">
          <Drawer
            className={classes.drawer}
            variant="temporary"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
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