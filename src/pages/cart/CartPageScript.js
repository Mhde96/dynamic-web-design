import { getCart, deleteFromCart } from '../../data/cart.js'


// Function to create product cards
function createProductCards(products) {
    products.forEach(product => {
        const card = `
            <div class="col-md-4 mb-4" id="product-card-${product.id}">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.description}</p>
                  <div>
                    <span>quantity</span>
                    <span class="card-text font-weight-bold">${product.quantity}</span>
                  </div>
                  <div>
                    <span>price</span>
                    <span class="card-text font-weight-bold">${product.price}</span>
                  </div>
                </div>
                <div class="card-footer d-flex justify-content-between">
                  <button class="btn btn-danger" onclick="deleteCard(${product.id})">Delete</button>
                </div>
              </div>
            </div>`;
        $('#product-container').append(card); // Append to container
    });
}




function appendElement() {
    if (window.jQuery && window.bootstrap && window.Popper) {

        $(document).ready(function () {
            $('#header-placeholder').load('../../components/header/Header.html')
        })
        $(document).ready(function () {
            $('#footer-placeholder').load('../../components/footer/Footer.html')
        })


        $(document).ready(function () {
            createProductCards(getCart())
            updateTotalProducts()
        })


    } else {
        setTimeout(() => {
            appendElement()
        }, 100)
    }
}

function updateTotalProducts() {
    let products = getCart();

    const totalQuantity = products.reduce((sum, product) => sum + product.quantity, 0);
    const totalPrice = products.reduce((sum, product) => sum + product.price * product.quantity, 0);


    if (totalQuantity > 0) {
        $('#total-quantity').text(totalQuantity)
        $('#total-price').text(totalPrice)
    }

}

function deleteCard(productId) {
    let products = getCart();
    const product = products.find(p => p.id === productId)

    products = products.filter(p => p.id !== productId);
    deleteFromCart(productId)
    $(`#product-card-${product.id}`).remove();
    updateTotalProducts()
    alert(`${product.name} has been deleted`)

}


window.deleteCard = deleteCard

appendElement()
