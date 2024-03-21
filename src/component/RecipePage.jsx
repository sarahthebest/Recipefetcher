import { useLocation } from "react-router-dom";
import { Typography, Chip, Icon, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const RecipePage = () => {
  const location = useLocation();
  const mealId = location.state?.mealId;
  const mealString = location.state?.mealName;
  const mealImg = location.state?.mealImg;
  const mealInstructions = location.state?.mealInstr;
  const mealArea = location.state?.mealCountry;
  const mealCategory = location.state?.mealCategory;

  return (
    <div className="recipe">
      <div className="left">
        <Link
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
            fontSize:20
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
            {mealString}
          </Typography>
          <Chip
            label={mealCategory}
            color="secondary"
            variant="filled"
            sx={{ color: "primary.main" }}
          />
          <Chip
            label={mealArea}
            color="secondary"
            variant="filled"
            sx={{ color: "primary.main" }}
          />
        </Stack>
        <img src={mealImg} alt="" id="mealImg" />
      </div>
      <div className="right">
        <div className="ingredients">
          <Typography variant="h" component="h3">
            Ingredients:
          </Typography>
          <ul>
            <li>Text</li>
            <li>Text</li>
            <li>Text</li>
            <li>Text</li>
          </ul>
        </div>
        <div className="instructions">
          <Typography variant="h" component="h3">
            Instructions:
          </Typography>
          <Typography variant="p" component="body1">
            {mealInstructions}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
