//WIP

import React,{useState, useEffect} from 'react'; //import useEffect
import DisplaySavedRecipe from '../components/DisplaySavedRecipe'
import {useCookies} from 'react-cookie'
//import Homepage from './Homepage';

function RecipeList() {

    const [cookies, setCookie] = useCookies(["savedRecipes"]);
   

   useEffect(() => { //takes a function as its parameter and runs every time the page renders or re-renders
        
    console.log(cookies.savedRecipes);
  

   }, []);

   
   


  return(
    <div className="Home">
        {(cookies.savedRecipes != undefined)?(<h1>Saved Recipe Links: {cookies.savedRecipes.length}</h1>):(<h1>Saved Recipe Links: 0</h1>)} {/* displays daved recipes */}
      
        <div className="recipeInfo">
        {(cookies.savedRecipes != undefined)?(cookies.savedRecipes.map((recipe, index) =>(
          <React.Fragment key={index}>
            <DisplaySavedRecipe
            url={recipe}
            />
            </React.Fragment>
        ))):<div></div> };
        </div>
    </div>
  );
}


export default RecipeList;