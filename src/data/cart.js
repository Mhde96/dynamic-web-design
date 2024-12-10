import { getDataFromLocalStorage, saveDataToLocalStorage } from '../utils/storageUtils.js'
import { products } from '../data/products.js'
export const setCart = (cart) => {
    saveDataToLocalStorage('cart', cart)
}

export const getCart = () => {
    const data = getDataFromLocalStorage('cart')
    return data || []
}


export const addToCart = (productId) => {
    const cart = getCart();
    const product = products.find(p => p.id === productId);

    if (product) {
        const cartItem = cart.find(c => c.id === productId);
        if (!cartItem) {
            cart.push({ ...product, quantity: 1 });
        } else {
            cartItem.quantity++;
        }

        setCart(cart)
    }

}

export const deleteFromCart = (productId) => {
    const cart = getCart();

    const cartItem = cart.find(c => c.id === productId);
    if (cartItem) {
        const updatedCart = cart.filter(c => c.id !== productId)
        setCart(updatedCart)
    }
    else {
        alert(`Product Id ${productId} is not in the cart! `);
    }
}