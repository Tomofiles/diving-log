import React from 'react'

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";

import img from '../../images/GOPR0058_2.JPG';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 170,
  },
});

const MyLog = props => {
  const classes = useStyles();

  const onClickLog = id => {
    document.location = `/logs/${id}`;
  }

  return (
    <main className={props.classes.content}>
      <Grid container spacing={2}>
        {props.items.reverse().map(item => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.no}>
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
  )
}

export default MyLog;