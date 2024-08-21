// Array of objects representing products in the inventory
const inventory = [
    { name: "Laptop", price: 1200, category: "Electronics", quantity: 10 },
    { name: "Smartphone", price: 800, category: "Electronics", quantity: 15 },
    { name: "Headphones", price: 150, category: "Accessories", quantity: 25 },
    { name: "Monitor", price: 300, category: "Electronics", quantity: 5 },
    { name: "Chair", price: 100, category: "Furniture", quantity: 8 }
];


function purchaseProduct(inventory, productName, purchaseQuantity) {
    const product = inventory.find(item => item.name === productName);
    
    if (product) {
        if (purchaseQuantity <= product.quantity) {
            product.quantity -= purchaseQuantity;
            console.log(`${purchaseQuantity} ${productName}(s) purchased successfully.`);
        } else {
            console.log(`Insufficient quantity for ${productName}. Available: ${product.quantity}`);
            product.quantity = 0; 
        }
    } else {
        console.log(`${productName} not found in inventory.`);
    }
}


purchaseProduct(inventory, "Laptop", 3);
purchaseProduct(inventory, "Headphones", 30);
purchaseProduct(inventory, "Chair", 5);


console.log(inventory);
