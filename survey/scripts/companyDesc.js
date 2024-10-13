var productCount = 0;

    function addProduct() {
        productCount++;
        var container = document.getElementById("products");
        var productDiv = document.createElement("div");
        productDiv.id = "product_" + productCount; // Atribuindo um ID único para cada produto
        productDiv.innerHTML = "<h3>Product " + productCount + "</h3>" +
            "<label for='product_name_" + productCount + "'>Product Name: </label>" +
            "<input type='text' id='product_name_" + productCount + "' name='product_name[]'><br><br>" +
            "<label for='product_description_" + productCount + "'>Product Description: </label>" +
            "<textarea id='product_description_" + productCount + "' name='product_description[]' rows='3' cols='30'></textarea><br>" +
            "<label for='product_percentage_" + productCount + "'>Percentage of Total Business Volume:</label>" +
            "<input type='range' id='product_percentage_" + productCount + "' name='product_percentage[]' min='0' max='100'>" +
            "<span id='product_percentage_value_" + productCount + "'>0%</span><br><br>" +
            "<button type='button' onclick='removeProduct(" + productCount + ")'>Remove Product</button>"; // Adicionando um botão para remover o produto
        container.appendChild(productDiv);

        var slider = document.getElementById("product_percentage_" + productCount);
        var output = document.getElementById("product_percentage_value_" + productCount);
        output.innerHTML = slider.value + "%";

        slider.oninput = function() {
            output.innerHTML = this.value + "%";
        };
    }

    function removeProduct(productId) {
        var productToRemove = document.getElementById("product_" + productId);
        productToRemove.parentNode.removeChild(productToRemove);
    }