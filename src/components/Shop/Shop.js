import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className='games-container'>
                <h2>Games List</h2>
            </div>
            <div className='cart-container'>
                <h4>Selected Games</h4>
            </div>
        </div>
    );
};

export default Shop;