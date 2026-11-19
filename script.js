const products =[
    {
        name:"Apple Cider",
        image:"images/apple-cider.jpg",
    },
    {
        name:"Grapes Cider",
        image:"images/grapes-cider.jpg",
    },
    {
        name:"Jaman cider",
        image:"images/jaman-cider.jpg"
    }
];
const productList=
document.getElementById("product-list");
products.forEach(function(product,index) {
    console.log(index, product.name);
    productList.innerHTML += `
    <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <button>Add to Cart</button>
            </div>
    `;
});
let cartCounter=0;
let cart = [];
const cartDisplay= document.getElementById("cart-count");
const buttons=
document.querySelectorAll(".product-card button");
buttons.forEach(function(button){
    button.addEventListener("click",function()
    {
        const index=button.CDATA_SECTION_NODE.index;
        const selectedProduct =products[index];
        cart.push(selectedProduct.name);
        console.log(cart);
        cartCounter++;
        cartDisplay.textContent=cartCounter;
        alert("Product Added Successfully!");
    });
});
