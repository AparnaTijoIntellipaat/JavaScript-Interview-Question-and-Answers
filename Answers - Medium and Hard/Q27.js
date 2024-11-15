

let weakSet = new WeakSet();

let obj = { name: "Adam" };

weakSet.add(obj, "Employee");

obj = null;

console.log(weakSet.has(obj));
