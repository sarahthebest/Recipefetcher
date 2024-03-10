import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from "react";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then((response) => response.json())
            .then((result) => setRecipe(result))
        return () => {
            setRecipe(null)
        }
    }, [])

    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardHeader
                title={
                    <Typography noWrap gutterBottom variant="h6" component="h4">
                        {recipe && recipe.meals[0].strMeal.toString().substring(0,30)}
                    </Typography>
                }
                sx={{ textAlign: 'left', textOverflow: 'ellipsis' }}
            />
            <CardMedia
                component="img"
                height="250"
                image={recipe && recipe.meals[0].strMealThumb}
                alt="Paella dish"
            />
            <CardActions disableSpacing>
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
                    <Typography align='left' paragraph>
                        {recipe && recipe.meals[0].strInstructions}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
