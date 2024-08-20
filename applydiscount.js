function applyDiscount(order, discountPercentage) {
    
    const discountAmount = order.orderTotal * (discountPercentage / 100);
    
    
    order.orderTotal -= discountAmount;
    

    order.discount = discountPercentage;
    

    return order;
}

// Example usage:
let order = {
    orderTotal: 200,
    discount: 0
};

let updatedOrder = applyDiscount(order, 10); 
console.log(updatedOrder);
