// Shallow Copy

const original = { name: "John", address: { city: "Delhi" } };

// // Object.assign

// const shallowCopy = Object.assign({}, original);

// // Spread Operator

// const shallowCopy2 = {...original};

// shallowCopy2.address.city = "New city";



const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.address.city = "New city";


console.log(original.address.city);
console.log(deepCopy.address.city);