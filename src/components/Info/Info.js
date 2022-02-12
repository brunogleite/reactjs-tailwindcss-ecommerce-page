import React from "react"

import { sneaker } from "./Mock";

import Counter from "../Counter";


function Info() {

    return (
        <div className="container md:ml-0 md:w-6/12 md:pl-6">
            {sneaker.map((item, id) => {
                return (
                    <div key={id} className="font-display max-w-96">
                        <span className="text-amber-600 tracking-widest uppercase block mt-[24px] text-xs	">{item.brand}</span>
                        <h2 className=" text-3xl font-bold mb-8 mt-7 md:text-5xl ">{item.productName}</h2>
                        <p className="max-w-[327px] font-display mb-6">{item.description}</p>
                        <div className="flex items-center md:block">
                            <p className="flex content-center">
                                <span className="text-3xl font-bold">$ {item.discountPrice}.00{" "}</span>
                                <span className="p-2 bg-amber-200 text-amber-500 rounded-md ml-6">{item.discout}%</span>
                            </p>
                            <p className="ml-auto">
                                <s className="font-display">$ {item.initialPrice}.00</s>
                            </p>
                        </div>
                    </div>
                )
            })}

            <div className="mt-7">
                <Counter />
            </div>
        </div>
    )
}

export default Info