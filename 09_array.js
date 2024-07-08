// console.log(arr);
// console.log(typeof arr); // object type 
// console.log(arr[2]); // 3

// const arr2 = ["yash","ram","shyam"];
// console.log(arr2);
// console.log(arr2.length);

// Array methods];
// Push and pop are called on the array directly
const arr = [1,2,3,4,5,6,7,8,9,10]; // array create shallow copy => reference
arr.push(100); // push number at last
// console.log(arr);
arr.pop(); // pop from last

// Unshift and shift are called on the array directly
arr.unshift(9); // add number to index 0
// console.log(arr);
arr.shift(); // remove the 0th index
// console.log(arr);

// console.log(arr);
// console.log(arr.includes(1)); // boolean values 
// console.log(arr.indexOf(3));

// const arr3 = arr.join();
// console.log(arr);
// console.log(arr3);

// splice , slice
const values = [2,3,4,5,6,7];
console.log("A ",values);

const m1 = values.slice(1,4); // 1 to 4 between
console.log("B ",m1);
console.log(m1)

const m2 = values.splice(2,4); // all elements after 2 index , no of elements
console.log("C ",m2)
console.log(m2)