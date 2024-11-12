import Image from "next/image";
import Link from "next/link";
import logoDark from "../public/images/logoDark.png";
import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <header className=" fixed w-full z-10 bg-secondary text-white py-4">
      {/* desktop navigation section  */}
      <nav className=" container flex justify-between items-center">
        <div className=" flex items-center gap-2">
          
          <Link href="/" className=" m-0 font-bold text-2xl text-uppercase text-primary">
          DevBytes
          </Link>
        </div>

        <div className=" hidden md:flex items-center gap-8 font-small text-s">
          <Link
            href="/"
            className=" hover:text-primary transition duration-200 ease-linear navbar-nav mr-auto py-0"
          >
            Home
          </Link>
          <Link
            href="/blog/page"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            Blogs
          </Link>
          <Link
            href="/AboutUs/page"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            About Us
          </Link>
          <Link
            href="/ContactUs/page"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            Contact Us
          </Link>

          <button className=" hidden lg:flex border-2 border-primary text-s px-4 rounded-md hover:bg-primary transition duration-200 ease-linear">
            Sign In
          </button>
        </div>

        <div className=" md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange} />
          )}
        </div>
      </nav>

      {/* responsive section  */}
      <div
        className={`${menu ? "translate-x-0" : "-translate-x-full"}
       md:hidden flex flex-col absolute bg-secondary text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300`}
      >
        <Link
          href="/"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          Home
        </Link>
        <Link
          href="/blog/page"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          Blogs
        </Link>
        <Link
          href="/AboutUs/page"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          About Us
        </Link>
        <Link
          href="/ContactUs/page"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          Contact Us
        </Link>

        <div>
          <button className="border-2 border-primary py-1 px-4 rounded-md">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
