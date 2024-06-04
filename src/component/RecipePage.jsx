import { useLocation } from "react-router-dom";
import { Typography, Chip, Icon, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const RecipePage = () => {
  const location = useLocation();
  const meal = location.state;

  const ingredients = [];
  const measurements = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measurement = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(ingredient);
      measurements.push(measurement);
    }
  }

  const ingredientList = ingredients.map((ingredient, index) => {
    return `${measurements[index]} ${ingredient}`;
  });

  return (
    <div className="recipe">
      <div className="left">
        <Link
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
            fontSize: 20
          }}
          to="/"
        >
          Return to main page
          <Icon>
            <ArrowBackIcon />
          </Icon>
        </Link>
        <Stack direction="row" spacing={1} sx={{ marginBottom: 1 }}>
          <Typography variant="h6" component="h4" sx={{ marginBottom: 1 }}>
            {meal.strMeal}
          </Typography>
          <Chip
            label={meal.strCategory}
            color="secondary"
            variant="filled"
            sx={{ color: "primary.main" }}
          />
          <Chip
            label={meal.strArea}
            color="secondary"
            variant="filled"
            sx={{ color: "primary.main" }}
          />
        </Stack>
        <img src={meal.strMealThumb} alt={meal.strMeal} id="mealImg" />
      </div>
      <div className="right">
        <div className="ingredients">
          <Typography variant="h" component="h3">
            Ingredients:
          </Typography>
          <ul>
            {ingredientList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="instructions">
          <Typography variant="h" component="h3">
            Instructions:
          </Typography>
          <Typography variant="body1" component="p">
            {meal.strInstructions}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
