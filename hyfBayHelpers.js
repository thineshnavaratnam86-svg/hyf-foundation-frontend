window.getAvailableProducts = function () {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomItem(availableProductNames) {
    return availableProductNames[
      getRandomInt(0, availableProductNames.length - 1)
    ];
  }

  function getRandomProductname() {
    const preWords = [
      "Golden",
      "Royal",
      "Festive",
      "Sacred",
      "Saffron",
      "Temple",
      "Spice",
      "Bazaar",
      "Classic",
      "Handmade",
      "Sun-Dried",
      "Monsoon",
      "Heritage",
      "Fresh",
      "Giant",
      "Tiny",
      "Spicy",
      "Chai-Time",
      "Lucky",
      "Street",
      "Vintage",
    ];
    const productNames = [
      "Ceylon Tea",
      "Kottu Spice Mix",
      "Pol Sambol Jar",
      "King Coconut",
      "Batik Sarong",
      "Jaggery Block",
      "Cashew Tin",
      "Handloom Shawl",
      "Masala Chai",
      "Basmati Rice",
      "Ghee Jar",
      "Kurta",
      "Turmeric Powder",
      "Samosa Box",
      "Brass Diya",
      "Mango Pickle",
      "Cardamom Pods",
      "Idli Steamer",
      "Sandalwood Incense",
      "Tamarind Paste",
      "Papadam Pack",
    ];

    const productName = getRandomItem(productNames);
    const shouldHavePreWord = getRandomInt(0, 10) > 6;
    const chosenProductName = shouldHavePreWord
      ? `${preWords[getRandomInt(0, preWords.length - 1)]} ${productName}`
      : productName;

    return chosenProductName;
  }

  const numberOfAvailableProducts = getRandomInt(5, 25);
  const availableProducts = [];

  for (let i = 0; i < numberOfAvailableProducts; i++) {
    const name = getRandomProductname();
    availableProducts.push({
      id: `${name}${getRandomInt(0, 100000)}`,
      name,
      price: getRandomInt(0, 10000),
      rating: getRandomInt(1, 10),
    });
  }

  return availableProducts;
};
