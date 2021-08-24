import React from 'react'

import {
  makeStyles,
  Typography
} from "@material-ui/core";
import MyLog from './MyLog';
import MyShop from './MyShop';
import MyMap from './MyMap';

const headerHeight = 64;
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    marginRight: 10,
    marginTop: headerHeight + 20,
    marginLeft: 20,
    [theme.breakpoints.up('sm')]: {
      marginLeft: drawerWidth + 20,
    },
  },
  map: {
    flexGrow: 1,
    marginTop: headerHeight,
    [theme.breakpoints.up('sm')]: {
      marginLeft: drawerWidth,
    },
  }
}));

const LogBookContents = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.isMyLog && <MyLog classes={classes} items={props.items} />}
      {props.isMyShop && <MyShop classes={classes} items={props.items} />}
      {props.isMyMap && <MyMap classes={classes} items={props.items} />}
    </div>
  )
}

export default LogBookContents;