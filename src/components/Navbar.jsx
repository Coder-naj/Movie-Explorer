

import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-300 ${
      isActive
        ? "text-red-300"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-40 bg-gray-950/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

         
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-red-350 rounded-lg group-hover:bg-red-400 transition-colors duration-300">
              🎬
            </div>

            <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Movie<span className="text-red-500">Explorer</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">

            <NavLink
              to="/"
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/movies"
              className={navLinkClass}
            >
              Movies
            </NavLink>

          </div>

          
          <Link
            to="/movies"
            className="px-4 sm:px-5 py-2.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-red-600/20 transition-all duration-300"
          >
            <span className="hidden sm:inline">
              Explore Movies
            </span>

            <span className="sm:hidden">
              Movies
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;

