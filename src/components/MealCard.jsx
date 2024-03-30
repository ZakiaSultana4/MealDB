import PropTypes from "prop-types";
import { Link } from "react-router-dom"

const MealCard = ({ idMeal, strMeal, strMealThumb }) => {
  return (
    <div
    key={idMeal}
    className="flex flex-col justify-between pb-4 rounded-lg border p-2 border-white h-[400px]"
  >
    <div className="w-full h-[200px]">
      <img
        src={strMealThumb}
        alt=""
        className="object-cover w-full h-full rounded-lg"
      />
    </div>
    <div className="">
      <p className="text-xl font-bold ">{strMeal}</p>
    </div>
    <div>
      <Link
        className="px-4 py-2 text-sm rounded-lg bg-rose-600"
        to={`/meal/${idMeal}`}
      >
        Show Details
      </Link>
    </div>
  </div>
  )
}

export default MealCard
MealCard.propTypes = {
  strMeal: PropTypes.object.isRequired,
  strMealThumb: PropTypes.object.isRequired,
  idMeal: PropTypes.bool,
};