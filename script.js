let products=[];
let cart=[];
var btnId = 1;
var newbtnId = 1;
var removebtnId=0;
var newremovebtnId=0;

//show total price
const show_total_price=()=>{
    $('#show_total_price').empty()
    let total=0
    
    for(let i=0; i<cart.length; i++){
        
        let z = Number(cart[i].p_price);
        let quantity = Number($('#quantity'+i).val())
        

        // console.log("Quantity: "+quantity)

        let per_item_total = z*quantity
        total += Number(per_item_total)
        
    }
    // console.log("total = "+total)
let total_price = $('<h2>').text("Total: $"+total)
$('#show_total_price').append(total_price)
    
}



//accessing and showing cart with the selected products
if(window.localStorage.getItem('cart')){
    cart = JSON.parse(window.localStorage.getItem('cart')); 
}

if(cart.length>0){
    $('#message2').css("display","none")
    $('.cart').show()
    
    for(let i=0; i<cart.length; i++){
        let name = cart[i].p_name;
        let price = cart[i].p_price;
        let description = cart[i].p_description;
        let photo = cart[i].p_photo;
        
        let cart_item_photo =$('<div>').append( $('<img>').attr("src",photo).css("height","100px")).addClass("cart_items_standard_width").addClass("cart_item_photo")
        
        let cart_item_name = $('<p>').text(name).addClass("cart_items_standard_width")
        let cart_item_price = $('<p>').text("$"+price).addClass("cart_items_standard_width")
        
        let remove_from_cart = $('<button>').text("Remove").addClass("cart_items_standard_width")

        
        let cart_item_quantity = $('<input>').attr("type","Number").attr("min","1").val(1)
        cart_item_quantity.addClass("cart_item_quantity")
        cart_item_quantity.attr('id','quantity'+newremovebtnId)
        

        remove_from_cart.attr('onclick', 'removeFromCartClicked(event)')
        remove_from_cart.attr('id', 'btn'+newremovebtnId);
        newremovebtnId++;

        let cart_item_holder = $('<div>')
        cart_item_holder.addClass("cart_items_design")
        
        
        cart_item_holder.append(cart_item_photo,cart_item_name,cart_item_price,cart_item_quantity,remove_from_cart)

        $('#cart_information_holder').append(cart_item_holder)
        
        
        
        
    }
    
    //show_total_price();
    
    
}

//displaying the previously added products from local storage
if(window.localStorage.getItem('products')){
    
    products = JSON.parse(window.localStorage.getItem('products'));
}

if(products.length>0){
    $('#message1').css("display","none")
    for(let i=0; i<products.length; i++){
        
        
        let item_photo = $('<img>').attr("src",products[i].photo);
        let item_name = $('<p>').text("Name: "+products[i].name);
        let item_description = $('<p>').text("Description: "+products[i].description);
        let item_price = $('<p>').text("Price: $"+products[i].price);
        let add_to_cart = $('<button>').text("Add to cart")
        let remove_product = $('<button>').text("Remove Product")
        
        //
        let details = $('<button>').text("Details")
        details.addClass("btn")
        details.attr('onclick', 'detailsBtnClicked(event)')
        details.attr('id', 'details'+newbtnId)
        //

        item_photo.addClass("shop-item-image")
        item_name.addClass("shop-item-name")
        item_description.addClass("shop-item-description")
        item_price.addClass("shop-item-price")
        add_to_cart.addClass("add-to-cart-button")
        remove_product.addClass("remove-from-store-button")

        add_to_cart.attr('onclick', 'addToCartClicked(event)')
        remove_product.attr('onclick','removeProductFromStore(event)')



       


        add_to_cart.attr('id', 'btn'+newbtnId);
        remove_product.attr('id', 'removeBtn'+newbtnId);
        
        item_price.attr('id', 'price'+newbtnId);
        item_photo.attr('id', 'photo'+newbtnId);
        item_name.attr('id', 'name'+newbtnId);
        item_description.attr('id', 'description'+newbtnId);

        newbtnId++;
        
        
        let item_holder = $('<div>')
        
        // item_holder.append(item_photo, item_name,item_description,item_price,add_to_cart,remove_product).css("width","330px")
        item_holder.append(item_photo, item_name,item_description,item_price,add_to_cart,details,remove_product).css("width","330px")
        
        
        $('#shop_item_holder').append(item_holder) 
   }
}

