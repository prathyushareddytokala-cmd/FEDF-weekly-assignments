const cart = [100, 200, 300];

const getTotal = (items) => {
  return items.reduce((sum, price) => sum + price, 0);
};

console.log("Total:", getTotal(cart));