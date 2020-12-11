
let products=[];

if(window.localStorage.getItem('products')){
    products = JSON.parse(window.localStorage.getItem('products'));
}

if(products.length>0){
    for(let i=0; i<products.length; i++){
        
        
        let item_photo = $('<img>').attr("src",products[i].photo);
        let item_name = $('<p>').text("Name: "+products[i].name);
        let item_description = $('<p>').text(" Description: "+products[i].description);
        let item_price = $('<p>').text(" Price: "+products[i].price);
        
        item_photo.addClass("bla")
        let add_to_cart = $('<button>').text("Add to cart")
        add_to_cart.addClass("btn")
        let item_holder = $('<div>')
        item_holder.append(item_photo, item_name, item_description, item_price,add_to_cart)
        
        
        $('#image_holder').append(item_holder) 
   }
}


$('#save_button').click(function(event){
    let name = $('#p_name').val();
    let description = $('#p_description').val();
    let photo = $('#p_photo').val();
    let price = Number($('#p_price').val());
    

    if(name && description && photo && price){
        
        let item_photo = $('<img>').attr("src",photo);
        let item_name = $('<p>').text("Name: "+name);
        let item_description = $('<p>').text(" Description: "+description);
        let item_price = $('<p>').text(" Price: "+price);
        
        item_photo.addClass("bla")
       
        let add_to_cart = $('<button>').text("Add to cart")
        add_to_cart.addClass("btn")
       let item_holder = $('<div>')
       item_holder.append(item_photo, item_name, item_description,item_price,add_to_cart)
       
       $('#image_holder').append(item_holder) 
        
        
       
       let newProduct = {name: name, description: description, photo: photo, price: price};

        products.push(newProduct);
        window.localStorage.setItem('products', JSON.stringify(products));
        reset_input_fields();
        //window.alert("Product added to store");
        

    }else{
        window.alert("All product information fields must be filled");
    }
})

const reset_input_fields=()=>{
    $('#p_name').val("");
    $('#p_description').val("");
    $('#p_photo').val("");
    $('#p_price').val("");
    
} 
