if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    

    var addToCartButtons = document.getElementsByClassName('add-to-cart-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    
}



let products=[];

if(window.localStorage.getItem('products')){
    products = JSON.parse(window.localStorage.getItem('products'));
}

if(products.length>0){
    for(let i=0; i<products.length; i++){
        
        
        let item_photo = $('<img>').attr("src",products[i].photo);
        let item_name = $('<p>').text("Name: "+products[i].name);
        let item_description = $('<p>').text("Description: "+products[i].description);
        let item_price = $('<p>').text("Price: "+products[i].price);
        let add_to_cart = $('<button>').text("Add to cart")
        
        let remove_product = $('<button>').text("Remove Product")
        

        item_photo.addClass("shop-item-image")
        item_name.addClass("shop-item-name")
        item_description.addClass("shop-item-description")
        item_price.addClass("shop-item-price")
        add_to_cart.addClass("add-to-cart-button")
        remove_product.addClass("remove-from-store-button")
        
        
        let item_holder = $('<div>')
        item_holder.append(item_photo, item_name, item_price,add_to_cart,remove_product)
        
        
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
        let item_description = $('<p>').text("Description: "+description);
        let item_price = $('<p>').text("Price: "+price);
        let add_to_cart = $('<button>').text("Add to cart")
        
        let remove_product = $('<button>').text("Remove Product")
        

        item_photo.addClass("shop-item-image")
        item_name.addClass("shop-item-name")
        item_description.addClass("shop-item-description")
        item_price.addClass("shop-item-price")
        add_to_cart.addClass("add-to-cart-button")
        remove_product.addClass("remove-from-store-button")
        

        let item_holder = $('<div>')
        item_holder.append(item_photo, item_name,item_price,add_to_cart,remove_product)
     
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


// function addToCartClicked(event){
//     var button = event.target
//     var shopItem = button.parentElement.parentElement
//     var title = shopItem.getElementsByClassName('shop-item-name')[1].innerText
//     var price = shopItem.getElementsByClassName('shop-item-price')[1].innerText
//     var imageSrc = shopItem.getElementsByClassName('shop-item-image')[1].src
//     alert(title+price+imageSrc)
    
// }

const addToCartClicked=()=>{
    var elem = $(this); //returns inner div
    
    var child = elem.find(".shop-item-price").val(); //returns block class
    alert(elem);
    console.log(child)
}

