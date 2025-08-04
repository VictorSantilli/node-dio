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
async function removeItemByIndex(userCart, index) {
    //transformar o indice visual do usuario para o backend
    const deleteIndex = index - 1;

    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1);
    }
}

async function removeItem(userCart, item) {

    //1.encontrar o index do item
    const indexFound = userCart.findIndex((p)=> p.name ===item.name);

    //2. Caso não encontre o item
    if (indexFound == -1){
        console.log("item não encontrado");
        return;
    }

    //3. item > 1 subtrair um item, item = 1 deletar
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return
    }

    //4. caso item =1 
    if(userCart[indexFound].quantity = 1){
        userCart.splice(indexFound, 1)   
    }

    console.log(indexFound)
}

async function displayCart(userCart) {
    console.log('Shopee card list:')
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price} | ${item.quantity} | Subtotal = ${item.subtotal()}`);
    });
}

export {addItem, calculateTotal,deleteItem, removeItemByIndex, displayCart, removeItem}