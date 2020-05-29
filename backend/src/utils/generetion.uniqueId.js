const crypto = require("crypto")

module.exports =  function generationUniqueId(){
    return crypto.randomBytes(4).toString("HEX");
    
} // executa coisas especificas, coisas isoladas, eles nem mexe em banco de dados e tals