const accountID = 144553
let accountEmail = "yashpathak772@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" 

// accountID = 2 // not allowed

accountEmail = "yewadf@gmail.com"
accountPassword = "212122121"
accountCity = "Banglore"

console.log(accountID);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountID, accountEmail, accountPassword, accountCity])
