import { useLoaderData } from "react-router-dom";


const MealDetails = () => {
  const mealDetail = useLoaderData();
  const { strMeal, strCategory, strInstructions, strMealThumb } =
    mealDetail.meals[0];
  return (
    <div className="mt-10 flex w-[90%] mx-auto">
    <div className="w-[40%]">
      <img src={strMealThumb} alt="" className="object-cover rounded-xl" />
    </div>
    <div className="pl-5 text-white  flex flex-col gap-5 w-[60%]">
      <h1 className="text-4xl font-bold">{strMeal}</h1>
      <div className="px-4 py-3 font-semibold badge badge-secondary">
        {strCategory}
      </div>

      <textarea
        className="bg-[rgb(8,18,41)] border-white textarea textarea-bordered scrollbar-hidden px-6"
        placeholder="Instruction"
        rows="10"
        cols="50"
      >
        {strInstructions}
      </textarea>
    </div>
  </div>
  )
}

export default MealDetails