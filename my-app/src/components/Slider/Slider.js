import { imgMock } from "./Mock"; 

import React from "react";

function Slider(){
    const [product , setProduct] = React.useState(0);
    const [lightbox , setLightBox] = React.useState(false);

    function changeProduct(id){
        setProduct(id)
    }

    /*function changeLightBoxProduct(id){
        setLightBox(id)
    }*/

    return(
        <div className="w-full p-0  md:w-6/12 md:p-12 border-2 border-rose-500">
           <div className="">
               {imgMock.map((data, id) => {
                   return(
                    <img 
                   key = {id} 
                   src={data.imgSrc}
                   alt={"Product Image " + data.id}
                   draggable = "false"
                   className={product === id ? "block aspect-square md:mb-7 md:rounded-2xl" : "hidden"}
                   onClick={() => setLightBox(!lightbox)}
                   />
                   )  
               })}
           </div>
           <div className="hidden md:flex border-2 border-rose-500">
               {imgMock.map((data, index) => {
                   return(
                    <img 
                    onClick={() => changeProduct(index)}
                    src={data.imgThumb}
                    alt={"Product image " + data.id}
                    key={data.id}
                    draggable="false"
                    className={product === index ? " hidden rounded-lg border-2 border-amber-500 opacity-40 w-20 h-20 ml-7 aspect-square md:block first:ml-0" : "hidden rounded-lg w-20 h-20 ml-7 aspect-square first:ml-0 md:block "} />
                   )
               })}
           </div>
        </div>
        
    )
}

export default Slider