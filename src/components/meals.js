import {useEffect, useState} from 'react';
import MealItem from './MealItem.js';
export default function Meals(){
    const [loadedMeals,setLoadedMeals]=useState([]);
    useEffect(()=>{
        async function fetchMeals(){
            const response = await fetch('http://localhost:5000/meals');
            if(!response.ok){            
                console.log(response)
            }
            const meals=await response.json();
            setLoadedMeals(meals);
            }
            fetchMeals();
    },[]);
        
    return (
        <ul id="meals">{loadedMeals.map((meal)=>(
            <MealItem key={meal.id} meal={meal}/>
        ))}</ul>
    )
}