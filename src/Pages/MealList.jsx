import {  useLoaderData, useNavigation } from "react-router-dom";
import MealCard from "../components/MealCard";

const MealList = () => {
  const meals = useLoaderData();
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "loading" ? (
        <div className="w-full h-[60vh] flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-4">
          {meals.meals.map(({ idMeal, strMeal, strMealThumb }) => (
            <MealCard key={idMeal} idMeal={idMeal} strMeal={strMeal} strMealThumb={strMealThumb}/>
          ))}
        </div>
      )}
    </>
  );
};

export default MealList;
