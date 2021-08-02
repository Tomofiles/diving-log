import React from 'react'

import {
  Typography,
  Box,
  Container,
  Button,
} from '@material-ui/core';

const Signup = props => {

  const onClickGoogleSignup = () => {
    document.location = "/auth/google_oauth2"
  }

  return(
    <Container maxWidth="sm">
      <Box component="main">
        <Box component="header">
          <Typography variant="h1">
            登録は簡単！
          </Typography>
        </Box>
        <Box component="section">
          <Typography variant="h2">
            以下のうち、どれかを使って登録
          </Typography>
          <Button color="inherit" onClick={onClickGoogleSignup}>
            Googleで登録
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Signup 