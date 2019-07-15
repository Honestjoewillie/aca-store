
   let shoppingCart = [];

   function Products(products){
    let allProducts = document.getElementById('stuff');
    let productDivs = "";
    for(let i=0; i < products.length; i++){
        let product = products[i]; 
    productDivs += 
    `<div style = "display:fex;" id="prodcuts">
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
// function ProductDetail(id){
//     let moreInfo = products.filter(p=>p.id ===id)
//     Products(moreInfo);
    //hide the button
    //document.getElementById('infoButton').style.display = "none";
    //show all reviews and rating per review
    //let fullReview = products.filter(p=>p.review ===review)
    function showAll(reviewId){
        let all = "";
        let review = products.filter(p=>p.id === reviewId)
        Products(review);
        let productReview =document.getElementById("review${product.id}");
        review[0].reviews.map(review =>
            all+= `<div id="infoFull"><div>${review.rating}</div><div>${review.description}</div></div>`)
            productReview.innerHTML = all;
}
function search(){
    let searchWord = document.getElementById("searchBar").value;
    let filteredProducts = products.filter(p=>p.name === searchWord)
    ///p.name.indexOf or includes();
    Products(filteredProducts);
}
//I want this to show ALL reviews on click
function review(review){
    let read = products.filter(p=>p.reviews.description === review)
    Products(read);
}
//shoping cart
function addCart(id){
    let addItem = products.filter(product => product.id ===id)
    shoppingCart.push(addItem);
    console.log(shoppingCart);
}









    
    