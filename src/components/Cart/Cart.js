import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    const names = [];
    for (const game of cart) {
        names.push(game.name);
    }

    return (
        <div>
            {
                names.map(name => <div>{name}</div>)
            }
        </div>
    );
};

export default Cart;