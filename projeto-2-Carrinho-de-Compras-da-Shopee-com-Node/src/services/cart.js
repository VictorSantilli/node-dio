//quais açoes meu carrinho pode fazer

//casos de uso
// -> adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// -> calcular o total do carrinho
async function calculateTotal(userCart) {

    console.log("Shopee Cart TOTAL IS")
   const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
   console.log(`\n ${result}`);
}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name );

    if(index !== -1){
        userCart.splice(index, 1);
    }
}

// -> remover um item - diminui um item
async function removeItem(userCart, index) {
    
}

async function displayCart(userCart) {
    console.log('Shopee card list:')
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price} | ${item.quantity} | Subtotal = ${item.subtotal()}`);
    });
}

export {addItem, calculateTotal,deleteItem, removeItem, displayCart}