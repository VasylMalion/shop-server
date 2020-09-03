import React from "react";
import {bindActionCreators} from "redux";
import {productPushData} from "../../actions/productList-actions";
import {connect} from "react-redux";
import "./addProduct.scss";

const AddProduct = ({newProduct, setNewProduct, pushData}) => {

    const handleChange = (e) => {
        let {...data} = newProduct.data;
        data[e.target.id] = e.target.value;
        setNewProduct({
            data
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        pushData("http://localhost:4000/api/products", newProduct.data);
        setNewProduct({
            data: {
                name: "",
                price: "",
                count: "",
                img: ""
            }
        })
    };

    return <div className = "addProduct_container">
        <section className="container">
            <div className="addProduct">
                <h1>Додати товар</h1>
                <form onSubmit={handleSubmit}>
                    <p><input id="name"
                              type="text"
                              onChange={handleChange}
                              value={newProduct.data.name}
                              placeholder="Назва товару" /></p>
                    <p><input id="price"
                              type="text"
                              onChange={handleChange}
                              value={newProduct.data.price}
                              placeholder="Ціна товару" /></p>
                    <p><input id="count"
                              type="text"
                              onChange={handleChange}
                              value={newProduct.data.count} placeholder="Кількість товару"/></p>
                    <p><input id="img"
                              type="text"
                              onChange={handleChange}
                              value={newProduct.data.img}
                              placeholder="Фото товару" /></p>
                    <p className="submit"><button className = "btn" type="submit">Підтвердити</button></p>
                </form>
            </div>
        </section>
    </div>
};

const mapDispatchToProps = dispatch => bindActionCreators({
    pushData: (url, q) => productPushData(url,q),
}, dispatch);

export default connect(null, mapDispatchToProps)(AddProduct)