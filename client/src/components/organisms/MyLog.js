import React from 'react'

import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";

import img from '../../images/GOPR0058_2.JPG';
import { Add } from '@material-ui/icons';
import { createLog } from '../../api/logs';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 170,
  },
  new: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
});

const MyLog = props => {
  const classes = useStyles();

  const onClickLog = id => {
    document.location = `/logs/${id}`;
  }

  const onClickNew = () => {
    createLog()
      .then(res => {
        document.location = `/logs/${res.data.id}?m=edit`;
      })
  }

  return (
    <>
      <main className={props.classes.content}>
        <Grid container spacing={2}>
          {props.items.map(item => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card className={classes.root} elevation={2} onClick={() => onClickLog(item.id)}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={img}
                    title="log-cover-img"
                  />
                  <CardContent>
                    <Typography variant="caption" color="textSecondary" component="p">
                      No.{item.no}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.diving_point}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {item.date}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
      <footer>
        <Button variant="contained" color="primary" aria-label="new" className={classes.new} onClick={onClickNew}>
          <Add />
          <Typography>New</Typography>
        </Button>
      </footer>
    </>
  )
}

export default MyLog;