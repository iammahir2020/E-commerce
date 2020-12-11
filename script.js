
let products=[];

if(window.localStorage.getItem('products')){
    products = JSON.parse(window.localStorage.getItem('products'));
}

if(products.length>0){
    for(let i=0; i<products.length; i++){
        // let item = $('<li>').text(products[i].name +" "+ products[i].description +" "+ products[i].photo +" "+ products[i].price)
        // $('#list').append(item);
        let item_photo = $('<img>').attr("src",products[i].photo);
        let item_name = $('<p>').text("Name: "+products[i].name);
        let item_description = $('<p>').text(" Description: "+products[i].description);
        
        item_photo.addClass("bla")
       // $('#list').append(item);

       $('#image_holder').append(item_photo)
       $('#image_holder').append(item_name)
       $('#image_holder').append(item_description)
       //item_photo.appendto($('#image_holder'))
       //$('#image_holder').append('<p>'+"Name: "+item_name+'</p>')
       

    }
}


$('#save_button').click(function(event){
    let name = $('#p_name').val();
    let description = $('#p_description').val();
    let photo = $('#p_photo').val();
    let price = Number($('#p_price').val());
    // console.log(name +" "+ description +" "+ photo +" "+ price);

    if(name && description && photo && price){
        //let item = $('<li>').text(name +" "+ description +" "+ photo +" "+ price)
        let item_photo = $('<img>').attr("src",photo);
        let item_name = $('<p>').text(name);
        let item_description = $('<p>').text(description);
        
        item_photo.addClass("bla")
       // $('#list').append(item);

       $('#image_holder').append(item_photo)
       $('#image_holder').append(item_name)
       $('#image_holder').append(item_description)
        
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
