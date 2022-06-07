import { useSelector } from "react-redux";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function BigSidebar() {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <aside className="hidden md:block shadow-md">
      <div
        className={
          isSidebarOpen
            ? "sidebar-container-big "
            : "sidebar-container-big show-sidebar-big"
        }
      >
        <div className="sticky top-0 left-0">
          <header className="h-24 flex items-center justify-center">
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </aside>
  );
}

export default BigSidebar;
