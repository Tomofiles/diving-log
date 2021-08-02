import React from 'react'

import {
  Typography,
  Box,
  Container,
  Button,
} from '@material-ui/core';

const Login = props => {

  const onClickGoogleLogin = () => {
    document.location = "/auth/google_oauth2"
  }

  return(
    <Container maxWidth="sm">
      <Box component="main">
        <Box component="header">
          <Typography variant="h1">
            ログイン
          </Typography>
        </Box>
        <Box component="section">
          <Typography variant="h2">
            おかえりなさい！
          </Typography>
          <Button color="inherit" onClick={onClickGoogleLogin}>
            Googleでログイン
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Login 