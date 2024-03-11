import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Header from "./Header";
import RecipeCard from "./RecipeCard";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

const uuid = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) =>
    ((c = (Math.random() * 16) | 0), c == 4 ? (c & 3) | 8 : c).toString(16)
  );

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("https://www.themealdb.com/api/json/v1/1/random.php"),
      fetch("https://www.themealdb.com/api/json/v1/1/random.php"),
      fetch("https://www.themealdb.com/api/json/v1/1/random.php"),
      fetch("https://www.themealdb.com/api/json/v1/1/random.php"),
    ])
      .then(([resRecipe1, resRecipe2, resRecipe3, resRecipe4]) =>
        Promise.all([
          resRecipe1.json(),
          resRecipe2.json(),
          resRecipe3.json(),
          resRecipe4.json(),
        ])
      )
      .then(([dataRecipe1, dataRecipe2, dataRecipe3, dataRecipe4]) => {
        setRecipes([dataRecipe1, dataRecipe2, dataRecipe3, dataRecipe4]);
        console.log(recipes);
      });
    return () => {
      setRecipes([]);
    };
  }, []);

  return (
    <div className="row">
      <Header />
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{ marginBottom: 2, marginTop: 0, fontSize: 20 }}>
          Popular recipes:
        </Typography>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
          sx={{ borderRadius: "16px", mx: "auto" }}
        >
          {recipes.map((recipe) => {
            return (
              <Grid key={uuid()} xs={6}>
                {recipes.length != 0 && (
                  <RecipeCard
                    idMeal={recipe.meals[0].idMeal}
                    strMeal={recipe.meals[0].strMeal}
                    strInstructions={recipe.meals[0].strInstructions}
                    strMealThumb={recipe.meals[0].strMealThumb}
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;

// for (let i = 0; i < recipesAmount; i++) {
//   fetch('https://www.themealdb.com/api/json/v1/1/random.php')
//     .then((response) => response.json())
//     .then((result) => {
//       const newArray = [...recipes, result];
//       setRecipes(
//         newArray
//       );
//       console.log(recipes);
//     })
// }
