const person = {
  name: "Dinesh",
  address: {
    city: "Hyderabad",
    pincode: 500001
  }
};

const { address: { city, pincode } } = person;

console.log(city, pincode);