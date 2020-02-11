module.exports  = {
    saltRounds: 9, 
    issuer: 'openservice_api', 
    signOptions: {
        issuer:  "open_service_api",
        expiresIn:  "24h",
        algorithm:  "RS512"
    },
    verifyOptions: {
        issuer:  "Ledger",
        expiresIn:  "24h",
        algorithm:  ["RS512"]
    }
}