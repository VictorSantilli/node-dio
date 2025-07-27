//Todas as funções que lidam com produto
async function getFullName(codeId, productName) {
    console.log("\n");
    console.log("Product" + codeId + "--" + productName);
}

async function getProductLabel(productName) {
    console.log("product " + productName);
}

module.exports = {
    getFullName,
    getProductLabel
};