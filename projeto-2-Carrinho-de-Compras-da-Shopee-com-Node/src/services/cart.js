//quais açoes meu carrinho pode fazer

//casos de uso
// -> adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// -> calcular o total do carrinho
async function calculateTotal(userCart) {
   const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
   console.log(result);
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

export {addItem, calculateTotal,deleteItem, removeItem}