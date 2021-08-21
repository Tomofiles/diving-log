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

const MyShop = props => {
  const classes = useStyles();

  const onClickLog = id => {
    document.location = `/shops/${id}`;
  }

  return (
    <main className={props.classes.content}>
      <Grid container spacing={2}>
        {props.items.map(item => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.no}>
            <Card className={classes.root} elevation={2} onClick={() => onClickLog(item.id)}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={img}
                  title="shop-cover-img"
                />
                <CardContent>
                  <Typography variant="caption" color="textSecondary" component="p">
                    {item.organization}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.shop_name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.shop_area}
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

export default MyShop;