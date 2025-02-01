import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setbtnNamereact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-red-400 to-yellow-300 shadow-lg p-4">
      <div className="flex items-center">
        <img className="w-36" src={LOGO_URL} alt="logo" />
        <h1 className="text-white text-2xl font-bold ml-4">MealHub</h1>
      </div>

      <div className="flex items-center space-x-6">
        <span className="text-white font-semibold">
          Online Status: {onlineStatus ? "✅" : "❌"}
        </span>
        <ul className="flex space-x-6">
          <li>
            <Link className="text-white hover:text-yellow-500 transition duration-300" to="/">Home</Link>
          </li>
          <li>
            <Link className="text-white hover:text-yellow-500 transition duration-300" to="/about">About Us</Link>
          </li>
          <li>
            <Link className="text-white hover:text-yellow-500 transition duration-300" to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="text-white hover:text-yellow-500 transition duration-300" to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link className="text-white hover:text-yellow-500 transition duration-300" to="/card">Card</Link>
          </li>
        </ul>
        <button
          className="bg-white text-red-500 font-bold py-2 px-4 rounded hover:bg-red-500 hover:text-white transition duration-300"
          onClick={() => {
            btnNameReact === "Login" ? setbtnNamereact("Logout") : setbtnNamereact("Login");
          }}
        >
          {btnNameReact}
        </button>
      </div>
    </div>
  );
};

export default Header;
