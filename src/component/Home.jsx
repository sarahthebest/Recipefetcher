import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Header from "./Header";
import RecipeCard from "./RecipeCard";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div className="row">
      <Header />
      <Container sx={{display:'flex', flexDirection:'column'}}>
      <Typography sx={{marginBottom:2, marginTop:0, fontSize:20}}>Popular recipes:</Typography>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
        sx={{ borderRadius: "16px", mx:'auto', }}
      >
        <Grid xs={6}>
          <RecipeCard />
        </Grid>
        <Grid xs={6}>
        <RecipeCard />
        </Grid>
        <Grid xs={6}>
        <RecipeCard />
        </Grid>
        <Grid xs={6}>
        <RecipeCard />
        </Grid>
      </Grid>
      </Container>
    </div>
  );
};

export default Home;
