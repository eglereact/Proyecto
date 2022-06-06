import React from "react";
import { NavLink } from "react-router-dom";
import links from "../utils/links";

function NavLinks({ toggleSidebar }) {
  return (
    <div className="flex justify-center mt-5 w-full">
      <div className="w-full">
        {links.map((link) => {
          const { id, text, icon, path } = link;
          return (
            <NavLink
              to={path}
              key={id}
              onClick={toggleSidebar}
              className={({ isActive }) => {
                return isActive
                  ? "nav-link text-gray-800 font-bold"
                  : "nav-link";
              }}
            >
              <span className="mr-2">{icon}</span>
              {text}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default NavLinks;
