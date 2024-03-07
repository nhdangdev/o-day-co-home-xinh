"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverPlay from "./MenuOverPlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Product", path: "#product" },
  { title: "Feature", path: "#feature" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10  bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-black font-semibold"
        >
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center justify-center px-3 py-2 border rounded border-black text-black hover:text-white hover:border-white"
            >
              <Bars4Icon className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center justify-center px-3 py-2 border rounded border-black text-black hover:text-white hover:border-white"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex items-center gap-x-10 md:p-0 sm:flex-row md:space-x-4 cursor-pointer overflow-hidden menu ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  className="menu-link"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex items-center justify-center gap-5">
          <p className="py-2 pl-3 pr-4 text-black sm:text-xl round md:p-0 hover:text-red-500 menu-link cursor-pointer font-semibold">
            Settings
          </p>
          <Image
            src="/images/avt.jpg"
            alt="avt-image"
            width={30}
            height={30}
            className="rounded-full cursor-pointer"
          />
        </div>
      </div>
      {navbarOpen ? <MenuOverPlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
