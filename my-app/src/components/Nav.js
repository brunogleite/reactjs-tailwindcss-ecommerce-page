import "../index.css";

import Logo from "../assets/sneakers.svg";
import Cart from "../assets/cart.svg";


function Nav() {
  return (
    <div className=" flex content-center p-8">
       <div className="">
           <img src={Logo} />
       </div>
       <ul className="flex ml-14 gap-8">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
       </ul>
       <div className="flex content-center ml-auto">
           <img src={Cart} className="mr-11" />
           <div className="bg-slate-300 rounded-full w-5 h-5 hover:border-2 border-orange-500"></div>
       </div>
    </div>
  );
}

export default Nav;