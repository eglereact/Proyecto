import { FaTimes } from "react-icons/fa";
import { Logo, NavLinks } from "./index";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";

function SmallSidebar() {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <aside className="md:hidden">
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="bg-gray-50 w-full h-full relative flex items-center flex-col">
          <header className="flex justify-between w-full py-5 px-10">
            <Logo />
            <button
              className="text-[#2F2E41] hover:text-[#A07265] hover:bg-brown-50 bg-gray-100 p-2 rounded-full"
              onClick={toggle}
            >
              <FaTimes />
            </button>
          </header>
          <NavLinks toggleSidebar={toggle} />
        </div>
      </div>
    </aside>
  );
}

export default SmallSidebar;
