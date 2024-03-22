import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-[70%] flex justify-center items-center">
      <div className="p-10">
        <h2 className="text-3xl">Welcome to our Resolute AI Software.</h2>
        <div className="flex justify-center items-center py-7">
          <Link to={"/add-application"}>
            <button className="px-3 py-2 bg-primary text-white hover:bg-secondary rounded divide-purple-200 items-center">
              Add Applications
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
