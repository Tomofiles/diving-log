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
    marginTop: headerHeight + 20,
    marginLeft: drawerWidth + 20,
    marginRight: 10,
  }
}));

const LogBookContents = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.isMyLog && <MyLog classes={classes} items={props.items} />}
      {props.isMyShop && <MyShop classes={classes} />}
      {props.isMyMap && <MyMap classes={classes} />}
    </div>
  )
}

export default LogBookContents;