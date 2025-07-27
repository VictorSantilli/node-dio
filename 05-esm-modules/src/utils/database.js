
const databaseType = {
    userType: "admin",
    typeData: "decimal",
}

async function connectToDataBase(dataName) {
    //lógica de conexão
    console.log("conectado ao banco " + dataName)
}

async function disconnectDatabase(){
    console.log("Desconectando do banco de dados ")
}



export {connectToDataBase, disconnectDatabase};