//adding new product to the store and local storage
$('#save_button').click(function(event){
    $('#message').css("display","none")
    let name = $('#p_name').val();
    let description = $('#p_description').val();
    let photo = $('#p_photo').val();
    let price = Number($('#p_price').val());
    

    if(name && description && photo && price){
        
        let item_photo = $('<img>').attr("src",photo);
        let item_name = $('<p>').text("Name: "+name);
        let item_description = $('<p>').text("Description: "+description);
        let item_price = $('<p>').text("Price: $"+price);
        let add_to_cart = $('<button>').text("Add to cart")
        let remove_product = $('<button>').text("Remove Product")
        
        //
        let details = $('<button>').text("Details")
        details.addClass("btn")
        details.attr('onclick', 'detailsBtnClicked(event)')
        details.attr('id', 'details'+btnId)
        //



        item_photo.addClass("shop-item-image")
        item_name.addClass("shop-item-name")
        item_description.addClass("shop-item-description")
        item_price.addClass("shop-item-price")
        add_to_cart.addClass("add-to-cart-button")
        remove_product.addClass("remove-from-store-button")
        

        add_to_cart.attr('onclick', 'addToCartClicked(event)')
        remove_product.attr('onclick','removeProductFromStore(event)')

        add_to_cart.attr('id', 'btn'+btnId); //id="btn3"
        remove_product.attr('id', 'removeBtn'+btnId); //id="removeBtn3"

        item_price.attr('id', 'price'+btnId); //id="price2"
        item_photo.attr('id', 'photo'+btnId); 
        item_name.attr('id', 'name'+btnId);
        item_description.attr('id', 'description'+btnId);

        btnId++;

        

        
        

        let item_holder = $('<div>')
        //item_holder.append(item_photo, item_name,item_description,item_price,add_to_cart)
        //item_holder.append(item_photo, item_name,item_description,item_price,add_to_cart,remove_product).css("width","110px")
        item_holder.append(item_photo, item_name,item_description,item_price,add_to_cart,details,remove_product).css("width","330px")
     
        $('#shop_item_holder').append(item_holder)  //adding to the store(display it in the website)
        
        
       
       let newProduct = {name: name, description: description, photo: photo, price: price};

        products.push(newProduct);
        window.localStorage.setItem('products', JSON.stringify(products)); //appending the newly added product to the 'products' list in local storage
        
        //window.alert("Product added to store");
        reset_input_fields(); 
        window.location.href = "products.html"; 

    }else{
        window.alert("All product information fields must be filled");
    }
})


//showing details of each product
const detailsBtnClicked=(event)=>{
        var buttonId = event.target.id; 
        var res = buttonId.split("details", 2); 
        var serial = res[1];

        console.log(serial)
        
        let name = $('#name'+serial).text().split("Name: ",2) 
        let price = $('#price'+serial).text().split("Price: $",2)
        let description = $('#description'+serial).text().split("Description: ",2)
        let photo = $('#photo'+serial).attr("src")

        
        
        let cart_item_photo =$('<div>').append( $('<img>').attr("src",photo).addClass("single_product_img"))
        let cart_item_description = $('<p>').text(description[1]).css('color','gray')
        let cart_item_name = $('<h1>').text(name[1])
        let cart_item_price = $('<h2>').text("$"+price[1])
        let backBtn = $('<a>').text("Return to All Products Page").attr('href','products.html').addClass("backBtn")

        let item_description = $('<div>').append(cart_item_name,cart_item_description,cart_item_price,backBtn).css('padding','50px')    

        let cart_item_holder = $('<div>')
        
        cart_item_holder.append(cart_item_photo,item_description)
        
        $('#single_product_View').append(cart_item_holder)
        window.location.href = "products.html#single_product"; 
}

