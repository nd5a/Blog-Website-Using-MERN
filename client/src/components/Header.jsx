import { Avatar, Dropdown, Navbar, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "flowbite-react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSucces } from "../redux/user/userSlice";

export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isProject = location.pathname === "/projects";
  const isContact = location.pathname === "/contact";

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.messae);
      } else {
        dispatch(signoutSucces(data));
      }
    } catch (error) {
      console.log(error.messae);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm || searchTerm.trim() === "") {
      alert("Please enter a search term");
      return;
    }

    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();

    navigate(`/search?${searchQuery}`);
    setSearchTerm("");
  };
  return (
    <Navbar className="border-b-2">
      <Link
        to=""
        className="self-center whitespace-nowrap text-xl sm:txt-xl font-semibold dark:text-white"
      >
        <span className="font-bold px-3 py-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg text-white ">
          DN's
        </span>{" "}
        <span className="bg-gradient-to-r from-orange-500  to-pink-500 inline-block text-transparent bg-clip-text">
          Blog
        </span>
      </Link>
      <form onSubmit={handleSubmit} className="relative">
        <TextInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-teal-500"
        >
          <AiOutlineSearch size={20} />
        </button>
      </form>

      <div className="flex  gap-2 md:order-2">
        {/* <Button
          className="w-15 h-10 hidden sm:inline"
          color={"gray"}
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? < FaMoon /> : <FaSun />}
        </Button> */}
        <label
          htmlFor="theme-switch"
          className="flex items-center cursor-pointer text-white"
        >
          <input
            id="theme-switch"
            type="checkbox"
            className="hidden"
            checked={theme === "dark"}
            onChange={() => dispatch(toggleTheme())}
          />
          <div className="relative w-14 h-8 bg-gray-400 rounded-full transition-colors duration-300 ease-in-out">
            <div
              className={`absolute top-0 left-0 h-8 w-8 rounded-full transition-transform duration-300 ease-in-out ${
                theme === "dark" ? "translate-x-6 bg-blue-600" : "bg-orange-500"
              }`}
            />
          </div>

          {theme === "dark" ? (
            <span className="translate-x-8 absolute flex">
              <FaMoon />
            </span>
          ) : (
            <span className="translate-x-2 absolute flex">
              {" "}
              <FaSun />
            </span>
          )}
        </label>
        <pre></pre>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">
                Username: @{currentUser.username}
              </span>

              <span className="block text-sm font-medium truncate">
                Email: {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/" className="relative group">
            <span className="hover:text-blue-600 font-bold">Home</span>
            <span
              className={`absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 transition-transform duration-300 ease-in-out ${
                isHome ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
        <Link to="/about" className="relative group">
            <span className="hover:text-blue-600 font-bold">About</span>
            <span
              className={`absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 transition-transform duration-300 ease-in-out ${
                isAbout ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
        <Link to="/projects" className="relative group">
            <span className="hover:text-blue-600 font-bold">Project</span>
            <span
              className={`absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 transition-transform duration-300 ease-in-out ${
                isProject ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/contact"} as={"div"}>
        <Link to="/contact" className="relative group">
            <span className="hover:text-blue-600 font-bold">Contact</span>
            <span
              className={`absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 transition-transform duration-300 ease-in-out ${
                isContact ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
