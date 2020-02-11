const path = require('path')
const fs = require('fs');
var enc = require('./../config/encryption')


const certPath = path.join(__dirname, './../keys/private.key');
const certPath2 = path.join(__dirname, './../keys/public.key');

var publicKEY  = fs.readFileSync(certPath2, 'utf8');
var privateKEY  = fs.readFileSync(certPath, 'utf8');
var jwt = require('jsonwebtoken')

module.exports = {
    verify: async function verify(token) {
        var callback = new Promise((res, rej) => {
            jwt.verify(token, publicKEY, enc.verifyOptions, function(err, decodedToken) {
                if(err) {
                    res({
                        "status": false,
                        "token" : null,
                        "err": err
                    })
                }
                else {
                    res({
                        "status": true,
                        "token" : decodedToken,
                        "err": null
                    })
                }
            })
        })

        var resp = await callback;
        return resp

    }, 

    sign: async function sign(data) {
        //the data accepted here NEEDS to be a string format
        var callback = new Promise((res, rej) => {
            var token = jwt.sign({data: data}, privateKEY, enc.signOptions);
            res(token)
        })
        var toke = await callback;
        console.log("token is:", toke)
        return toke;
    }


    
}