//resetting all input fields while adding new products
const reset_input_fields=()=>{
    $('#p_name').val("");
    $('#p_description').val("");
    $('#p_photo').val("");
    $('#p_price').val("");
    
} 

//showing cart when cart option is clicked
const showCart=()=>{
    $('#message1').hide()
    $('.cart').show()
    window.location.href = "#SHOW_CART"; 
}

//adding products to the cart
const addToCartClicked=(event)=>{
    $('.cart').show()
    $('#message1').hide()
    $('#show_total_price').empty()
    $('#message1').css("display","none")

        var buttonId = event.target.id; 
        var res = buttonId.split("btn", 2); 
        var serial = res[1];
        
        let name = $('#name'+serial).text().split("Name: ",2) 
        console.log("name: "+name[1])
    let signal =false
    for(let i=0; i<cart.length; i++){
        if(cart[i].p_name==name[1]){
            signal=true;
            
            break;
        }
    }
    if(signal==false){
        
        
         $('#show_total_price').empty()
        
        let price = $('#price'+serial).text().split("Price: $",2)
        let description = $('#description'+serial).text().split("Description: ",2)
        let photo = $('#photo'+serial).attr("src")

        let cart_item_photo =$('<div>').append( $('<img>').attr("src",photo).css("height","100px")).addClass("cart_items_standard_width").addClass("cart_item_photo")
        
        let cart_item_name = $('<p>').text(name[1]).addClass("cart_items_standard_width")
        let cart_item_price = $('<p>').text("$"+price[1]).addClass("cart_items_standard_width")
        
        //
        //
        let cart_item_quantity = $('<input>').attr("type","Number").attr("min","1").val(1)
        cart_item_quantity.addClass("cart_item_quantity")
        cart_item_quantity.attr('id','quantity'+removebtnId)
        //
        //

        let remove_from_cart = $('<button>').text("Remove").addClass("cart_items_standard_width")
        remove_from_cart.attr('onclick', 'removeFromCartClicked(event)')
        remove_from_cart.attr('id', 'btn'+removebtnId);

        removebtnId++;
        let cart_item_holder = $('<div>')
        cart_item_holder.addClass("cart_items_design")
        
        //cart_item_holder.append(cart_item_photo,cart_item_name,cart_item_price,remove_from_cart)
        cart_item_holder.append(cart_item_photo,cart_item_name,cart_item_price,cart_item_quantity,remove_from_cart)


        $('#cart_information_holder').append(cart_item_holder)
        

        
        

        
        

        let newCart = {p_name: name[1], p_price: price[1], p_description: description[1], p_photo: photo};
        cart.push(newCart);
        window.localStorage.setItem('cart', JSON.stringify(cart)); //saving the cartitems to the localstorage
        //show_total_price();
    
    }else{
        window.alert("Product already added to cart")
    }
    

        
}

//clearing all the cart items from the cart
const clearCart=()=>{
    
    if(window.localStorage.getItem('cart')){
       window.localStorage.removeItem('cart');
       //alert("Your cart has been cleared")
        window.location.href = "products.html"; 
    }
    
   
}
const continueShopping=()=>{
    $('.cart').hide()
}


const checkout=()=>{
     clearCart()
     window.alert("Thank you for Shoping from  SHADAMATA SHOP!")
     window.location.href = "index.html"; 
    

        
}



const removeFromCartClicked=(event)=>{
        var buttonId = event.target.id;
        var res = buttonId.split("btn", 3);
        var serial = Number(res[1]);
        //console.log(serial)
        cart.splice(serial,1)
        window.localStorage.setItem('cart', JSON.stringify(cart));
        
        window.location.href = "products.html";
}

const removeProductFromStore=(event)=>{
        var buttonId = event.target.id;
        var res = buttonId.split("removeBtn", 2);
        var serial = Number(res[1]);
        serial--
        // console.log("res[1]: "+res[1])
        // console.log("serial: "+serial)
        products.splice(serial,1)
        window.localStorage.setItem('products', JSON.stringify(products));
        
        window.location.href = "products.html";
}

const add_Product=()=>{
    $('.add-product').show()
}