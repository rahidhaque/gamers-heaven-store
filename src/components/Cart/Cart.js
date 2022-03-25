import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart, handleChooseGameRandom, handleSetRemoveCart } = props;
    let names = [];
    for (const game of cart) {
        names.push(game.name);
    }
    const selectedGames = names.map(name => name);

    return (
        <div className='cart'>
            <h4>Selected Games</h4>
            <p className='name-text'>{selectedGames.join('\r\n')}</p>
            <button onClick={() => handleChooseGameRandom(selectedGames)}>Choose 1 Game for me</button>
            <div>
                <button onClick={handleSetRemoveCart}>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;