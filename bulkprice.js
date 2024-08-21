const product = {
    name: "Laptop",
    bulkPricing: [
        {
            quantity: 20,
            pricePerUnit: 100,
        },
        {
            quantity: 10,
            pricePerUnit: 100,
        }
    ],
};

function calculateTotalPrice(quantityPurchased) {
    const pricingModelPurchased = product.bulkPricing.find((pricing) => {
        return quantityPurchased >= pricing.quantity;
    });
     return quantityPurchased * pricingModelPurchased.pricePerUnit;
}

console.log(calculateTotalPrice(5));  
console.log(calculateTotalPrice(45)); 
console.log(calculateTotalPrice(10));
console.log(calculateTotalPrice(35)); 
console.log(calculateTotalPrice(15)); 
console.log(calculateTotalPrice(25));
