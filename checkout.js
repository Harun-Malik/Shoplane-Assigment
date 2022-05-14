
let items = JSON.parse(localStorage.getItem("items"));
console.log(items)
let id = window.location.search.split("=")[1];
if(localStorage.getItem("count")===null){
    localStorage.setItem("count",0)
}else{
    let cartCount = localStorage.getItem("count");
    $("#cart-number").html(cartCount);
}

let checkBox = document.getElementById("check-box");
let amountBox = document.getElementById("amount-box");
let itemBox = document.getElementById("item-box");


let itemQnty = document.getElementById("items-qnty");
let itemsAmount = document.getElementById("items-amount")
let quantity = 0;
let totalAmount = 0;
let itemPrice = 0;

for(let i=0;i<items.length;i++){
quantity = quantity + items[i].qnty;
let card = document.createElement("div");
card.className="card";
let ImageBox = document.createElement("div");
ImageBox.className="image-box";
let itemDetail = document.createElement("div");
itemDetail.className="item-detail";
let image = document.createElement("img");
image.className="item-image";
image.src=items[i].preview;
ImageBox.append(image);
card.append(ImageBox);
itemBox.append(card);

let itemName = document.createElement("h2");
itemName.innerHTML=items[i].name;
itemDetail.append(itemName);
let itemQnty = document.createElement("p");
itemQnty.innerHTML="*"+items[i].qnty;
itemDetail.append(itemQnty);
let itemAmount = document.createElement("h3");
itemAmount.innerHTML="Amount: Rs "+items[i].price*items[i].qnty;   
itemDetail.append(itemAmount);
card.append(itemDetail);
totalAmount = totalAmount + items[i].price*items[i].qnty;
}
itemQnty.innerHTML+=" " + quantity;

itemsAmount.innerHTML+= " " + totalAmount;

var orderBtn = document.getElementById("order-btn");

orderBtn.addEventListener("click",function(){
    window.localStorage.clear();
})



// for(let i=0;i<items.length;i++){
// let leftBox =  document.createElement("div");
// leftBox.className="left-box";
// let rightBox = document.createElement("div");
// rightBox.className="right-box";
// checkBox.append(leftBox);
// checkBox.append(rightBox);
// let card = document.createElement("div");
// card.className="card";
// let itemImage = document.createElement("div")
// itemImage.classList="item-image";
// let itemDetail = document.createElement("div");
// itemDetail.className="item-detail";
// card.append(itemImage);
// card.append(itemDetail);
// leftBox.append(card);
// let image = document.createElement("img");
// image.src = items[i].preview;
// image.className="item-image";
// itemImage.append(image);



// let itemName = document.createElement("h2");
// itemName.innerHTML=items[i].name;
// itemDetail.append(itemName);
// let itemQnty = document.createElement("p");
// itemQnty.innerHTML="*"+items[i].qnty;
// itemDetail.append(itemQnty);
// let itemAmount = document.createElement("h3");
// itemAmount.innerHTML="Amount: Rs "+items[i].price;
// itemDetail.append(itemAmount);

// }


