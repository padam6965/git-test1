import React from 'react';
import { useSelector } from 'react-redux';
// import cartreducer from '../reducer/cartreducer';

const DisplayStore = () => {
    const cart = useSelector(store => store.cartValue)
    return (

        <>
            <h1>No. of items in the cart : {cart.cart_value}</h1>
        </>);
};

export default DisplayStore;
