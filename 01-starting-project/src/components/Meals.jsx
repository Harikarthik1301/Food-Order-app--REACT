import {useEffect,useState} from "react";
import MealItem from "./MealItem.jsx";

export default function Meals(){

    const [loadedmeals,setLoadedmeals]= useState([]);
    useEffect(()=>{

        async function fetchMeals(){
            const response = await fetch ('http://localhost:3000/meals');
            if (!response.ok) {
                
            }
            const meals = await response.json();
            setLoadedmeals(meals);
        }
        fetchMeals();
    },[])
   
return <ul id = 'meals'>
    {loadedmeals.map((meal)=>(
        <MealItem  key ={meal.id} meal={meal}/>
    ))}
</ul>
}