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

import img from '../../images/GOPR0028_2.JPG';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const items = [
  {
    id: 1,
    no: 5,
    date: "2014-10-17",
    divePoint: "沖縄本島 恩納村 美留前",
  },
  {
    id: 2,
    no: 6,
    date: "2018-08-28",
    divePoint: "慶良間諸島 ナガンヌ島 北",
  },
  {
    id: 3,
    no: 7,
    date: "2018-08-28",
    divePoint: "慶良間諸島 渡嘉敷島 神宮",
  },
  {
    id: 4,
    no: 8,
    date: "2018-08-28",
    divePoint: "慶良間諸島 座間味島 知志",
  },
  {
    id: 5,
    no: 9,
    date: "2018-10-07",
    divePoint: "伊豆半島 堂ヶ島 瀬ノ浜",
  },
  {
    id: 6,
    no: 10,
    date: "2018-10-07",
    divePoint: "伊豆半島 堂ヶ島 白崎",
  },
  {
    id: 7,
    no: 11,
    date: "2018-10-08",
    divePoint: "伊豆半島 堂ヶ島 カマガ根",
  },
  {
    id: 8,
    no: 12,
    date: "2018-10-08",
    divePoint: "伊豆半島 堂ヶ島 フトウ根",
  },
];

const MyLog = props => {
  const classes = useStyles();

  const onClickLog = id => {
    document.location = `/logs/${id}`;
  }

  return (
    <main className={props.classes.content}>
      <Grid container spacing={2}>
        {items.reverse().map(item => (
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
                    {item.divePoint}
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