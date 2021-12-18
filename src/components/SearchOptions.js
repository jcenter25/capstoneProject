//WIP

import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'




const useStyles = makeStyles({ //styling
  contain: {
    display: 'flex',
    justifyContent: 'center'
  },
  options: {
    background: '#222526',
    color: '#c6c3bc',
    border: '5px',
    padding: '10px',
    borderColor: '#363E40',
    borderStyle: 'solid',
    position: 'absolute',
    minwidth: '20%',
  },
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block',
      color: '#c6c3bc'
    },
    label: {
      color: 'white',
      fontSize: '20px'
    }
  })

  let apiAppendString = `EMPTY`; //stores string to be appended to API request
  
  export function returnOptions() { //return function for other files
   return(apiAppendString);
  } 


export function SearchOptions(props) {
 
  
    const classes = useStyles()
    const [meal, setMeal] = useState('')
    const [diet, setDiet] = useState('')
    const [cuisine, setCuisine] = useState('')

    const handleSubmit = (e) => { //changes append string on submit
        e.preventDefault()
        apiAppendString = `${meal}${diet}${cuisine}`
        console.log(apiAppendString)
    }
        
        
    
    return (props.trigger) ? ( //use for opening and closing menu
       <Container className={classes.contain}>
          <Container size="sm" className={classes.options}>

      <Typography
        align="center"
        variant="h5" 
        color="white"
        component="h2"
        gutterBottom
      >
        Search Options
      </Typography>
      
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        
        <FormControl className={classes.field}>
          <FormLabel className={classes.label}>Meal Type</FormLabel>
          <RadioGroup row value={meal} onChange={(e) => setMeal(e.target.value)}>
            <FormControlLabel value="" control={<Radio />} label="All" />
            <FormControlLabel value="&mealType=breakfast" control={<Radio />} label="Breakfast" />
            <FormControlLabel value="&mealType=lunch" control={<Radio />} label="Lunch" />
            <FormControlLabel value="&mealType=dinner" control={<Radio />} label="Dinner" />
            <FormControlLabel value="&mealType=snack" control={<Radio />} label="Snack" />
          </RadioGroup>
        </FormControl>
    
        <FormControl className={classes.field}>
          <FormLabel className={classes.label}>Diet</FormLabel>
          <RadioGroup row value={diet} onChange={(e) => setDiet(e.target.value)}>
            <FormControlLabel value="" control={<Radio />} label="All" />
            <FormControlLabel value="&health=vegetarian" control={<Radio />} label="Vegetarian" />
            <FormControlLabel value="&health=vegan" control={<Radio />} label="Vegan" />
            <FormControlLabel value="&health=dairy-free" control={<Radio />} label="Dairy-free" />
            <FormControlLabel value="&health=gluten-free" control={<Radio />} label="Gluten-free" />
            <FormControlLabel value="&health=kosher" control={<Radio />} label="Kosher" />
          </RadioGroup>
        </FormControl>

        <FormControl className={classes.field}>
          <FormLabel className={classes.label}>Cuisine</FormLabel>
          <RadioGroup row value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
            <FormControlLabel value="" control={<Radio />} label="All" />
            <FormControlLabel value="&cuisineType=american" control={<Radio />} label="American" />
            <FormControlLabel value="&cuisineType=asian" control={<Radio />} label="Asian" />
            <FormControlLabel value="&cuisineType=indian" control={<Radio />} label="Indian" />
            <FormControlLabel value="&cuisineType=italian" control={<Radio />} label="Italian" />
            <FormControlLabel value="&cuisineType=mexican" control={<Radio />} label="Mexican" />
          </RadioGroup>
        </FormControl>
        <div>
        <Button
          type="submit" 
          color="primary" 
          variant="contained"
          sx={{marginRight: '10px'}}
          endIcon={<SaveIcon />}>
          Save
        </Button>
        
        <Button
         onClick={() => props.setTrigger(false)}
          color="primary" 
          variant="contained"
          endIcon={<CloseIcon />}>
          Exit
        </Button>
        </div>
      </form>

      
    </Container>  
       </Container>
       
    ) : "";
}




