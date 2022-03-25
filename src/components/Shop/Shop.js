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
        if (cart.length < 4) {
            const newCart = [...cart, game];
            setCart(newCart);
        }
        else {
            alert('Cart Item is exceeded above 4');
        }
    }

    const handleSetRemoveCart = () => {
        const newCart = [];
        setCart(newCart);
    }

    const handleChooseGameRandom = (names) => {
        if (cart.length !== 0) {
            const game = names[Math.floor(Math.random() * names.length)];
            alert('Your Surprise Game is: ' + game);
        }
        else {
            alert('Please Choose Something');
        }
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
                {
                    <Cart
                        cart={cart}
                        handleChooseGameRandom={handleChooseGameRandom}
                        handleSetRemoveCart={handleSetRemoveCart}
                    ></Cart>
                }
            </div>
        </div>
    );
};

export default Shop;