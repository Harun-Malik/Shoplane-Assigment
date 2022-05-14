let id = window.location.search.split("=")[1];
if(localStorage.getItem("count")===null){
    localStorage.setItem("count",0)
}else{
    let cartCount = localStorage.getItem("count");
    $("#cart-number").html(cartCount);
}
if(localStorage.getItem("items")===null){
  let items = [];
  localStorage.setItem("items",JSON.stringify(items))
}
const URL = `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`;

$.get(URL,function(productData){

var product = document.getElementById("product");
var leftSection = document.getElementById("left-section");
var rightSection = document.getElementById("right-section");
var image = document.createElement("img");
image.src = productData.preview;
leftSection.appendChild(image);
image.className = "left-image";

var h2 = document.createElement("h2");
h2.innerText = productData.name;
rightSection.appendChild(h2);
var h3_1 = document.createElement("h3");
h3_1.innerText = productData.brand;
rightSection.appendChild(h3_1);
var h3_2 = document.createElement("h3");
h3_2.innerText = "Price: Rs ";
var Span = document.createElement("span");
Span.className="item-price";
Span.innerText=productData.price;
h3_2.appendChild(Span);
rightSection.appendChild(h3_2);
var h3_3 = document.createElement("h3");
h3_3.innerText = "Description";
rightSection.appendChild(h3_3);
var para = document.createElement("p");
para.className="discription";
para.innerText = productData.description;
rightSection.appendChild(para);
var h3_4 = document.createElement("h3");
h3_4.innerText = "Product Preview";
rightSection.appendChild(h3_4);
var mainBox = document.createElement("div");
rightSection.appendChild(mainBox);

for(var i=0;i<productData.photos.length;i++){
var image1 = document.createElement("img");
image1.id="img"+i;
image1.src = productData.photos[i];
image1.className = "small-image"
mainBox.appendChild(image1);
}
var btn = document.createElement("button");
btn.innerText = "Add to Cart";
rightSection.appendChild(btn);
btn.className = "btn";

btn.onclick = ()=>{

       let cartCount = localStorage.getItem("count");
       cartCount++;
       localStorage.setItem("count", cartCount);
       $("#cart-number").html(cartCount);
        let cartItem = {
            id:id,
            name:productData.name,
            preview:productData.preview,
            price:productData.price,
            qnty:1,

        }
        let items = JSON.parse(localStorage.getItem("items"));
        if(items.length===0){
          items.push(cartItem);
        }else{
          let flag = true;
         for(let i=0;i<items.length;i++){
           if(items[i].id===id){
             items[i].qnty+=1;
             flag = true;
           }
           else{
             flag=false;
           }
         }
         if(flag===false){
           items.push(cartItem);
         }
        }
        localStorage.setItem("items",JSON.stringify(items));
}

var smallImg = document.getElementsByClassName("small-image");
smallImg[0].className+=" border"

for(var i=0;i<smallImg.length;i++){
  
  
  smallImg[i].onclick=function(){
    image.src=this.src;
    var border = document.getElementsByClassName("border");
    border[0].classList.remove("border");
    this.className+=" border";
  
  }
 
}
})


