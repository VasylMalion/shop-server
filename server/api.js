const express = require("express");
const router = express.Router();
const Product = require("./productShema");

router.get("/products", (req, res) => {
    Product.find({})
    .then(product => {
        res.send(product);
    })
});

router.post("/products", (req, res) => {
    Product.create(req.body)
    .then(product => {
        res.send(product)
    })
});

router.put("/products/:id", (req, res) => {
    Product.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Product.findOne({_id: req.params.id})
        .then(product => {
            res.send(product);
        })
    })
});
 
router.delete("/products/:id", (req, res) => {
   Product.deleteOne({_id: req.params.id})
   .then(product => {
       res.send(product); 
   })
});

module.exports = router;