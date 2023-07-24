if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
} //to make the code work even if the page isn't already loaded

function ready() {  
    // tracks if 'Remove' button is clicked
    var removeCartItemButtons = document.getElementsByClassName('btn-remove')
    for (var i=0; i<removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    // tracks any qty change to update cart-total
    var quantityInputs = document.getElementsByClassName('quantity-input')
    for (var i=0; i<quantityInputs.length; i++) {
        var input  = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    // tracks any 'Like' button state change
    var toggleLikeButtons = document.getElementsByClassName('btn-like')
    for (var i=0; i<toggleLikeButtons.length; i++) {
        var button = toggleLikeButtons[i]
        button.addEventListener('click', toggleLike)
    }
}

function toggleLike(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.classList.toggle('is-active')
    console.log(buttonClicked.parentElement)
}

function quantityChanged(event) {
    var input = event.target
    // to make sure no null, negative or invalid value is taken
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('shopping-cart')[0]
    var cartItems = cartItemContainer.getElementsByClassName('item')
    var total = 0
    for (var i=0; i<cartItems.length; i++) {
        var cartItem = cartItems[i]
        var priceElement = cartItem.getElementsByClassName('item-price')[0]
        var quantityElement = (cartItem.getElementsByClassName('quantity-input')[0])
        var price = parseFloat(priceElement.innerText.replace('$',''))
        if (quantityElement !== undefined) {
            var quantity = parseInt(quantityElement.value);
            total = total + (price * quantity)
        }
    }
    console.log(total)
    /*
    // NB: formula that can be used to make sure total never goes beyond 2 decimals
    total = Math.round(total * 100) / 100 
    */
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}