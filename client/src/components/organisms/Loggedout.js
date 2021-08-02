import React from 'react'

import {
  Typography,
  Box,
  Container,
} from '@material-ui/core';

const Loggedout = props => {

  return(
    <Container maxWidth="sm">
      <Box component="main">
        <Box component="header">
          <Typography variant="h1">
            ログアウトしました
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default Loggedout 