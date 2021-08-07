import React from 'react'

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
} from '@material-ui/core';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

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

const Logs = props => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Container maxWidth="md">
        <Paper
          component="main"
          elevation={3}
          className={classes.content}>
            <Box p={2}>
              <header>
                <Box p={1} display="flex">
                  <Typography variant="h6" className={classes.title}>
                    マイ・ログ
                  </Typography>
                  <Button onClick={() => {}}>編集</Button>
                </Box>
                <Divider />
              </header>
              <section>
                <Box p={2}>
                  <Grid container spacing={1} alignItems="center" justifyContent="center">
                    <Grid item xs={4} sm={2}>
                      <Typography>
                        <Box fontWeight="fontWeightBold">
                          ダイブNo.
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                      <Typography>8</Typography>
                      {/* <TextField fullWidth variant="outlined" size="small" value={8} /> */}
                    </Grid>
                    <Grid item xs={4} sm={2}>
                      <Typography>
                        <Box fontWeight="fontWeightBold">
                          日付
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                      <Typography>2018-08-28</Typography>
                      {/* <TextField fullWidth variant="outlined" size="small" value={"2018-08-28"} /> */}
                    </Grid>
                    <Grid item xs={4} sm={2}>
                      <Typography>
                        <Box fontWeight="fontWeightBold">
                          潜水地
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sm={10}>
                      <Typography>慶良間諸島 座間味島 知志</Typography>
                      {/* <TextField fullWidth variant="outlined" size="small" value={"慶良間諸島 座間味島 知志"} /> */}
                    </Grid>
                  </Grid>
                </Box>
                <Divider />
                <Box p={2}>
                  <Grid container spacing={1} alignItems="center" justifyContent="center">
                    <Grid item xs={4} sm={2}>
                      <Typography>
                        <Box fontWeight="fontWeightBold">
                          気温 (℃)
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                      <Typography>30</Typography>
                      {/* <TextField fullWidth variant="outlined" size="small" value={30} /> */}
                    </Grid>
                    <Grid item xs={4} sm={2}>
                      <Typography>
                        <Box fontWeight="fontWeightBold">
                          水温 (℃)
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                      <Typography>28.4</Typography>
                      {/* <TextField fullWidth variant="outlined" size="small" value={28.4} /> */}
                    </Grid>
                    <Grid item xs={4} sm={2}>
                      <Typography>
                        <Box fontWeight="fontWeightBold">
                          IN 時間
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                      <Typography>14:24</Typography>
                      {/* <TextField fullWidth variant="outlined" size="small" value={"14:24"} /> */}
                    </Grid>
                    <Grid item xs={4} sm={2}>
                      <Typography>
                        <Box fontWeight="fontWeightBold">
                          OUT 時間
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                      <Typography>15:09</Typography>
                      {/* <TextField fullWidth variant="outlined" size="small" value={"15:09"} /> */}
                    </Grid>
                    <Grid item xs={4} sm={2}>
                      <Typography>
                        <Box fontWeight="fontWeightBold">
                          開始時圧力 (bar)
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                      <Typography>200</Typography>
                      {/* <TextField fullWidth variant="outlined" size="small" value={200} /> */}
                    </Grid>
                    <Grid item xs={4} sm={2}>
                      <Typography>
                        <Box fontWeight="fontWeightBold">
                          終了時圧力 (bar)
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                      <Typography>50</Typography>
                      {/* <TextField fullWidth variant="outlined" size="small" value={50} /> */}
                    </Grid>
                    <Grid item xs={4} sm={2}>
                      <Typography>
                        <Box fontWeight="fontWeightBold">
                          最低深度 (m)
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                      <Typography>13.4</Typography>
                      {/* <TextField fullWidth variant="outlined" size="small" value={13.4} /> */}
                    </Grid>
                    <Grid item xs={4} sm={2}>
                      <Typography>
                        <Box fontWeight="fontWeightBold">
                          平均深度 (m)
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                      <Typography>9.2</Typography>
                      {/* <TextField fullWidth variant="outlined" size="small" value={9.2} /> */}
                    </Grid>
                    <Grid item xs={4} sm={2}>
                      <Typography>
                        <Box fontWeight="fontWeightBold">
                          透視度 (m)
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                      <Typography>20</Typography>
                      {/* <TextField fullWidth variant="outlined" size="small" value={20} /> */}
                    </Grid>
                    <Grid item xs={4} sm={2}>
                      <Typography>
                        <Box fontWeight="fontWeightBold">
                          潜水時間 (分)
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                      <Typography>45</Typography>
                      {/* <TextField fullWidth variant="outlined" size="small" value={45} /> */}
                    </Grid>
                  </Grid>
                </Box>
                <Divider />
                <Box p={2}>
                  <Grid container spacing={1} alignItems="center" justifyContent="center">
                    <Grid item xs={4} sm={2}>
                      <Typography>
                        <Box fontWeight="fontWeightBold">
                          ウェイト (kg)
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                      <Typography>2</Typography>
                      {/* <TextField fullWidth variant="outlined" size="small" value={2} /> */}
                    </Grid>
                    <Grid item xs={4} sm={2}>
                      <Typography>
                        <Box fontWeight="fontWeightBold">
                          保護スーツ
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                      <Typography>ウェット (3mm)</Typography>
                      {/* <TextField fullWidth variant="outlined" size="small" value={"ウェット (3mm)"} /> */}
                    </Grid>
                    <Grid item xs={4} sm={2}>
                      <Typography>
                        <Box fontWeight="fontWeightBold">
                          エントリー方法
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                      <Typography>ボート</Typography>
                      {/* <TextField fullWidth variant="outlined" size="small" value={"ボート"} /> */}
                    </Grid>
                    <Grid item xs={4} sm={2}>
                      <Typography>
                        <Box fontWeight="fontWeightBold">
                          淡水／海水
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                      <Typography>海水</Typography>
                      {/* <TextField fullWidth variant="outlined" size="small" value={"海水"} /> */}
                    </Grid>
                  </Grid>
                </Box>
                <Divider />
                <Box p={2}>
                  <Grid container spacing={1} alignItems="center" justifyContent="center">
                    <Grid item xs={4} sm={2}>
                      <Typography>
                        <Box fontWeight="fontWeightBold">
                          自由欄
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sm={10}>
                      <Typography></Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Divider />
                <Box p={2}>
                  <Typography>
                    <Box fontWeight="fontWeightBold">
                      ダイビング・ポイント
                    </Box>
                  </Typography>
                  <MapContainer center={[26.247635, 127.315060]} zoom={13} scrollWheelZoom={false} className={classes.map}>
                    <TileLayer
                      attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[26.247635, 127.315060]} />
                  </MapContainer>
                </Box>
              </section>
            </Box>
        </Paper>
      </Container>
    </div>
  )
}

export default Logs 