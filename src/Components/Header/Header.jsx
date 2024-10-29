import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex flex-row gap-5 items-center justify-center">
      <Link
        className=" bg-blue-500 px-6 py-4 rounded-lg text-white cursor-pointer"
        to="/"
      >
        Home
      </Link>
      <Link
        className=" bg-blue-500 px-6 py-4 rounded-lg text-white cursor-pointer"
        to="/about"
      >
        About
      </Link>
      <Link
        className=" bg-blue-500 px-6 py-4 rounded-lg text-white cursor-pointer"
        to="/contact"
      >
        Contact
      </Link>
      <Link
        className=" bg-blue-500 px-6 py-4 rounded-lg text-white cursor-pointer"
        to="/users"
      >
        Users
      </Link>
      <Link
        className=" bg-blue-500 px-6 py-4 rounded-lg text-white cursor-pointer"
        to="/posts"
      >
        Posts
      </Link>
    </nav>
  );
};

export default Header;
