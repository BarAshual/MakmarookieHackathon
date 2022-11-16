import '../styles/globals.css'
import { AppBar, Toolbar, Typography } from '@mui/material';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <AppBar position="static" sx={{ alignItems: 'center' }}>
      <Toolbar>
        <Typography variant="h3" component="div">
          חיילים
        </Typography>
      </Toolbar>
    </AppBar>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
