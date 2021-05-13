const express = require('express')

const app = express();

class Auth {
    static auth(req, res, next) {

        var d = new Date(); 
        req.body = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        console.log("Body in request", req.body)
        console.log('From auth middleware')
        next();

    }

}
module.exports = Auth