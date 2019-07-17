
   let shoppingCart = [];
   let productDivs = [];
   let emailTx = document.getElementById('email');
   let passTx = document.getElementById('password');
   let productDiv = document.getElementById('stuff');
   let mainTx = document.getElementById('mainPage');


    function storeProducts(){
        fetch('https://acastore.herokuapp.com/products')
        .then(function(response){
            return response.json();
        })
        .then(function(serverProducts){
            productDivs = serverProducts;
            Products(productDivs);
        });
    }

    function signedUp(){
        let email = emailTx.value;
        let password = passTx.value;
        mainTx.style.display = "block";
        signInPage.style.display = "none";
    }
   function Products(products){
    for(let i=0; i < products.length; i++){
        let product = products[i]; 
    productDivs += 
    `<div>
    <img src="${product.imgUrl}">
    <h3>${product.name}</h3>
    <div>${product.rating}&#9733 rating!</div>
    <div>Description: ${product.description}</dov>
    <div>There are ${product.reviews.length} reviews.</div>
    <p>Price: ${product.price}</p>
    <p><button id="infoButton" onclick='showAll(${product.id})'>More info</button></p>
    <div id="review${product.id}"></div>
    <p><button onclick='addCart(${product.id})'>Add to cart</button></p>
    </div>`
    }
    document.getElementById("stuff").innerHTML = productDivs;
}

window.onload = ()=>{
Products(products);
}
let typeEmail = document.getElementById("email");
let typePass = document.getElementById("password");

function signedUp(){
    let email = typeEmail.value;
    let password = typePass.value;
    mainTx.style.display = "block";
    signInPage.style.display = "none";
}

    function showAll(reviewId){
        let all = "";
        let review = products.filter(p=>p.id === reviewId)
        Products(review);
        let productReview =document.getElementById("review${product.id}");
        review.reviews.map(review =>
            all+= `<div id="review"><div>${review.rating}</div><div>${review.description}</div></div>`)
            productReview.innerHTML = all;
}
function search(){
    let searchWord = document.getElementById("searchBar").value;
    let filteredProducts = products.filter(p=>p.name === searchWord)
    ///p.name.indexOf or includes();
    Products(filteredProducts);
}

//shoping cart
function addCart(id){
    let addItem = products.filter(product => product.id ===id)
    shoppingCart.push(addItem);
}
function myCart(){
    Products(shoppingCart);
    let buy = document.createElement('div');
    buy.innerHTML = 'button onclick="buyNow()">Buy Stuff!</button>';
    productDiv.appendChild(buy);
}









    
    