/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  CardActions,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

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

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    navigate(`/RecipePage`, { state: { ...recipe } });
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
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
            {recipe.strMeal}
          </Typography>
        }
        sx={{ textAlign: "left", textOverflow: "ellipsis" }}
      />
      <CardMedia
        component="img"
        height="250"
        image={recipe.strMealThumb}
        alt={recipe.strMeal}
        onClick={handleCardClick}
        sx={{ cursor: "pointer" }}
      />
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
            {recipe.strInstructions}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default RecipeCard;
