import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import RecipeCard from "./RecipeCard";

function Categories() {
  const [italianRecipes, setItalianRecipes] = useState([]);
  const [thaiRecipes, setThaiRecipes] = useState([]);
  const [chineseRecipes, setChineseRecipes] = useState([]);
  const [indianRecipes, setIndianRecipes] = useState([]);

  const fetchRecipes = async (cuisine, setRecipes) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`
      );
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error(`Error fetching ${cuisine} recipes:`, error);
    }
  };

  useEffect(() => {
    fetchRecipes("Italian", setItalianRecipes);
    fetchRecipes("Thai", setThaiRecipes);
    fetchRecipes("Chinese", setChineseRecipes);
    fetchRecipes("Indian", setIndianRecipes);
  }, []);

  const renderRecipeRow = (cuisine, recipes) => (
    <div className="category">
      <Typography sx={{ marginBottom: 4, marginTop: 4, fontSize: 20 }}>
        {cuisine}:
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          marginLeft: 0,
          overflowX: "scroll",
          padding:2,
          bgcolor:'primary.main'
        }}
      >
        {recipes.map((recipe) => (
          <Grid key={recipe.idMeal} sx={{ flexShrink: 1, minWidth: 202 }} xs={4}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Container>
    </div>
  );

  return (
    <div className="column">
      {renderRecipeRow("Italian", italianRecipes)}
      {renderRecipeRow("Thai", thaiRecipes)}
      {renderRecipeRow("Chinese", chineseRecipes)}
      {renderRecipeRow("Indian", indianRecipes)}
    </div>
  );
}

export default Categories;
