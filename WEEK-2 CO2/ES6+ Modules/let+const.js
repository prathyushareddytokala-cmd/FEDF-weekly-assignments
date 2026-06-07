const TAX = 0.18; // 18%
let price = 1000;

let taxAmount = price * TAX;
let finalPrice = price + taxAmount;

console.log(`Final Price: ₹${finalPrice}`);const welcomeUser = (name) => {
  return `Welcome, ${name}!`;
};
