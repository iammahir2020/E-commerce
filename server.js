var http = require('http')
var express = require('express')
var bodyParser = require('body-parser')


var app = express()
var server = http.Server(app)
var Product = require('./product.model')

var mongoose = require('mongoose')
mongoose.Promise = global.Promise
var dbURL = 'mongodb://localhost:27017/Products_DataBase'
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', function (err) {
 console.log(err)
})




//configuring express using bodyparser so 
//that we can see the data passed in the post ajax call
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html')
})

app.get('/products', function(request, response){
    response.sendFile(__dirname + '/products.html')
})

app.post('/product/new', function(request, response){
    console.log('Add Product Post Request Made')
    //console.log(request.body)
    //response.json(request.body)
    var newProduct = new Product(request.body)
    newProduct.save(function (err, data) {
   if (err){
    return response.status(400).json({
        error: 'Title is missing'
      })
   }else{
    // return response.status(200).json({
    //     message: 'product created successfully'
    //   })
      return response.json(request.body)
   }
     
   
 })

    
})

app.get('/product/all', function(request, response){
    console.log('All Products Post Request Made')
    //console.log(request.body)
    //response.json(request.body)
    Product.find({}, function (err, data) {
        
        return response.json(data)
        
      })

    
})

/////////////////////////

app.get('/product/delete', function(request, response){
    console.log('DELETE All Post Request Made')

    Product.remove({}, function (err) { 
        return response.json('All Products deleted')
    } );


})





app.use(express.static('public'))

server.listen(process.env.PORT || 3000, 
process.env.IP || 'localhost', function(){
  				console.log('Server is walking!');
})
module.exports = {app, server}
