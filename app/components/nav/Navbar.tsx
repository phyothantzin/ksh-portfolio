"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Certificates",
    path: "/certificates",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = ({
  visibleDefault,
  fixed = true,
}: {
  visibleDefault: boolean;
  fixed: boolean;
}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(visibleDefault || false);

  useEffect(() => {
    if (!fixed) {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        setVisible(currentScrollPos < prevScrollPos && currentScrollPos > 10);

        setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }

    return;
  }, [fixed, prevScrollPos, visible]);

  return (
    <header>
      <nav
        className={`${
          fixed ? "fixed" : "sticky"
        } mx-auto border-b border-[#33353F] text-black top-0 left-0 right-0 z-10 bg-[#fffafaec] bg-opacity-100 transition-all duration-300 ${
          visible && !fixed ? "bg-opacity-100" : "bg-opacity-0 -translate-y-full"
        }`}
      >
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
          <Link href="/" className="text-2xl md:text-5xl font-semibold">
            LOGO
          </Link>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-800 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-800 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </nav>
    </header>
  );
};

export default Navbar;
