console.log("Hello World!");

// variables in js
const accountId = 12839;
let accountEmail = "hk@gamil.com";
var accountPassword = "1234";
accountCity = "delhi";
let accountState;

// accountId = 1834; not allowed, const values can not change
accountEmail = "hemanth@23gmail.com";
accountPassword = "2343";
accountCity = "jsr";

// prefer not to used var 
// because of issue in block scope and functional scope

console.log(accountId);
console.table([accountId,accountEmail, accountPassword, accountCity,accountState]);