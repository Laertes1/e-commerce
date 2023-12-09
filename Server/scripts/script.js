"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const appBody = body_parser_1.default;
const db = mysql_1.default.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: ""
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post("/sendProducts", (req, res) => {
    const { productName } = req.body;
    const { productCust } = req.body;
    const { productImage } = req.body;
    const { productSize } = req.body;
    const { productDescription } = req.body;
    const { productColor } = req.body;
    const params = [
        productName,
        productCust,
        productImage,
        productSize,
        productDescription,
        productColor
    ];
    const sql = "INSERT INTO products(produtcName,productCust,productImage,productSize,productDescription,productColor) VALUES (?,?,?,?,?,?)";
    db.query(sql, params, (err, result) => {
        if (err)
            console.log("erro ao inserir os dados. O erro é :" + err);
        else
            res.json(result);
    });
});
