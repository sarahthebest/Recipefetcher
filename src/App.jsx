import * as React from 'react';
import Container from '@mui/material/Container';
import './App.css';
import Grid from '@mui/material/Unstable_Grid2';
import { fetchRecipe } from './useFetch';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function App() {

  return (
    <Container className="content">
      <h2>Popular recipes:</h2>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 4, md: 4, lg: 4 }}>
        <Grid xs={6}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          {<Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>}
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid xs={6}>
          <h3>Recipe</h3>
        </Grid>
        <Grid xs={6}>
          <h3>Recipe</h3>
        </Grid>
        <Grid xs={6}>
          <h3>Recipe</h3>
        </Grid>
      </Grid>
{/* 
    <button onClick={fetchRecipe()}>
      Random!
    </button> */}
    </Container>
  )
}

export default App
