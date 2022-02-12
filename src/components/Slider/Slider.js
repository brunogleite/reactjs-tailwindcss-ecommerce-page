import { imgMock } from "./Mock";
import Modal from "../Modal";

import NextIcon from "../../assets/nextIcon.png";
import PrevIcon from "../../assets/prevIcon.png";

import ButtonControl from "../ButtonControl";


import React, { useCallback } from "react";

//I should get id of each image without rendering evry single icons
//how do I get that?

//fazer uma funcao em que consiga obter cada id do meu objeto like api 





function Slider() {

    const [product, setProduct] = React.useState(0);
    const [lightbox, setLightBox] = React.useState(false);
    const length = imgMock.length;

    {/*function receiveEachId(){
        {imgMock.map(( {id} ) => {

            if(product === id ){
                setProduct((prevState) => prevState + 1);
            }

            ver opcao em que o id é menor do que 1 nao faz nada e maior do que 4
            se queres aumentar adiciona  + 1 à id e mudas alguma variavel (provavelmente o product)
            
        })}
    }*/}

    function nextSlide() {
        //precisamos de certificar que 
        setProduct(product === length - 1 ? 0 : product + 1)
    }

    function prevSlide() {
        //precisamos de certificar que 
        setProduct(product === 0 ? length - 1 : product - 1)
    }


    function changeProduct(id) {
        setProduct(id)
    }

    function changeLightBoxProduct(id) {
        setLightBox(id)
    }

    //esta funcao vai verificar se o target.classname contem left or right e depois faz algo com isso 
    /* const handleChangeImage = useCallback((className) => {
         if (className.includes("leftButton")) {
             setImageNumber((prevState) => (prevState > 1 ? prevState - 1 : 4))
         }
 
         if (className.includes("rightButton")) {
             setImageNumber((prevState) => (prevState < 4 ? prevState + 1 : 1))
         }
     }, [])*/

    return (
        <div className="w-screen md:w-6/12  md:flex md:flex-col md:justify-center md:items-center">
            <div>
                <div>
                    <ButtonControl>
                        <img onClick={prevSlide} src={PrevIcon} className="block md:hidden absolute top-1/3" />
                    </ButtonControl>
                    {imgMock.map((data, id) => {

                        return (
                            <div className={id === product ? "block" : "hidden"} key={id}>
                                {id === product && (<img
                                    key={id}
                                    src={data.imgSrc}
                                    alt={"Product Image " + data.id}
                                    draggable="false"
                                    className={product === id ? "block md:rounded-2xl md:mb-7 md:max-w-[445px] md:min-h-[455px] w-full h-full" : "hidden"}
                                    onClick={() => setLightBox(!lightbox)}
                                />)}


                            </div>
                        )


                    })}
                    <ButtonControl>
                        <img onClick={nextSlide} src={NextIcon} className="block md:hidden absolute right-0 top-1/3" />
                    </ButtonControl>
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
                                className={product === index ? " hidden rounded-lg opacity-40 md:max-w-[88px] md:min-h-[88px] w-full h-full ml-7 md:block first:ml-0" : "hidden rounded-lg md:max-w-[88px] md:min-h-[88px] w-full h-full ml-7 first:ml-0 md:block "} />
                        )
                    })}
                </div>
                {lightbox ?
                    <div className="hidden md:block w-screen min-h-screen bg-neutral-900/70 absolute inset-0">
                        <div className=" grid place-content-center">
                            <div onClick={() => setLightBox(!lightbox)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-8 w-8 hover:stroke-orange-500" fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <div className="max-w-xl relative">
                                <ButtonControl>
                                    <img onClick={prevSlide} src={PrevIcon} className="absolute top-1/2" />
                                </ButtonControl>
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
                                <ButtonControl>
                                    <img onClick={nextSlide} src={NextIcon} className="absolute right-0 top-1/2" />
                                </ButtonControl>
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
                                            className={product === index ? " hidden rounded-lg opacity-40 md:max-w-[88px] md:min-h-[88px] w-full h-full ml-7 md:block first:ml-0" : "hidden rounded-lg md:max-w-[88px] md:min-h-[88px] w-full h-full ml-7 first:ml-0 md:block "} />
                                    )
                                })}
                            </div>
                        </div>
                    </div> : ""}
            </div>

        </div>

    )
}

export default Slider