import Head from 'next/head';
import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material';
import Info from '../components/soldier/Info.js';
import { model } from '../models/MandatorySoldier';
import dbConnect from '../db/dbConnect.js';

export default function Home(props) {
  return (
      <><Head>
        <title>MakmaRookie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ alignItems: 'center' }}>
        <Toolbar>
          <Typography variant="h3" component="div">
            חיילים
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container rowSpacing={5}>
        {props.data.map(x => 
          (<Grid item key={x.id} xs={6} justifyContent='center'>
            <Info soldier={x}>
            </Info>
            </Grid>))}
      </Grid>
    </Box></>
  )
}

export async function getServerSideProps() {
  await dbConnect();
  const soldiers = await model.find({});
  return {
    props: {
      data: soldiers.map(x => ({
        type: x.type,
        course: 'תכנות',
        id: x.id,
        name:  x.fullName,
        recruitDate: x.recruitDate,
        arrivalDate: x.arrivalDate,
        img: 'C:/MakmarookieHackathon/makmarookie/public/favicon.ico'
      }))
    }
  }

  // return {
  //   props: {
  //     data: [
  //       {
  //         name: 'אופק ישראל',
  //         id: 8384699,
  //         recruitDate: new Date(2018, 4, 16),
  //         arrivalDate: new Date(2020, 5, 20),
  //         course: 'תכנות',
  //         img: 'C:/MakmarookieHackathon/makmarookie/public/favicon.ico'
  //       },
  //       {
  //         name: 'אופק ישראל',
  //         id: 8384679,
  //         recruitDate: new Date(2018, 4, 16),
  //         arrivalDate: new Date(2020, 5, 20),
  //         course: 'תכנות',
  //         img: 'C:/MakmarookieHackathon/makmarookie/public/favicon.ico'
  //       },
  //       {
  //         name: 'אופק ישראל',
  //         id: 8384698,
  //         recruitDate: new Date(2018, 4, 16),
  //         arrivalDate: new Date(2020, 5, 20),
  //         course: 'תכנות',
  //         img: 'C:/MakmarookieHackathon/makmarookie/public/favicon.ico'
  //       },
  //       {
  //         name: 'אופק ישראל',
  //         id: 8484699,
  //         recruitDate: new Date(2018, 4, 16),
  //         arrivalDate: new Date(2020, 5, 20),
  //         course: 'תכנות',
  //         img: 'C:/MakmarookieHackathon/makmarookie/public/favicon.ico'
  //       }
  //     ]
  //   },
  // };
}