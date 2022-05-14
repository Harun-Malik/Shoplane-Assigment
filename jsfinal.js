const URL = "https://5d76bf96515d1a0014085cf9.mockapi.io/product";
if(localStorage.getItem("count")===null){
    localStorage.setItem("count",0)
}else{
    let cartCount = localStorage.getItem("count");
    $("#cart-number").html(cartCount);
}

$.get(URL,function(productList){
    var cloth = document.getElementById("cloth-section");
var Accessories = document.getElementById("Accessories-section");
function cardCreation(i){
    var card = document.createElement("a");
    card.href="product.html?p="+(i+1);
    var box1 =  document.createElement("div");
    var box2 =  document.createElement("div");
    var image = document.createElement("img");
    image.src = productList[i].preview;
    box1.appendChild(image);
    box1.className="image"
    card.appendChild(box1);
    card.className = "card";
    var h2 = document.createElement("h2")
    h2.className="product-name";
    h2.innerText= productList[i].name;
    var h3 = document.createElement("h3")
    h3.innerText= productList[i].brand;
    var h4 = document.createElement("h4")
    h4.innerText= "Rs "+productList[i].price;
    box2.appendChild(h2);
    box2.appendChild(h3);
    box2.appendChild(h4);
    box2.className="box2";
    card.appendChild(box2);
    return card;
}
for(i=0;i<productList.length;i++){
    if(productList[i].isAccessory===false){
        cloth.appendChild(cardCreation(i));
    }else{
        Accessories.appendChild(cardCreation(i));
    }
   
}
})

// let cart = document.querySelector(".cart-number");
// const btn = document.getElementById("btn");

