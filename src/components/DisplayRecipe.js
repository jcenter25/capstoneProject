import React from 'react';
import style from './recipeInfo.module.css';
import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save';
import {useCookies} from 'react-cookie'
//import RecipeList from '../Pages/RecipeList';

const DisplayRecipe = ({key, title,url,image, ingredients, source}) => {
    //console.log({image});
    const [cookies, setCookie] = useCookies(["savedRecipes"]);

    const SaveOneRecipe = (url) => {
        console.log("SaveOne Call", url);
        let rlist = cookies.savedRecipes;
        if(rlist === undefined) {
            rlist = [url];
        }
        else {
            if(!rlist.includes(url)) {
                rlist.push(url);
            }
        }
        setCookie("savedRecipes",rlist, {
            path: '/'
          });
    };

    return(
        <div className={style.recipeInfo}>
            <React.Fragment key={key}>
            <h1><a href={url}>{title}</a></h1>
            <h3>From: {source}</h3>
            <ul>
                <h4>Ingredients:</h4>
                {ingredients.map(ingredient => ( //maps ingredients to ul
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <img className={style.recipeInfo} src={image} alt=""></img>
            <Button //save recipe button WIP
              color="primary" 
              variant="contained"
              endIcon={<SaveIcon />}
              sx={{marginBottom: '10px'}}
              onClick={() => SaveOneRecipe(url)}
             >
             Save Recipe
            </Button>
            </React.Fragment>
        </div>
    );
}

export default DisplayRecipe; 