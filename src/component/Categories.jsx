import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

// const uuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => (c = Math.random() * 16 | 0, (c == 4 ? (c & 3 | 8) : c)).toString(16));

function Categories() {

  // useEffect(() => {
  //   fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
  //     .then((response) => response.json())
  //     .then((result) => setRecipes(result))
  //   return () => {
  //     setRecipes(null)
  //   }
  // }, [])

  return (
    <div className="column">
      <Container className="categoryBox"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          marginTop: 6,
          p: 1,
          bgcolor: 'primary.main',
          borderRadius: '16px'
        }}>
        <Typography sx={{ marginBottom: 2, marginTop: 0, fontSize: 20 }}>Italian:</Typography>
      </Container>

      <Container className="categoryBox"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          marginTop: 2,
          p: 1,
          bgcolor: 'primary.main',
          borderRadius: '16px'
        }}>
        <Typography sx={{ marginBottom: 2, marginTop: 0, fontSize: 20 }}>Thai:</Typography>
      </Container>

      <Container className="categoryBox"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          marginTop: 2,
          p: 1,
          bgcolor: 'primary.main',
          borderRadius: '16px'
        }}>
        <Typography sx={{ marginBottom: 2, marginTop: 0, fontSize: 20 }}>Chinese:</Typography>
      </Container>

      <Container className="categoryBox"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          marginTop: 2,
          p: 1,
          bgcolor: 'primary.main',
          borderRadius: '16px'
        }}>
        <Typography sx={{ marginBottom: 2, marginTop: 0, fontSize: 20 }}>Indian:</Typography>
      </Container>
    </div>
  );
}

export default Categories;

/* <Grid
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
</Grid> */
