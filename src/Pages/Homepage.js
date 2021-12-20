import React,{useState, useEffect} from 'react'; //import useEffect
import DisplayRecipe from '../components/DisplayRecipe'; //import the recipe functions from Recipe.js
import * as FaIcons from 'react-icons/fa';
import {SearchOptions} from '../components/SearchOptions';


const Homepage = () => {

  const API_ID = 'cbe7586a';
  const API_KEY = '7007621aa2128f491c012508ecd67e90';
  //Not secure, could be hidden in .env file


  //updates the variable reactively by re-rendering the page if the variable changes. 
  const [recipes, setRecipes] = useState([]); //array of recipe results
  const [search, setSearch] = useState(""); //search bar value
  const [query, setQuery] = useState(""); //current search query
  const [searchOptions, setSearchOptions] = useState(``); //open and close search options


  //let GAR = ``; //search options concat test

  useEffect(() => {  //activates on page reload
  
    getRecipes();

    //GAR = returnOptions();
    //console.log(GAR);

  }, [query]);  //page rerenders when query state changes
           
 
  const getRecipes = async () => { //starts API request
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`); //we have to await the data because it will take time to retreive it.

  
      if(response.status !== 200){ //throws error message is data is not retrieved properly
        throw new Error('can not fetch data');
      }

      const data = await response.json(); //contains recipe array
      setRecipes(data.hits);
  }
  
  const searchHandler = e => {
    setSearch(e.target.value); //search bar value
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search); 
    setSearch(""); //clears search bar after search
  }

 

  return(
    <div className="Home">
       <div className="query">Currently Searching For: {query}</div>

         <form onSubmit={getSearch} className="search-form">
           <input className="search-bar" type="text" value={search} onChange={searchHandler}/>
           <button className="search-button" type="submit"><FaIcons.FaSearch/></button>
           <button className="search-options" onClick={() => setSearchOptions(true)} type="button"><FaIcons.FaCog /></button>
         </form>

         <SearchOptions trigger={searchOptions} setTrigger={setSearchOptions}/>

         <div className="recipeInfo">
          {recipes.map((recipe, index) =>(
            <React.Fragment key={index}>
            <DisplayRecipe
              title={recipe.recipe.label}
              url={recipe.recipe.url} 
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              source={recipe.recipe.source}
            />
            </React.Fragment>
           ))}
         </div>
    </div>
  );
}

export default Homepage;