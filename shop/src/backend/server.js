// const express = require("express");
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
//
// const Cat = mongoose.model('Cat', { name: String });
//
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
//
// const app = express();
//
// const productsList = [
//     {id: 1, name: 'Футболка', price: 300, img: "https://www.fatline.com.ua/images/products/backs/const/m_f_14.png"},
//     {id: 2, name: 'Шапка', price: 120, img: "https://cdn.sportmaster.ua/i/2000_2000/products/236670/tRT1saPH.jpeg"},
//     {id: 3, name: 'Штани', price: 40, img: "https://sport-co.com.ua/news/img/f7f397544b2200d21af81c0643bad8cb.jpg"}
// ];
//
// app.get('/product', (req, res) => res.send(productsList));
//
// app.listen(3333, () => console.log("Hi!"));

import mongoose from "mongoose";
import post from "./model/post";
mongoose.connect('mongodb://localhost/test');

const post1 = new post ({
    name: "sd",
    count: 45
});

post1.save().then( () => {
    console.log('Ok');
    }
);