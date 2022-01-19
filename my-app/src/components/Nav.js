import "../index.css";
import React from "react"

import Logo from "../assets/sneakers.svg";
import Cart from "../assets/cart.svg";
import Modal from "./Modal"
import profilePic from "../assets/profile-pic.png"


function Nav() {

  const [click, setClick] = React.useState(false);
  const [cartClick, setCartClick] = React.useState(false);

  function handleClick(){
    return setClick(!click)
  }

  function handleCartClick(){
    return setCartClick(!cartClick)
  }

  return (
    <div className="container flex items-center content-center p-8">
      <div className="relative w-8 h-8 bg-red-500 md:hidden">
        <span className="absolute top-2 bg-slate-500 w-full h-1"></span>
        <span className="absolute bottom-3 bg-slate-500 w-full h-1"></span>
        <span className="absolute bottom-1 bg-slate-500 w-full h-1"></span>
      </div>
       <div className="px-4">
           <img src={Logo} />
       </div>
       <ul className="flex ml-14 gap-8 hidden md:block md:flex md:ml-14 md:gap-8 ">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
       </ul>
       <div className="flex content-center ml-auto">
           <img onClick={handleCartClick} src={Cart} className="mr-6 md:mr-11" />
           <div onClick = {handleClick} className={click ? "rounded-full w-5 h-5 aspect-square p-4 bg-profile-pic bg-center bg-cover" : "rounded-full w-5 h-5 aspect-square p-4 bg-profile-pic bg-center bg-cover"}></div>
       </div>
       {click || cartClick ? <Modal /> : ""}
    </div>
  );
}

export default Nav;