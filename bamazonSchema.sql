 DROP DATABASE IF EXISTS bamazon_db;
 CREATE DATABASE bamazon_db;
 
USE bamazon_db;

CREATE TABLE products(
     item_id INT NOT NULL,
     product_name varchar(100) NULL,
     department_name varchar(100) NULL,
     price decimal(10, 2) NULL,
     stock_quantity INT NULL,
     primary key (item_id) 
);

alter table products add index department_name(department_name);

select * from products;

