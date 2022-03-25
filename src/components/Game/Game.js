import React from 'react';
import './Game.css'

const Game = (props) => {
    const { name, img, price } = props.game;
    return (
        <div className='game'>
            <img src={img} alt="" />
            <div className='game-info'>
                <p className='game-name'>{name}</p>
                <p className='game-price'>Price: {price} Tk.</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Game;