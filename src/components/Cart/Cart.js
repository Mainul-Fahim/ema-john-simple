import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    const total=cart.reduce((total,pd)=>total+pd.price,0);
    let shipping =0;
    if(total>15)
        shipping=4.99;
    else if(total>0)
        shipping=12.99;
     const tax=total/10; 
     const grandTotal=Math.round(total+shipping+tax);      
    return (
        <div>
           <h4>Order Summary</h4>
           <p>Items Ordered: {cart.length}</p>
           <p><small>Shipping: {shipping}</small></p>
           <p><small>Tax: {tax}</small></p>
           <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;