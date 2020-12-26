import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import Products from './dbProduct.js';
import Profile from './dbProfile.js';

const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());
app.use(cors());

const connection_url = `mongodb+srv://admin:kngzky2YwDzyXapk@cluster0.jirbn.mongodb.net/db?retryWrites=true&w=majority`

mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

app.get("/", (req, res) => res.status(200).send('hello world'));

app.get("/product", (req,res) => {
    Products.find((err,data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

app.get("/product/:id", async (req,res) => {
    const product = await Products.findById(req.params.id);
    res.send({ data: product });
})

app.post("/product", (req, res) => {
    const dbProduct = req.body;

    Products.create(dbProduct, (err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})

app.put("/product/:id", async (req,res) => {
    try {
        const product = await Products.findById(req.params.id);
        console.log(req.body.data)
        Object.assign(product, req.body.data);
        product.save();
        res.send({ data: product });  
    } catch {
        res.status(404).send({err})
    }
      
})

app.delete('/product/:id', async (req,res) => {
    try{
        const product = await Products.findById(req.params.id);
        await product.remove();
        res.send( {data: true })
    } catch {
        res.status(404).send({err})
    }    
})

app.post("/profile", (req, res) => {
    const dbProfile = req.body;

    Profile.create(dbProfile, (err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})

app.listen(port, () => console.log(`listening on localhost: ${port}`));