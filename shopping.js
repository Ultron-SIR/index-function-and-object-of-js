// Array of objects representing items in the shopping cart
const shoppingCart = [
    { productName: "Laptop", quantity: 1, pricePerUnit: 1200 },
    { productName: "Smartphone", quantity: 2, pricePerUnit: 800 },
    { productName: "Headphones", quantity: 3, pricePerUnit: 150 },
    { productName: "Monitor", quantity: 1, pricePerUnit: 300 }
];


function calculateTotalCost(cart) {
    return cart.reduce((total, item) => {
        return total + item.quantity * item.pricePerUnit;
    }, 0);
}


const totalCost = calculateTotalCost(shoppingCart);
console.log("Total Cost: $" + totalCost);
