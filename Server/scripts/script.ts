import express from "express";
import Mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";

const app: any = express();
const appBody: any = bodyParser;
//! Falta adicionar o database
const  db = Mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:""
})

app.use(express.json());
app.use(cors());

app.post("/sendProducts", (req: any, res: any)=>{
    const {productName}= req.body;
    const {productCust}= req.body;
    const {productImage}=req.body;
    const {productSize}= req.body;
    const {productDescription} = req.body;
    const {productColor} = req.body;

    const params=[
        productName,
        productCust,
        productImage,
        productSize,
        productDescription,
        productColor
    ];

    const sql: string = "INSERT INTO products(produtcName,productCust,productImage,productSize,productDescription,productColor) VALUES (?,?,?,?,?,?)"

    db.query(sql, params, (err: any, result:any)=>{
        if(err) console.log("erro ao inserir os dados. O erro é :" + err)
        else res.json(result)
    })  
})