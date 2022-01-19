import { sneaker } from "./Mock";

import Counter from "../Counter"

function Info(){
    return(
        <div className="w-full ml-0 border-2 border-blue-500 md:6/12 md:ml-32 ">
            {sneaker.map((item, id) => {
                return (
                    <div key = {id} className="font-display">
                        <span className="text-amber-600 tracking-widest uppercase">{item.brand}</span>
                        <h2 className="text-3xl font-display mb-8 mt-7 md:text-5xl max-w-sm w-full ">{item.productName}</h2>
                        <p className="font-display mb-6 max-w-sm w-full">{item.description}</p>
                        <div className="flex items-center md:block">
                            <p className="flex content-center">
                                <span className="text-3xl">$ {item.discountPrice}.00{" "}</span>
                                <span className="p-2 bg-amber-200 text-amber-500 rounded-md ml-6">{item.discout}%</span>
                            </p>
                            <p className="ml-auto">
                                <s className="font-display">$ {item.initialPrice}.00</s>
                            </p>
                        </div>
                        <div className="flex items-center border-2 border-rose-500">
                            <Counter />
                            <div className="btn ml-4">
                                <p>Add to cart</p>
                            </div> 
                        </div>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Info