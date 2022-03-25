import React from 'react';
import './Game.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Game = (props) => {
    const { name, img, price } = props.game;
    return (
        <div className='game'>
            <img src={img} alt="" />
            <div className='game-info'>
                <p className='game-name'>{name}</p>
                <p className='game-price'>Price: {price} Tk.</p>
            </div>
            <button className='btn-cart'><p className='add-cart-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Game;