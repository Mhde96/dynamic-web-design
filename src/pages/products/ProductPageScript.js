import { products } from "../data/products.js"

function appendElement() {
    if (window.jQuery && window.bootstrap && window.Popper) {

        $(document).ready(function () {
            $('#header-placeholder').load('../../components/header/Header.html')
        })
        $(document).ready(function () {
            $('#footer-placeholder').load('../../components/footer/Footer.html')
        })


        $(document).ready(function(){
            generateProductCards()

        })


    } else {
        setTimeout(() => {
            appendElement()
        }, 100)
    }
}


function generateProductCards() {
    const container = $('#products-conteiner')
    container.empty();

    products.forEach(product => {
        const card = `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text font-weight-bold">$${product.price}</p>
                </div>
            </div>
        </div>
        `;

        container.append(card)
    })
}

appendElement()