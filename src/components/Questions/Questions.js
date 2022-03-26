import React from 'react';
import './Questions.css'
const Questions = () => {
    return (
        <div>
            <div className='question-1'>
                <h4>1. How React Works?</h4>
                <p>Ans: React keeps a backup of original DOM which is known as virtual DOM. Virtual DOM is also much more cleaner and simpler than original DOM. If we change anything it can quickly efficiently change what requires changing and what not. It does that by comparing new DOM that is rendered and with soft copy virtual DOM. In react new DOM created when there is a change in state by user or when a user send any props. React will use the Virtual DOM to render any tree element when user does these. Virtual DOM does these work with the help of diff algorithm. Diff algorithm help to update the UI by identifying which specific node in the tree is changed and update it accordingly. That's why there is a key for specific elements and with help of the key diff helps to update by checking what was changed. </p>
            </div>
            <div className='question-2'>
                <h4>2. Props vs State?</h4>
                <p>Ans: Both props and state are plain JavaScript objects. Props are immutable as props is one way binding where we can only send its data from top to bottom. So, props are basically read-only. State is something that occurs when there is a user interaction. When there is an interaction state will change so it is mutable and there can be an initial state or simply no state. Suppose if there is a "Products" component and its child is "Product" component the parent can easily send its value to its child as props by setting an attribute but it not possible with state and it is bound to its parent component. So, the value of props can be shared to multiple components and value of state is only available in specific component.</p>
            </div>
        </div>
    );
};

export default Questions;