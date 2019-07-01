
    function Products(products){
    let productDivs = [];
    for(let i=0; i < products.length; i++){
        let btn = document.createElement("button");
        let product = products[i]; 
        productDivs += `<div>${product.name}</div>`;
        btn.appendChild(product);
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




    
    