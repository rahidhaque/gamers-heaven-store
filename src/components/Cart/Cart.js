import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    const names = [];
    for (const game of cart) {
        names.push(game.name);
    }

    const chooseGameRandom = () => {
        const game = names[Math.floor(Math.random() * names.length)];
        alert('Your Surprise Game is: ' + game);
    }

    return (
        <div className='cart'>
            {
                names.map(name => <div>{name}</div>)
            }
            <button onClick={chooseGameRandom}>Choose 1 Game for me</button>
        </div>
    );
};

export default Cart;