
    let productDivs = "";
    for(let i=0; i < products.length; i++){
        let product = products[i]; 
        productDivs += `<div>${product.name}</div>`
    }
    document.getElementById("stuff").innerHTML = productDivs;

    


    
    