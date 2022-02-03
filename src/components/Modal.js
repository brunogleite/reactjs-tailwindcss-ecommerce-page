import React, {useContext} from "react";
import { sneaker } from "./Info/Mock"; 
import img1Thumb from "../assets/image-product-1-thumbnail.jpg";
import { countContext } from "./Context/countContext"
import iconDelete  from "../assets/icon-delete.svg";

function Modal(){

    const { count, setCount } = useContext(countContext)
 
    return(
        <div className="border-2 border-green-500 w-96 bg-white shadow-xl absolute right-12 top-16 rounded-md">
            <div>
                <h1 className="text-base py-5 pl-6">Cart</h1>
                <hr></hr>
            </div>
            {count === 0 ? <h1 className="grid place-content-center min-h-full p-10">Your Cart is Empty</h1> : <div className="p-6">

            {sneaker.map((item, id) => {
                return (
                    <div className="flex items-center mb-6" key={id} >
                       <img className="aspect-square w-12 h-12 rounded-md" src ={img1Thumb} alt = "" />
                        <div className="mx-6">
                            <p>{item.productName}</p>
                            <p>
                                $ {item.discountPrice}.00 x {count}
                                <strong>$ {item.discountPrice * count}.00</strong>
                            </p>
                        </div>
                        <img onCLick={() => setCount(count === 0)} src={iconDelete} className="ml-auto cursor-pointer" alt="" />
                    </div>
                   
                )
            })}
            <div className="btn">
                <p>Checkout</p>
            </div>   
            </div>}
            
        </div>
    )
}

export default Modal