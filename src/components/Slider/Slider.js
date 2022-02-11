import { imgMock } from "./Mock";
import Modal from "../Modal"

import ButtonControll from "../ButtonControl";


import React, { useCallback } from "react";

function Slider() {
    const [product, setProduct] = React.useState(0);
    const [lightbox, setLightBox] = React.useState(false);
    const [imageNumber, setImageNumber] = React.useState(1);

    function changeProduct(id) {
        setProduct(id)
    }

    function changeLightBoxProduct(id) {
        setLightBox(id)
    }

    //esta funcao vai verificar se o target.classname contem left or right e depois faz algo com isso 
    const handleChangeImage = useCallback((className) => {
        if (className.includes("leftButton")) {
            setImageNumber((prevState) => (prevState > 1 ? prevState - 1 : 4))
        }

        if (className.includes("rightButton")) {
            setImageNumber((prevState) => (prevState < 4 ? prevState + 1 : 1))
        }
    }, [])

    return (
        <div className="w-screen md:w-6/12 border-2 border-rose-500 flex flex-col justify-center items-center">
            <div>
                {imgMock.map((data, id) => {
                    return (
                        <img
                            key={id}
                            src={data.imgSrc}
                            alt={"Product Image " + data.id}
                            draggable="false"
                            className={product === id ? "block md:rounded-2xl md:mb-7 md:max-w-[445px] md:max-h-[455px] w-full h-full" : "hidden"}
                            onClick={() => setLightBox(!lightbox)}
                        />
                    )
                })}
            </div>
            <div className="hidden md:flex justify-center">
                {imgMock.map((data, index) => {
                    return (
                        <img
                            onClick={() => changeProduct(index)}
                            src={data.imgThumb}
                            alt={"Product image " + data.id}
                            key={data.id}
                            draggable="false"
                            className={product === index ? " hidden rounded-lg opacity-40 md:max-w-[88px] md:max-h-[88px] w-full h-full  ml-7 md:block first:ml-0" : "hidden rounded-lg md:max-w-[88px] md:max-h-[88px] w-full h-full ml-7 first:ml-0 md:block "} />
                    )
                })}
            </div>
            {lightbox ?
                <div className="w-screen min-h-screen bg-neutral-900/70 absolute inset-0 grid place-content-center">
                    <div onClick={() => setLightBox(!lightbox)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-8 w-8 hover:stroke-orange-500" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className="max-w-xl relative">
                        <ButtonControll className="absolute bg-orange-500 p-6 left-0 top-1/2 cursor-pointer leftButton" handleClick={handleChangeImage}> heelo </ButtonControll>
                        {imgMock.map((data, id) => {
                            return (
                                <img
                                    key={id}
                                    src={data.imgSrc}
                                    alt={"Product Image " + data.id}
                                    draggable="false"
                                    className={product === id ? "block rounded-2xl mb-7 aspect-square" : "hidden"}
                                />
                            )
                        })}
                        <ButtonControll className="absolute bg-orange-500 p-6 right-0 top-1/2 cursor-pointer rightButton" handleClick={handleChangeImage}> goodbye </ButtonControll>
                    </div>
                    <div className="hidden md:flex justify-center">
                        {imgMock.map((data, index) => {
                            return (
                                <img
                                    onClick={() => changeProduct(index)}
                                    src={data.imgThumb}
                                    alt={"Product image " + data.id}
                                    key={data.id}
                                    draggable="false"
                                    className={product === index ? " hidden rounded-lg opacity-40 w-20 h-20 ml-7 aspect-square md:block first:ml-0" : "hidden rounded-lg w-20 h-20 ml-7 aspect-square first:ml-0 md:block "} />
                            )
                        })}
                    </div>
                </div> : ""}
        </div>

    )
}

export default Slider