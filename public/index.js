
   let shoppingCart = []:

   function Products(products){
    let productDivs = [];
    for(let i=0; i < products.length; i++){
        let btn = document.createElement("button");
        let product = products[i]; 
        productDivs += `<div>${product.name}<button onclick="ProductDetail(${product.id})">View</button></div>`
    }
    document.getElementById("stuff").innerHTML = productDivs;
}

window.onload = ()=>{
Products(products);
}

function ProductDetail(id){
    let prod = prodcuts.find((p) =>{
        return p.id ===id;
    });


    document.getElementById("productDetail").innerHTML = `
    <div>${prod.name}</div>
    <div>${prod.description}</div>
    `;
    //this gets rid of the other items when you click on more info for one.
    document.getElementById("stuff").innerHTML = ""; 
}
//sessionStorage and localStorage <---use for shopping cart code!

function search(){
    let searchWord = document.getElementById("searchBar").value;
    let filteredProducts = products.filter(p=>p.name === searchWord)
    ///p.name.indexOf or includes();
    Products(filteredProducts);
}




    
    