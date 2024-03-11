import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Header from "./Header";
import RecipeCard from "./RecipeCard";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

const uuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => (c = Math.random() * 16 | 0, (c == 4 ? (c & 3 | 8) : c)).toString(16));

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
          {recipes && recipes.meals.map(function(recipe) {
            return (
              <Grid key={uuid()} xs={6}>
                  <RecipeCard
                    idMeal={recipe.meals[0].idMeal}
                    strMeal={recipe.meals[0].strMeal}
                    strInstructions={recipe.meals[0].strInstructions}
                    strMealThumb={recipe.meals[0].strMealThumb}
                  />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Recipes;
