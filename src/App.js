import "./index.css";

import { sneaker } from "./components/Info/Mock";
import React, { useCallback, useEffect, createContext, useState } from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";


export const ProductContext = createContext();

function App() {

  const [products] = useState([
    {
      id: 1,
      name: 'Autumn Limited Edition...',
      company: 'SNEAKER COMPANY',
      title: 'Fall Limited Edition Sneakers',
      description: 'These low-profile sneakers are your perfect casual wear  companion. featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.',
      price: 250.00,
      discount: 0.5
    }
  ]);
  const [productsCart, setProductCart] = useState([]);
  const [productsCartQuantity, setProductsCartQuantity] = useState(0);
  const [navListActive, setNavListActive] = useState(false);

  useEffect(() => {
    let newProductQuantity = 0;

    productsCart.forEach((product) => {
      newProductQuantity += product.quantity
    });

    setProductsCartQuantity(newProductQuantity);
  }, [productsCart])

  const handleAddProductsToCart = useCallback((productId, productQuantity) => {
    const newProducts = [];

    if (productQuantity > 0) {
      products.map(
        (product) => ((product.id === productId)
          ? newProducts.push({ ...product, quantity: productQuantity })
          : "")
      )
    }

    setProductCart(newProducts)
  }, [])

  

  const handleRemoveProduct = React.useCallback((productId) =>{
    const newProductsCart = [];

    setProductCart(
      (prevState) => (
        prevState.filter(
          (product) => ((product.id !== productId) ? newProductsCart.push(product) : "")
        )
      )
    )
  }, []) 


  //products - sneaker 
  //productsCart
  //vamos precisar de uma funcao que adiciona itens à cart
  //funcao remove itens à cart 

  return (
    <ProductContext.Provider value={{ products , productsCart, handleRemoveProduct, handleAddProductsToCart }} className="container mx-auto">
      <Nav productsCartQuantity={productsCartQuantity}/>
      <Content />
    </ProductContext.Provider>
  );

}

export default App;
