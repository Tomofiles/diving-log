import React, { useEffect, useState } from 'react'

import {
  Typography,
  Container,
  makeStyles,
  Paper,
  Box,
  Grid,
  TextField,
  Divider,
  Button,
  Select,
  MenuItem,
  FormControl,
  IconButton,
} from '@material-ui/core';
import {
  MapContainer,
  Marker,
  TileLayer,
  useMapEvents
} from 'react-leaflet';
import moment from 'moment';
import { updateLog, deleteLog } from '../../api/logs';
import { Launch } from '@material-ui/icons';

const headerHeight = 64;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    marginTop: headerHeight + 20,
  },
  map: {
    height: 400,
  }
}));

const MapMoveEvent = props => {
  useMapEvents({
    move: e => {
      props.changeCenter(e.target.getCenter());
    },
  })
  return (<></>)
}

const Logs = props => {
  const classes = useStyles();
  const [ isEdit, setIsEdit ] = useState(false);
  const [ item, setItem ] = useState(undefined);

  useEffect(() => {
    const newItem = Object.assign({}, props.item);
    newItem.in_time = moment(newItem.in_time).utc().format('HH:mm');
    newItem.out_time = moment(newItem.out_time).utc().format('HH:mm');
    newItem.shop_name = "";
    if (newItem.shop_id !== -1) {
      newItem.shop_name = props.shops.find(shop => shop.id === newItem.shop_id).shop_name;
    }
    newItem.shop_url = `/shops/${newItem.shop_id}`
    setItem(newItem);
    setIsEdit(props.isEdit);
  }, [ props.item, props.isEdit, setItem, props.shops ])

  const onClickEdit = () => {
    document.location = `/logs/${props.item.id}?m=edit`;
  }

  const onClickCancel = () => {
    document.location = `/logs/${props.item.id}`;
  }

  const onClickDelete = () => {
    deleteLog(props.item.id)
      .then(() => {
        document.location = "/logbook?m=mylog";
      })
  }

  const onClickSave = () => {
    updateLog(props.item.id, item)
      .then(() => {
        document.location = `/logs/${props.item.id}`;
      })
  }

  const onChangeInput = (key, e) => {
    setItem(item => {
      const newItem = Object.assign({}, item);
      newItem[key] = e.target.value;
      return newItem;
    });
  }

  const onChangeMapPosition = latlng => {
    setItem(item => {
      const newItem = Object.assign({}, item);
      newItem.map_position_lat = latlng.lat;
      newItem.map_position_lng = latlng.lng;
      return newItem;
    });
  }

  const onChangeShopSelect = e => {
    setItem(item => {
      const newItem = Object.assign({}, item);
      newItem.shop_id = e.target.value;
      return newItem;
    });
  }

  return(
    <div className={classes.root}>
      {item &&
        <Container maxWidth="md">
        <Box pb={3}>
          <Paper
            component="main"
            elevation={3}
            className={classes.content}>
              <Box p={2}>
                <header>
                  <Box p={1} display="flex">
                    <Typography variant="h6" className={classes.title}>
                      ???????????????
                    </Typography>
                    {isEdit
                      ? <>
                          <Button onClick={onClickDelete}>??????</Button>
                          <Button onClick={onClickCancel}>???????????????</Button>
                        </>
                      : <Button onClick={onClickEdit}>??????</Button>
                    }
                  </Box>
                  <Divider />
                </header>
                <section>
                  <Box p={2}>
                    <Grid container spacing={1} alignItems="center" justifyContent="center">
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            ?????????No.
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" value={item.no} onChange={e => onChangeInput("no", e)} /> 
                          : <Typography>{item.no}</Typography>
                        }
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            ??????
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" type="date" value={item.date} onChange={e => onChangeInput("date", e)} /> 
                          : <Typography>{item.date}</Typography>
                        }
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            ?????????
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={10}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" value={item.diving_point} onChange={e => onChangeInput("diving_point", e)} /> 
                          : <Typography>{item.diving_point}</Typography>
                        }
                      </Grid>
                    </Grid>
                  </Box>
                  <Divider />
                  <Box p={2}>
                    <Grid container spacing={1} alignItems="center" justifyContent="center">
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            ?????? (???)
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" value={item.temperature} onChange={e => onChangeInput("temperature", e)} /> 
                          : <Typography>{item.temperature}</Typography>
                        }
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            ?????? (???)
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" value={item.water_temperature} onChange={e => onChangeInput("water_temperature", e)} /> 
                          : <Typography>{item.water_temperature}</Typography>
                        }
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            IN ??????
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" type="time" value={item.in_time} onChange={e => onChangeInput("in_time", e)} /> 
                          : <Typography>{item.in_time}</Typography>
                        }
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            OUT ??????
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" type="time" value={item.out_time} onChange={e => onChangeInput("out_time", e)} /> 
                          : <Typography>{item.out_time}</Typography>
                        }
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            ??????????????? (bar)
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" value={item.start_pressure} onChange={e => onChangeInput("start_pressure", e)} /> 
                          : <Typography>{item.start_pressure}</Typography>
                        }
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            ??????????????? (bar)
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" value={item.end_pressure} onChange={e => onChangeInput("end_pressure", e)} /> 
                          : <Typography>{item.end_pressure}</Typography>
                        }
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            ???????????? (m)
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" value={item.max_depth} onChange={e => onChangeInput("max_depth", e)} /> 
                          : <Typography>{item.max_depth}</Typography>
                        }
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            ???????????? (m)
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" value={item.average_depth} onChange={e => onChangeInput("average_depth", e)} /> 
                          : <Typography>{item.average_depth}</Typography>
                        }
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            ????????? (m)
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" value={item.transparency} onChange={e => onChangeInput("transparency", e)} /> 
                          : <Typography>{item.transparency}</Typography>
                        }
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            ???????????? (???)
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" value={item.diving_time} onChange={e => onChangeInput("diving_time", e)} /> 
                          : <Typography>{item.diving_time}</Typography>
                        }
                      </Grid>
                    </Grid>
                  </Box>
                  <Divider />
                  <Box p={2}>
                    <Grid container spacing={1} alignItems="center" justifyContent="center">
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            ???????????? (kg)
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" value={item.weight} onChange={e => onChangeInput("weight", e)} /> 
                          : <Typography>{item.weight}</Typography>
                        }
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            ???????????????
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" value={item.suits} onChange={e => onChangeInput("suits", e)} /> 
                          : <Typography>{item.suits}</Typography>
                        }
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            ?????????????????????
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" value={item.entry} onChange={e => onChangeInput("entry", e)} /> 
                          : <Typography>{item.entry}</Typography>
                        }
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            ???????????????
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" value={item.water} onChange={e => onChangeInput("water", e)} /> 
                          : <Typography>{item.water}</Typography>
                        }
                      </Grid>
                    </Grid>
                  </Box>
                  <Divider />
                  <Box p={2}>
                    <Grid container spacing={1} alignItems="center" justifyContent="center">
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            ????????????
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        {isEdit
                          ? <FormControl fullWidth variant="outlined" size="small">
                              <Select
                                  value={item.shop_id}
                                  onChange={onChangeShopSelect}
                                >
                                  <MenuItem value={-1}>-</MenuItem>
                                  {props.shops.map(shop => (
                                    <MenuItem key={shop.id} value={shop.id}>{shop.shop_name}</MenuItem>
                                  ))}
                                </Select>
                            </FormControl>
                          : <Typography>
                              {item.shop_id !== -1 &&
                                <>
                                  {item.shop_name}
                                  <IconButton size="small" target="_blank" href={item.shop_url}>
                                    <Launch />
                                  </IconButton>
                                </>
                              }
                            </Typography>
                        }
                      </Grid>
                      <Grid item sm={6}/>
                    </Grid>
                  </Box>
                  <Divider />
                  <Box p={2}>
                    <Grid container spacing={1} alignItems="center" justifyContent="center">
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            ?????????
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={10}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" multiline rows={4} value={item.free_text} onChange={e => onChangeInput("free_text", e)} /> 
                          : <Typography>{item.free_text}</Typography>
                        }
                      </Grid>
                    </Grid>
                  </Box>
                  <Divider />
                  <Box p={2}>
                    <Grid container spacing={1} alignItems="center" justifyContent="center">
                      <Grid item xs={12}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            ??????
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                      {isEdit && 
                        <MapContainer center={[item.map_position_lat, item.map_position_lng]} zoom={13} scrollWheelZoom={false} className={classes.map}>
                          <TileLayer
                            attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                          <MapMoveEvent changeCenter={onChangeMapPosition} />
                          <Marker position={[item.map_position_lat, item.map_position_lng]} />
                        </MapContainer>
                      }
                      {!isEdit && 
                        <MapContainer center={[item.map_position_lat, item.map_position_lng]} zoom={13} scrollWheelZoom={false} className={classes.map}>
                          <TileLayer
                            attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                          <Marker position={[item.map_position_lat, item.map_position_lng]} />
                        </MapContainer>
                      }
                      </Grid>
                      {isEdit &&
                        <>
                          <Grid item xs={4} sm={2}>
                            <Typography component="div">
                              <Box fontWeight="fontWeightBold">
                                ??????
                              </Box>
                            </Typography>
                          </Grid>
                          <Grid item xs={8} sm={4}>
                            <Typography>{item.map_position_lat}</Typography>
                          </Grid>
                          <Grid item xs={4} sm={2}>
                            <Typography component="div">
                              <Box fontWeight="fontWeightBold">
                                ??????
                              </Box>
                            </Typography>
                          </Grid>
                          <Grid item xs={8} sm={4}>
                            <Typography>{item.map_position_lng}</Typography>
                          </Grid>
                        </>
                      }
                    </Grid>
                  </Box>
                  {isEdit &&
                    <>
                      <Divider />
                      <Box p={2}>
                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                          <Grid item xs={12}>
                            <Button variant="contained" color="primary" onClick={onClickSave}>??????</Button>
                          </Grid>
                        </Grid>
                      </Box>
                    </>
                  }
                </section>
              </Box>
          </Paper>
        </Box>
        </Container>
      }
    </div>
  )
}

export default Logs