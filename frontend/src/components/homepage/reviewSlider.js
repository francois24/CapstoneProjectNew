import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  return (
    <Paper
      sx={{
        p: 3,
        margin: 'auto',
        maxWidth: 800,
        flexGrow: 3,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 300, height: 200 }}>
            <Img
              alt="complex"
              src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              {/* <Typography gutterBottom variant="subtitle1" component="div">
                Standard license
              </Typography> */}
              <Typography variant="body2" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem iste harum modi quibusdam natus nisi quas nostrum!
                Vero, odio maxime!
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography> */}
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="subtitle1" component="div">
                Jaden Blue
              </Typography>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                RentCar Customer
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
            <i class='fas fa-quote-right' style={{fontSize:48}}></i>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
