import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/shared/desktop/logo.svg";
import LogoWhite from "../assets/shared/desktop/logo-white.svg";
import Menu from "../assets/shared/desktop/menu.svg";
import Close from "../assets/shared/desktop/close.svg";
import { ReactNode } from "react";
import Facebook from "../assets/svgsForFooter/facebook.svg";
import YouTube from "../assets/svgsForFooter/youtube.svg";
import Twitter from "../assets/svgsForFooter/twitter.svg";
import Pinterest from "../assets/svgsForFooter/pinterest.svg";
import Instagram from "../assets/svgsForFooter/instagram.svg";

const Wrapper = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const isSmallScreen = window.innerWidth < 640;
    isSmallScreen &&
      document.querySelector("#overlay")!.classList.toggle("hidden");
  };

  return (
    <>
      <div className="relative z-20 mx-auto flex min-h-[72px] max-w-[1158px] items-center justify-between bg-pureWhite px-6 sm:px-10 md:px-6">
        <Link to={"/"}>
          <img src={Logo} alt="Photosnap Logo" />
        </Link>
        <nav
          className={`absolute top-[72px] left-0 ${
            menuOpen ? "flex" : "hidden"
          } min-h-[253px] min-w-full flex-col justify-center bg-pureWhite px-6 text-[15px] font-bold tracking-[2.5px] sm:relative sm:top-0 sm:flex sm:min-h-[auto] sm:min-w-[auto] sm:px-4 sm:text-xs`}
          id="nav"
        >
          <ul className="mb-5 flex flex-col items-center gap-5 sm:mb-0 sm:flex-row sm:gap-[37px] sm:tracking-[2px]">
            {["STORIES", "FEATURES", "PRICING"].map((link, key) => (
              <li>
                <Link
                  to={`/${link.toLowerCase()}`}
                  className="hover:opacity-50"
                  onClick={toggleMenu}
                  key={key}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <hr className="mb-5 border-pureBlack opacity-25 sm:hidden" />
          <button className="min-h-[3rem] min-w-full bg-pureBlack font-bold tracking-[inherit] text-pureWhite sm:hidden">
            GET AN INVITE
          </button>
        </nav>
        <button className="hidden min-h-[40px] min-w-[158px] bg-pureBlack text-xs font-bold tracking-[2.5px] text-pureWhite hover:bg-lightGrey hover:text-pureBlack sm:block">
          GET AN INVITE
        </button>
        <button id="nav-toggle" className="sm:hidden" onClick={toggleMenu}>
          <img
            src={menuOpen ? Close : Menu}
            id="nav-hamburger"
            alt="Menu Toggle"
          />
        </button>
      </div>
      <div className="max-w-[1440px] h-full mx-auto">{children}</div>
      <div
        id="overlay"
        className="fixed inset-0 z-10 hidden min-h-screen min-w-full bg-pureBlack bg-opacity-50"
      ></div>
      <div className=" max-w-[1440px] mx-auto  h-full   bg-pureBlack  ">
        <div className=" mx-auto flex max-w-[1190px] grid-cols-2 grid-rows-3 flex-col items-center bg-pureBlack py-14 text-pureWhite  sm:grid sm:px-10 sm:py-12 md:grid-cols-5 md:grid-rows-2 md:py-16 ">
          <Link to={"/"}>
            <img
              src={LogoWhite}
              alt="Photosnap Logo"
              className="mb-8 sm:mb-0 md:self-start "
            />
          </Link>
          <div className="mb-[49px] flex gap-[13.33px] sm:row-start-3 sm:mb-0 md:row-start-2 md:self-end ">
            <img
              className="w-[20px] h-[20px] cursor-pointer"
              src={Facebook}
              alt="facebook logo"
            />
            <img
              className="w-[20px] h-[20px] cursor-pointer "
              src={YouTube}
              alt="youtube logo"
            />
            <img
              className="w-[20px] h-[20px] cursor-pointer "
              src={Twitter}
              alt="twitter logo"
            />
            <img
              className="w-[20px] h-[20px] cursor-pointer "
              src={Pinterest}
              alt="Pintrest logo"
            />
            <img
              className="w-[20px] h-[20px] cursor-pointer"
              src={Instagram}
              alt="instagram logo"
            />
          </div>
          <div className="mb-[120px] flex flex-col items-center gap-[19px] text-[12px] font-bold tracking-[2px] sm:row-start-2 sm:mb-[36px] sm:flex-row md:row-span-2 md:mb-0 md:flex-col md:items-start md:pl-16 ">
            <Link to={"/"}>
              <h1 className="font-bold text-[12px] leading-4 tracking-[2px] text-pureWhite hover:opacity-50">
                HOME
              </h1>
            </Link>
            <Link to={"/stories"}>
              <h1 className="font-bold text-[12px] leading-4 tracking-[2px] text-pureWhite hover:opacity-50">
                STORIES
              </h1>
            </Link>
            <Link to={"/features"}>
              <h1 className="font-bold text-[12px] leading-4 tracking-[2px] text-pureWhite hover:opacity-50">
                FEATURES
              </h1>
            </Link>
            <Link to={"/pricing"}>
              <h1 className="font-bold text-[12px] leading-4 tracking-[2px] text-pureWhite hover:opacity-50">
                PRICING
              </h1>
            </Link>
          </div>
          <button className="mb-[34px] flex items-center gap-[18px] text-[12px] font-bold tracking-[2px] hover:underline sm:mb-0 sm:justify-end md:col-span-2 md:col-start-4 md:self-start">
            GET AN INVITE
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="currentColor">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </button>
          <span className="text-[15px] opacity-50 sm:row-start-3 sm:flex sm:justify-end md:col-span-2 md:col-start-4 md:row-start-2 md:self-end">
            Copyright 2023 All Rights Reserved
          </span>
        </div>
      </div>
    </>
  );
};

export default Wrapper;
