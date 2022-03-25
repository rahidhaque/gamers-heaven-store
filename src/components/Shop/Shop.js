import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Game from '../Game/Game';
import './Shop.css'

const Shop = () => {
    const [games, setGames] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setGames(data))
    }, [])

    const handleAddCart = (game) => {
        const newCart = [...cart, game];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='games-container'>
                {
                    games.map(game => <Game
                        key={game.id}
                        game={game}
                        handleAddCart={handleAddCart}
                    ></Game>)
                }
            </div>
            <div className='cart-container'>
                <h4>Selected Games</h4>
                {
                    <Cart
                        cart={cart}
                    ></Cart>
                }
            </div>
        </div>
    );
};

export default Shop;