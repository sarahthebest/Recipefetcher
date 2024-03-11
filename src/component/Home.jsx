import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Header from "./Header";
import RecipeCard from "./RecipeCard";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

const Home = () => {
  const recipesAmount = 1;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    for (let i = 0; i < recipesAmount; i++) {
      fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((response) => response.json())
        .then((result) => {
          setRecipes([
            ...recipes,
            result
          ]);
        })
    }
    return () => {
      setRecipes([])
    }
  }, [])

  return (
    <div className="row">
      <Header />
      <Container sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ marginBottom: 2, marginTop: 0, fontSize: 20 }}>Popular recipes:</Typography>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
          sx={{ borderRadius: "16px", mx: 'auto', }}
        >
          {recipes.map((recipe) => {
            return (
              <p key={recipe.idMeal}>
                {recipe.strMeal}
              </p>
            )
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;

// {recipes[0] != undefined &&
//   <RecipeCard
//     idMeal={recipes[0].meals[0].idMeal}
//     strMeal={recipes[0].meals[0].strMeal}
//     strInstructions={recipes[0].meals[0].strInstructions}
//     strMealThumb={recipes[0].meals[0].strMealThumb}
//   />
// }