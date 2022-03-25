import React from 'react';
import './Game.css'

const Game = (props) => {
    const { name, img, price } = props.game;
    return (
        <div className='game'>
            <img src={img} alt="" />
        </div>
    );
};

export default Game;