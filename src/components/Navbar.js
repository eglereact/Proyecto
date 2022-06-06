import { useDispatch, useSelector } from "react-redux";
import {
  AiOutlineAlignLeft,
  AiOutlineUser,
  AiFillCaretDown,
} from "react-icons/ai";
import Logo from "./Logo";
import { toggleSidebar, logoutUser } from "../features/user/userSlice";
import { useState } from "react";
function Navbar() {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <nav className="flex items-center justify-center shadow-md h-24 top-0 sticky bg-white">
      <div className="flex w-[90vw] items-center justify-between">
        <button
          type="button"
          className="bg-transparent border border-transparent text-2xl text-[#3F3D56] cursor-pointer flex items-center"
          onClick={() => dispatch(toggleSidebar())}
        >
          <AiOutlineAlignLeft />
        </button>
        <div>
          <div className="block md:hidden ">
            <Logo />
          </div>
          <h3 className="hidden md:block capitalize text-2xl font-bold text-[#3F3D56]">
            dashboard
          </h3>
        </div>
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowLogout(!showLogout)}
            className="flex items-center justify-center gap-x-1 relative shadow-md bg-[#3F3D56] 
             text-white px-3 py-2 rounded-lg hover:opacity-90"
          >
            <AiOutlineUser />
            <span className="text-white font-bold capitalize">
              {user?.name}
            </span>
            <AiFillCaretDown />
          </button>
          <div
            className={showLogout ? "dropdown show-dropdown mt-2" : "dropdown"}
          >
            <button
              type="button"
              onClick={() => dispatch(logoutUser())}
              className="bg-transparent border border-transparent text-gray-800 capitalize cursor-pointer"
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
