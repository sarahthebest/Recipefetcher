import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Header from "./Header";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

function Recipes() {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then((response) => response.json())
      .then((result) => setRecipes(result))
    return () => {
      setRecipes(null)
    }
  }, [])

  return (
    <div className="row">
      <Header />
      <Container sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ marginBottom: 2, marginTop: 0, fontSize: 20 }}>All recipes:</Typography>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 0, sm: 0, md: 0, lg: 0 }}
          sx={{ borderRadius: "16px", mx: 'auto', }}
        >
          {recipes && recipes.meals.map(function(meal) {
            return (
              <Grid key={meal.idMeal} xs={6}>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Recipes;
