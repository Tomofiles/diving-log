import React from 'react'
import { IconButton, makeStyles, Typography } from '@material-ui/core';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';
import { Launch } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  map: {
    height: "100vh",
  }
}));

const MyMap = props => {
  const classes = useStyles();

  return (
    <main className={props.classes.map}>
      <MapContainer center={[37.0, 135.0]} zoom={5} className={classes.map}>
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {props.items.map(item => (
          <Marker key={item.id} position={[item.map_position_lat, item.map_position_lng]}>
            <Popup>
              No.{item.no}
              <Typography gutterBottom variant="h5" component="h2" style={{}}>
                {item.diving_point}
                <IconButton size="small" target="_blank" href={`/logs/${item.id}`}>
                  <Launch />
                </IconButton>
              </Typography>
              {item.date}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </main>
  )
}

export default MyMap;