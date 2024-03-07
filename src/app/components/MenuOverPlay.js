import React from "react";
import NavLink from "./NavLink";

const MenuOverPlay = ({ links }) => {
  return (
    <div className="w-full h-full backdrop-blur-md bg-white/30 border rounded-xl shadow-sm">
      <ul className="flex flex-col py-5 items-center">
        {links.map((link, index) => (
          <li key={index} className="py-2 text-2xl font-bold">
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverPlay;
