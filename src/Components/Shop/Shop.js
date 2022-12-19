import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const addToOrderContainer = (products) => {
        console.log("products");
        const newCart = [...cart, products];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='shop'>


                {
                    products.map(product => <Product
                        key={product.id}
                        productContainer={product}
                        pushToOrder={addToOrderContainer}

                    ></Product>)
                }
            </div>
            <div>
                <h2>Order Area </h2>
                <h4>Order Items:{cart.length}</h4>
            </div>
        </div>
    );
};

export default Shop;