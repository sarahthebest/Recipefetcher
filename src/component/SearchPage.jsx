import React from "react";
import { Typography, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import RecipeCard from "./RecipeCard";
import { useLocation } from "react-router-dom";

const uuid = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) =>
    ((c = (Math.random() * 16) | 0), c == 4 ? (c & 3) | 8 : c).toString(16)
  );

const SearchPage = () => {
    const location = useLocation();
    const searchTerm = location.state?.searchTerm; 
    const searchResult = location.state?.searchResult;

    console.log(searchTerm);
    console.log('searchpage',searchResult);
    

  if (!searchResult) {
    return <div>No search result available.</div>;
  }
  

  return (
    <div className="row">
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{ marginBottom: 2, marginTop: 0, fontSize: 20 }}>
          Search Result:
        </Typography>
        <Grid
          wrap="wrap"
          justifyContent="left"
          container
          spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
          sx={{ width: "100%" }}
        >
          {searchResult.map((recipe) => {
            return (
              <Grid key={uuid()} sx={{ flexShrink: 1, minWidth: 202 }} xs={4}>
                {searchResult.length !== 0 && (
                  <RecipeCard
                    idMeal={recipe.idMeal}
                    strMeal={recipe.strMeal}
                    strInstructions={recipe.strInstructions}
                    strMealThumb={recipe.strMealThumb}
                    strArea={recipe.strArea}
                    strCategory={recipe.strCategory}
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

export default SearchPage;
