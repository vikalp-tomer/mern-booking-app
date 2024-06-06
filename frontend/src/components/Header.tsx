import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-800 py-6 ">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl  px-3 text-white font-bold tracking-tighter">
          Merneats.com
        </span>
        <span>
          <Link
            to={"/sign-in"}
            className="text-blue-600 bg-white px-2 py-1 font-bold hover:bg-gray-100"
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
