import React from 'react';

const Cart = (props) => {
    const textStyle = {textAlign: "center"};
    let totalSalary =0;
    const cart = props.allProfiles
    for (let i = 0; i < cart.length; i++) {
        const salary = parseFloat(cart[i].salary.replace("$", ""));
        totalSalary = totalSalary + salary;        
    }
    return (
        <div>
            <h4 style ={textStyle}>Profile Selected: {cart.length}</h4>
            <p style ={textStyle}>Total Salary of Selected profiles: {totalSalary}</p>
        </div>
    );
};

export default Cart;