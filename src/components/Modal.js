import React, { useContext, useState } from "react";
import { sneaker } from "./Info/Mock";
import img1Thumb from "../assets/image-product-1-thumbnail.jpg";
import { ProductContext } from "../App"
import iconDelete from "../assets/icon-delete.svg";

function Modal() {

    const { productsCart, handleRemoveProduct } = useContext(ProductContext);
    const [productQuantity, setProductQuantity] = useState(0);

    return (
        <div className="w-96 bg-white shadow-xl absolute right-12 top-16 rounded-md">
            <div>
                <h1 className="text-base py-5 pl-6">Cart</h1>
                <hr></hr>
            </div>

            {productsCart.map(({
                id, name, price, thumbnails, quantity, discount
            }) => (
                <div className="flex items-center mb-6 p-6" key={id} >
                    <img className="aspect-square w-12 h-12 rounded-md" src={img1Thumb} alt="" />
                    <div className="mx-6">
                        <p>{name}</p>
                        <p>
                            $
                            {(price * discount).toFixed(2)}
                            {' '}
                            x
                            {' '}
                            {quantity}
                            {' '}
                            <span className="font-bold">
                                $
                                {(price * discount * quantity).toFixed(2)}
                            </span>
                        </p>
                    </div>

                    <img onClick={() => handleRemoveProduct(id)} src={iconDelete} className="ml-auto cursor-pointer" alt="" />
                </div>
            ))}

            {productsCart.length > 0 ? <div className="btn">
                    <p>Checkout</p>
                </div> : <h1 className="grid place-content-center min-h-full p-10">Your Cart is Empty</h1> }

        </div>
    )
}

export default Modal