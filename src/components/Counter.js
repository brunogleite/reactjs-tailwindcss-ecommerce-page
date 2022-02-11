import React, { useContext, useState } from "react";
import { ProductContext } from "../App"



function Counter() {

    const { products, handleAddProductsToCart } = useContext(ProductContext);

    const [productId] = useState(1);
    const [productQuantity, setProductQuantity] = useState(0);

    function handleClickCheckout() {
        handleAddProductsToCart(productId, productQuantity);
        setProductQuantity(0)
    }

    return (
        <div className=" w-full md:flex md:content-center md:mr-4 md:bg-slate-50 md:rounded-lg">
            <div className="flex content-center max-w-[157px]">
                <button className="p-6 text-orange-500 hover:text-orange-300 font-bold text-xl" onClick={() => { if (productQuantity === 0) return; setProductQuantity(productQuantity - 1) }}>-</button>
                <p className="py-6 ml-auto">{productQuantity}</p>
                <button className="p-6 ml-auto text-orange-500 hover:text-orange-300 font-bold text-xl" onClick={() => { setProductQuantity(productQuantity + 1) }}>+</button>
            </div>

            {productQuantity ? 
            <div onClick={() => handleClickCheckout()} className="btn w-full md:max-w-[272px] select-none">
                <p>Add to cart</p>
            </div> 
            : ""}

        </div>
    )

}

export default Counter