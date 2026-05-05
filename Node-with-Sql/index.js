const {faker} = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    database : "admin",
    password : "admin", 
});

try{
connection.query("SHOW TABLES", (err, result) =>{
    if(err) throw err;
    console.log(result);
    
})
} catch (err){
    console.log(err);
    
}


let  getRandomUser = () =>  {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}


console.log(getRandomUser());
