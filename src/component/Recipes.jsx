import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

function Recipes() {
    return (
      <div>
        <Container className="content">
          <h2>Popular recipes:</h2>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 2, sm: 4, md: 4, lg: 4 }}
            sx={{bgcolor:'primary.main', borderRadius: '16px'}}
          >
            <Grid xs={6}>
              <h3>Recipe</h3>
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
          {/* <button onClick={fetchRecipe()}>
            Random!
          </button> */}
        </Container>
      </div>
    );
  }
  
  export default Recipes;
  