const user = {};

user.id = "e12";
user.name = "rishita";
user.isLoggedIn = false;

console.log(user);

const regularUser = {
    email : "Rishita@gmail.com",
    fullname : {
        firstname : "rishita",
        lastname :"g"
    }
}

console.log(regularUser.fullname.firstname);

const obj = {1:"a",2:"b",3:"c",4:"d"};
const obj1 = {5:"f",6:"g",7:"h"};

// The Object.assign() method is used to copy the values and properties
//  from one or more source objects to a target object.
// const allObj = Object.assign({},obj,obj1); // static method (target,source)
// console.log(allObj);

// const result = {...obj, ...obj1}; // spread operator
// console.log(result);

const users = [
    {
        fullname :"Hemanth Kumar",
        age: 19
    },
    {
        fullname :"rishita",
        age:18
    }
];

// console.log(users[0]);
// console.log(Object.keys(users));
// console.log(Object.values(users));

console.log(user.hasOwnProperty('isLoggedIn')); //to check property is there or not

const course = {
    courseName : "javascript",
    price : 1299,
    courseInstructor : "Hemanth meesala"
}

const {courseInstructor : instructor} = course; // obj destructure
console.log(instructor);