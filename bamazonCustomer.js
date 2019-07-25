var inquirer = ("inquirer");
var mysql = require("mysql");

var dataBaceCon = mysql.createConnection({
    hose: "localhost",
    port: 3306,
    user: "root",
    password: "zeru",
    database: "bamazon_db",
});

dataBaseCon.connection(function(err) {
    if (err) throw err;
    console.log("connection as id " + connection.threadId);
    
    afterConnection();
});

//Function to display products table from bamazon database in my sql
function afterConnection() {
    connection.query(
        "SELECT item_id, product_name, department_name, price FROM products",
        function(err, result) {
            if (err) throw err;
            console.log(result);
            connection.result;
    selectPurchasw();
        });
};

