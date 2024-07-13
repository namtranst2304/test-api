const client = require('./connection.js') 
const express = require('express');


const app = express();

app.listen(3300, ()=>{
    console.log("Server is now listening at port at 3300");
})

client.connect();


app.get('/users', (req, res)=>{
    client.query(`Select * from users`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/users/:id', (req, res)=>{
    client.query(`Select * from users where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post('/users', (req, res)=> {
    const user = req.body;
    console.log(user)
    let insertQuery = `insert into users(id, firstname, lastname, location) 
                       values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.put('/users/:id', (req, res)=> {
    let user = req.body;
    let updateQuery = `update users
                       set firstname = '${user.firstname}',
                       lastname = '${user.lastname}',
                       location = '${user.location}'
                       where id = ${user.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.delete('/users/:id', (req, res)=> {
    let insertQuery = `delete from users where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

///

app.get('/categories', (req, res)=>{
    client.query(`Select * from "Category"`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/categories/:id', (req, res)=>{
    client.query(`Select * from "Category" where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post('/categories', (req, res)=> {
    const categories = req.body;
    console.log(categories)
    let insertQuery = `insert into "Category"(id, name, "desc") 
                       values(${categories.id}, '${categories.name}', '${categories.desc}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.put('/categories/:id', (req, res)=> {
    let categories = req.body;
    let updateQuery = `update "Category"
                       set name = '${categories.name}',
                       "desc" = '${categories.desc}'
                       where id = ${categories.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.delete('/categories/:id', (req, res)=> {
    let insertQuery = `delete from "Category" where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


///
app.get('/products', (req, res)=>{
    client.query(`Select * from "Product"`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/products/:id', (req, res)=>{
    client.query(`Select * from "Product" where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post('/products', (req, res)=> {
    const products = req.body;
    console.log(products)
    let insertQuery = `insert into "Product"(id, name, "desc", "categoryId") 
                       values(${products.id}, '${products.name}', '${products.desc}', '${products.categoryId}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.put('/products/:id', (req, res)=> {
    let products = req.body;
    let updateQuery = `update "Product"
                       set name = '${Product.name}',
                       "desc" = '${Product.desc}',
                       "categoryId" = '${Product.categoryId}'
                       where id = ${Product.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.delete('/products/:id', (req, res)=> {
    let insertQuery = `delete from "Product" where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


///
app.get('/orders', (req, res)=>{
    client.query(`Select * from "Order"`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/orders/:id', (req, res)=>{
    client.query(`Select * from "Order" where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post('/orders', (req, res)=> {
    const orders = req.body;
    console.log(orders)
    let insertQuery = `insert into "Order"("id", "desc", "user-Id", "product-Id", "Qty", "Price", "Status", "deliverydate")
                       values(${Order.id}, '${Order.desc}', '${Order.user-Id}', '${Order.product-Id}', '${Order.Qty}', '${Order.Price}', '${Order.Status}', '${Order.deliverydate}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.put('/orders/:id', (req, res)=> {
    let orders = req.body;
    let updateQuery = `update "Order"
                       set "desc" = '${Order.desc}',
                       "user-Id" = '${Order.user-Id}',
                       "product-Id" = '${Order.roduct-Id}',
                       "Qty" = '${Order.Qty}',
                       "Price" = '${Order.Price}',
                       "Status" = '${Order.Status}',
                       "deliverydate" = '${Order.deliverydate}'
                       where id = ${Order.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.delete('/orders/:id', (req, res)=> {
    let insertQuery = `delete from "Order" where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})