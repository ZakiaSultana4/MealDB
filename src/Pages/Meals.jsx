import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";

import Category from "../components/Category";

const Meals = () => {
  const mealData = useLoaderData();
  const navigate = useNavigate();
  const [curCategory, setCurCategory] = useState("Beef");

  useEffect(() => {
    navigate(`/meals/Beef`);
  }, [navigate]);

  return (
    <div className="w-[90%] mx-auto text-white">
       <p className=" flex gap-10 text-white  pt-4 justify-center font-semibold text-4xl">
      <Link to="/meals/Beef">All Meals Here</Link>
    </p>
      <Category
        mealData={mealData.categories}
        setCurCategory={setCurCategory}
        curCategory={curCategory}
      />
      <Outlet />
    </div>
  );
};

export default Meals;
