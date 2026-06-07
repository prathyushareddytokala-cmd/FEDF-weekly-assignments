// Spread → merge carts
const cart1 = ["Laptop", "Mouse"];
const cart2 = ["Keyboard", "Headphones"];

const finalCart = [...cart1, ...cart2];

console.log("Merged Cart:", finalCart);

// Rest → collect items
const addItems = (...items) => {
  console.log("Items added:", items);
};

addItems("Phone", "Charger", "Cover");