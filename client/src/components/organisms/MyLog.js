import React from 'react'

import {
  Typography
} from "@material-ui/core";

const MyLog = props => {
  return (
    <main className={props.classes.content}>
      <Typography variant="h1">MYLOG</Typography>
    </main>
  )
}

export default MyLog;