
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className=" bg-[rgb(8,18,41)] min-h-screen"> 
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;