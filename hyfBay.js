console.log("Script loaded");

const products = getAvailableProducts();

const productListEl = document.getElementById("product-list");
const resultsCountEl = document.getElementById("results-count");
const searchInputEl = document.getElementById("search-input");
const maxPriceEl = document.getElementById("max-price");
const sortSelectEl = document.getElementById("sort-select");

function renderProducts(productsToRender) {
  productListEl.innerHTML = "";
  resultsCountEl.textContent = `Showing ${productsToRender.length} product(s)`;

  if (productsToRender.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "empty-message";
    emptyItem.textContent = "No products match your search criteria.";
    productListEl.appendChild(emptyItem);
    return;
  }

  productsToRender.forEach((product) => {
    const li = document.createElement("li");
    li.className = "product-card";

    const titleEl = document.createElement("h2");
    titleEl.className = "product-title";
    titleEl.textContent = product.name;

    const metaDiv = document.createElement("div");
    metaDiv.className = "product-meta";

    const priceSpan = document.createElement("span");
    priceSpan.className = "product-price";
    priceSpan.textContent = `${product.price} DKK`;

    const ratingSpan = document.createElement("span");
    ratingSpan.className = "product-rating";
    ratingSpan.textContent = `★ ${product.rating} / 10`;

    metaDiv.appendChild(priceSpan);
    metaDiv.appendChild(ratingSpan);

    li.appendChild(titleEl);
    li.appendChild(metaDiv);
    productListEl.appendChild(li);
  });
}

function updateDisplayedProducts() {
  const searchTerm = searchInputEl.value.trim().toLowerCase();
  const maxPriceValue = maxPriceEl.value;
  const sortBy = sortSelectEl.value;

  // 1. Filter by search term and max price
  let filteredProducts = products.filter((product) => {
    const matchesName = product.name.toLowerCase().includes(searchTerm);
    const matchesPrice =
      maxPriceValue === "" || product.price <= Number(maxPriceValue);

    return matchesName && matchesPrice;
  });

  // 2. Sort filtered results
  const sortedProducts = [...filteredProducts];

  if (sortBy === "price-asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating-desc") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  // 3. Render updated list
  renderProducts(sortedProducts);
}

// Event listeners
searchInputEl.addEventListener("input", updateDisplayedProducts);
maxPriceEl.addEventListener("input", updateDisplayedProducts);
sortSelectEl.addEventListener("change", updateDisplayedProducts);

// Initial render
renderProducts(products);
