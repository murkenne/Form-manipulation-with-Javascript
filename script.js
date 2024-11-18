// **Task 1 Create array with products in it
let products = [
  {name: "Laptop", price: 999.99, description: "Powerful on the go"},
  {name: "Smartphone", price: 699.99, description: "Stay connected wherever you are"},
{name: "Headphones", price: 149.99, description: "Immersive audio experience"}
];

// **Task 2 Write a function to display the product information on the webpage dynamically
function displayProducts() {
  // Get the element
  let productList = document.getElementById("product-list")
  // Loop through each product
  products.forEach(product => {
    // Create a div for the product
    let productDiv = document.createElement("div");
    productDiv.className = "product";
// Add inline style to the product div
    productDiv.style.border = "1px solid #000";
    productDiv.style.borderRadius = "5px";
    productDiv.style.display = "flex";
    productDiv.style.flexDirection = "column"; 
    productDiv.style.alignItems = "center";
    productDiv.style.boxShadow = "2px 2px 6px rgba(0, 0, 0, 0.1)";
    // Add style to product-list
    productList.style.backgeoundColor ="blue";
    productList.style.border = "1px solid #000";
    productList.style.borderRadius = "8px"; 
    productList.style.overflow = "hidden"; 
    productList.style.width = "200px"; 
    productList.style.textAlign = "center"; 
    productList.style.transition = "transform 0.3, box-shadow 0.3s"; 
    productList.style.padding = "10px";   
    // Add product name
    let productName = document.createElement("h2");
    productName.textContent = product.name;
    // Add product price
    let productPrice = document.createElement("p");
    productPrice.textContent = `Product price: $${product.price.toFixed(2)}`;

    productPrice.style.backgroundColor = "pink";
    productPrice.style.borderRadius = "5px";
    // Add product description
    let productDescription = document.createElement("p");
    productDescription.textContent = product.description;
    productDescription.style.color = "green";
    // Append the product div to the container
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productDescription);
    // Append the product div the container
    productList.appendChild(productDiv);
    
  });
}

/* Call the function to display products on the webpage
displayProducts();*/

// **Task 3 Add event listner to trigger when the page loads
window.addEventListener("DOMContentLoaded", displayProducts);