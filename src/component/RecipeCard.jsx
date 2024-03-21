import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Typography,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({
  idMeal,
  strMeal,
  strInstructions,
  strMealThumb,
  strArea,
  strCategory
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: 400 }}>
      <Link
        to="/RecipePage"
        state={{
          mealId: idMeal,
          mealName: strMeal,
          mealImg: strMealThumb,
          mealInstr: strInstructions,
          mealCountry: strArea,
          mealCategory: strCategory
        }}
      >
        <CardHeader
          title={
            <Typography
              noWrap
              variant="h6"
              component="h4"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                color: "black",
              }}
            >
              {strMeal}
            </Typography>
          }
          sx={{ textAlign: "left", textOverflow: "ellipsis" }}
        />
        <CardMedia component="img" height="250" image={strMealThumb} />
      </Link>
      <CardActions disableSpacing>
        <Typography variant="body2" color="black">
          Expand for instructions
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography align="left" paragraph>
            {strInstructions}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
