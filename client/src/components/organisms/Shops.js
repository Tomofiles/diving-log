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
  Link,
} from '@material-ui/core';
import {
  MapContainer,
  Marker,
  TileLayer,
  useMapEvents
} from 'react-leaflet';
import { deleteShop, updateShop } from '../../api/shops';

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

const Shops = props => {
  const classes = useStyles();
  const [ isEdit, setIsEdit ] = useState(false);
  const [ item, setItem ] = useState(undefined);

  useEffect(() => {
    const newItem = Object.assign({}, props.item);
    setItem(newItem);
    setIsEdit(props.isEdit);
  }, [ props.item, props.isEdit, setItem ])

  const onClickEdit = () => {
    document.location = `/shops/${props.item.id}?m=edit`;
  }

  const onClickCancel = () => {
    document.location = `/shops/${props.item.id}`;
  }

  const onClickDelete = () => {
    deleteShop(props.item.id)
      .then(() => {
        document.location = "/logbook?m=myshop";
      })
  }

  const onClickSave = () => {
    updateShop(props.item.id, item)
      .then(() => {
        document.location = `/shops/${props.item.id}`;
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
                      マイ・ショップ
                    </Typography>
                    {isEdit
                      ? <>
                          <Button onClick={onClickDelete}>削除</Button>
                          <Button onClick={onClickCancel}>キャンセル</Button>
                        </>
                      : <Button onClick={onClickEdit}>編集</Button>
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
                            ショップ名
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" value={item.shop_name} onChange={e => onChangeInput("shop_name", e)} /> 
                          : <Typography>{item.shop_name}</Typography>
                        }
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            団体名
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" value={item.organization} onChange={e => onChangeInput("organization", e)} /> 
                          : <Typography>{item.organization}</Typography>
                        }
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            ショップエリア
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={10}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" value={item.shop_area} onChange={e => onChangeInput("shop_area", e)} /> 
                          : <Typography>{item.shop_area}</Typography>
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
                            住所
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={10}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" value={item.address} onChange={e => onChangeInput("address", e)} /> 
                          : <Typography>{item.address}</Typography>
                        }
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            URL
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={10}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" value={item.url} onChange={e => onChangeInput("url", e)} /> 
                          : <Link href={item.url}>{item.url}</Link>
                        }
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            電話番号
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        {isEdit
                          ? <TextField fullWidth variant="outlined" size="small" value={item.telephone_number} onChange={e => onChangeInput("telephone_number", e)} /> 
                          : <Typography>{item.telephone_number}</Typography>
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
                            自由欄
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
                            地図
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                      {isEdit && 
                        <MapContainer center={[item.map_position_lat, item.map_position_lng]} zoom={17} className={classes.map}>
                          <TileLayer
                            attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                          <MapMoveEvent changeCenter={onChangeMapPosition} />
                          <Marker position={[item.map_position_lat, item.map_position_lng]} />
                        </MapContainer>
                      }
                      {!isEdit && 
                        <MapContainer center={[item.map_position_lat, item.map_position_lng]} zoom={17} scrollWheelZoom={false} className={classes.map}>
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
                                緯度
                              </Box>
                            </Typography>
                          </Grid>
                          <Grid item xs={8} sm={4}>
                            <Typography>{item.map_position_lat}</Typography>
                          </Grid>
                          <Grid item xs={4} sm={2}>
                            <Typography component="div">
                              <Box fontWeight="fontWeightBold">
                                経度
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
                            <Button variant="contained" color="primary" onClick={onClickSave}>保存</Button>
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

export default Shops