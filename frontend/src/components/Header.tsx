import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-800 py-6 ">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tighter">
          <Link to={"/"}>MernHolidays.com</Link>
        </span>
        <span>
          <Link
            to={"/sign-in"}
            className="text-blue-600 bg-white px-2 flex items-center font-bold hover:bg-gray-100"
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
