
    function Products(products){
    let productDivs = "";
    for(let i=0; i < products.length; i++){
        let product = products[i]; 
        productDivs += `<div>${product.name}</div>`
    }
    document.getElementById("stuff").innerHTML = productDivs;
}
Products(products);

function search(){
    let searchWord = document.getElementById("searchBar").value;
    let filteredProducts = products.filter(p=>p.name === searchWord)
    ///p.name.indexOf or includes();
    Products(filteredProducts);
}




    
    