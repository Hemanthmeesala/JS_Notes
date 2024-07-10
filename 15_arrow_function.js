const user = {
    username:"Hemanth",
    price : 1000,
    msg:function(){
        console.log(`${this.username} ,welcome to code galaxy`);
        // console.log(this);
    }
}

// user.msg();
// user.username = "Rishita";
// user.msg();

// console.log(this);

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

function code() {
    let username = "Hemanth";
    // console.log(this);
    console.log(this.user);
}

// code();

// arrow function
const display = () => {
    let username = "Hemanth";
    console.log(username);
}

// display();

// const addNumbers = (num1,num2) => { 
//     return num1 + num2;
// }

// const addNumbers = (num1,num2) => num1 + num2;

const addNumbers = (num1,num2) => (num1 + num2);

console.log(addNumbers(2,3));