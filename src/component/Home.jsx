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
    const fetchData = async () => {
      const requests = Array.from({ length: 6 }, () =>
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      );
      const responses = await Promise.all(requests);
      const data = await Promise.all(responses.map((res) => res.json()));
      setRecipes(data);
    };

    fetchData();

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
          wrap="wrap"
          justifyContent="left"
          container
          spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
          sx={{ width: "100%" }}
        >
          {recipes.map((recipe) => {
            return (
              <Grid key={uuid()} sx={{ flexShrink: 1, minWidth: 202 }} xs={4}>
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
