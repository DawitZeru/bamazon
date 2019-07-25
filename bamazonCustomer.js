//dependencies
var inquirer = ("inquirer");
var mysql = require("mysql");

//sql db connection
var dataBaceCon = mysql.createConnection({
    hose: "localhost",
    port: 3306,
    user: "root",
    password: "",//your password
    database: "bamazon_db",
});

//initiating connection to mysql db
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
    selectPurchase();
        });
};

//Prompts user with inquirer
function selectPurchase() {
    inquirer
    .prompt ([
        {
         name: "item",
         type: "input",
         message: "How many units of this item would you like?"   
        },
    ])
    .then(function(answer) {
//check if item_id and unit entered ia an integer
    if(!Number.isInteger(parseInt(answer.item)) || !Number.isInteger(parseInt(answer.units))) {
        console.log(answer.item + " and " + answer.units + " are not both numbers please select item and units again!");
        selectPurchase();
    }
    else {
// run quality check function
       function checkQuality() {
           function updateProduction() {
               console.log("Updating product list...\n");
               var query = connection.query("UPDATE products WHERE ?", [{unit_id: answer.item}],
               function(err, result) {
                   console.log(result.unit_id + "the product updated:|\n");
//call subtractQ AFTER the UPDATE completes
                function subtractQ() {

                  };  
                  }
               );
            };
         };
 //run total function
        function total() {

        }
       };        
    });
};