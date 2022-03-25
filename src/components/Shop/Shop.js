import React, { useEffect, useState } from 'react';
import Game from '../Game/Game';
import './Shop.css'

const Shop = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setGames(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className='games-container'>
                {
                    games.map(game => <Game
                        key={game.id}
                        game={game}
                    ></Game>)
                }
            </div>
            <div className='cart-container'>
                <h4>Selected Games</h4>
            </div>
        </div>
    );
};

export default Shop;