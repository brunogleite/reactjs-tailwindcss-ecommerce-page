import "../index.css";

import Logo from "../assets/sneakers.svg";
import Cart from "../assets/cart.svg";
import iconDelete from "../assets/icon-delete.svg";
import profileIcon from "../assets/profile-pic.png"

import Modal from "./Modal";
import React, { useContext, useState } from "react";
import { ProductContext } from "../App"

//passar object to Nav component navList


function Nav({ productsCartQuantity }) {
  const { } = useContext(ProductContext)

  const [click, setClick] = useState(false);
  const [cartClick, setCartClick] = useState(false);
  const [navList, setNavList] = useState(false);



  function handleClick() {
    setClick(!click)
  }

  function handleCartClick() {
    setCartClick(!cartClick)
  }

  return (
    <div className="container flex content-center p-8 mx-auto">
      <div className="mr-1 md:hidden" onClick={() => setNavList(!navList)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className="">
        <img src={Logo} />
      </div>
      {navList ?
        <div className="flex flex-col h-screen w-1/2 absolute z-10 left-0 top-0 bg-neutral-50 pl-5 pt-5">
          <img className="w-5 mb-14" src={iconDelete} onClick={() => setNavList(!navList)}/>
          <ul className="font-bold md:flex md:ml-14 gap-8">
            <li className="mb-5">Collections</li>
            <li className="mb-5">Men</li>
            <li className="mb-5">Women</li>
            <li className="mb-5">About</li>
            <li>Contact</li>
          </ul>
        </div>
        : ""}
      <ul className=" hidden md:flex md:ml-14 gap-8">
            <li className="pb-3 relative cursor-pointer hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:bg-orange-500 hover:after:w-full hover:after:h-1">Collections</li>
            <li className="pb-3 relative cursor-pointer hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:bg-orange-500 hover:after:w-full hover:after:h-1">Men</li>
            <li className="pb-3 relative cursor-pointer hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:bg-orange-500 hover:after:w-full hover:after:h-1">Women</li>
            <li className="pb-3 relative cursor-pointer hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:bg-orange-500 hover:after:w-full hover:after:h-1">About</li>
            <li className="pb-3 relative cursor-pointer hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:bg-orange-500 hover:after:w-full hover:after:h-1">Contact</li>
      </ul>
      <div className="flex ml-auto">
        <div className="relative">
          <img src={Cart} onClick={handleCartClick} className="mr-11 cursor-pointer" />
          {productsCartQuantity > 0 && <span className="text-xs bg-slate-500 px-2 py-0.5 rounded-full text-white absolute -top-2 left-3">{productsCartQuantity}</span>}
        </div>

        <div onClick={handleClick} className=" bg-slate-300 rounded-full hover:border-1 border-orange-500 cursor-pointer">
          <img className="max-w-[50px] min-h-[50px]" src={profileIcon} />
        </div>
      </div>
      {cartClick || click ? <Modal /> : ""}
    </div>
  );
}

export default Nav;