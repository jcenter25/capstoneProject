//WIP

import React from 'react';
import style from './recipeInfo.module.css';
import Button from '@mui/material/Button'
import RemoveIcon from '@mui/icons-material/Remove';
import {useCookies} from 'react-cookie'

const DisplaySavedRecipe = ({url}) => {
    const [cookies, setCookie] = useCookies(["savedRecipes"]);

    const removeRecipe = (url) => {
        let rlist = cookies.savedRecipes;
        
        const index = rlist.indexOf(url);
        console.log(url);
        console.log(index);
        if (index > -1) {
          rlist.splice(index, 1);
          console.log("spliced")
        }
        
        setCookie("savedRecipes",rlist, {
            path: '/'
          });
    };

    //console.log({image});
    return(
        <div className={style.recipeInfo}>
            <h1><a href={url}>{url}</a></h1>
            <Button 
              color="primary" 
              variant="contained"
              startIcon={<RemoveIcon />}
              sx={{marginBottom: '10px'}}
              onClick={() => removeRecipe(url)}
             >
             Remove
            </Button>
        </div>
    );
}

export default DisplaySavedRecipe; //allows us to use the recipe function in other files

{/* <h1><a href={url}>{title}</a></h1>
            <div>{source}</div>
            <img className={style.recipeInfo} src={image} alt=""></img> */}