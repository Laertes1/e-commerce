"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql_1 = require("mysql");
var cors_1 = require("cors");
var body_parser_1 = require("body-parser");
var app = (0, express_1.default)();
var appBody = body_parser_1.default;
//! Falta adicionar o database
var db = mysql_1.default.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: ""
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post("/sendProducts", function (req, res) {
    var productName = req.body.productName;
    var productCust = req.body.productCust;
    var productImage = req.body.productImage;
    var productSize = req.body.productSize;
    var productDescription = req.body.productDescription;
    var productColor = req.body.productColor;
    var params = [
        productName,
        productCust,
        productImage,
        productSize,
        productDescription,
        productColor
    ];
    var sql = "INSERT INTO products(produtcName,productCust,productImage,productSize,productDescription,productColor) VALUES (?,?,?,?,?,?)";
    db.query(sql, params, function (err, result) {
        if (err)
            console.log("erro ao inserir os dados. O erro é :" + err);
        else
            res.json(result);
    });
});
