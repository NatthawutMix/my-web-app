import React, { useState } from 'react'
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import "./Products.css";
import { removeProduct, updateProduct } from "../redux/product"

function FormUpdate( {val, removeProduct, updateProduct} ) {
    const [product, setProduct] = useState({
        id: val.id,
        name: val.name,
        description: val.description,
        price: val.price,
        stock: val.stock,
        gender: val.gender,
        image: val.image,
        size: val.size,
        date: val.date,
        view: val.view,
    });  

    return (
        <div className="product">
            <div className="product_container">  
                <TextField id="filled-basic" label="NAME PRODUCT" 
                    variant="filled" type="text" name="name" value={product.name} onChange={
                    e => setProduct({...product, [e.target.name]: e.target.value
                })}/>      
                <img className="product_img" src={product.image} alt="" />    
                <p>Gander</p>
                <select name="gender" value={product.gender} onChange={ 
                    e => setProduct({...product, [e.target.name]: e.target.value})
                }>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>                
                <p>Size</p>
                <select name="size" value={product.size} onChange={ 
                    e => setProduct({...product, [e.target.name]: e.target.value})
                }> 
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
                <TextField id="filled-basic" label="STOCK"
                    variant="filled"  type="number" name="stock" value={product.stock} onChange={
                    e => setProduct({...product, [e.target.name]: e.target.value
                })}/>
                <p>description</p>
                <textarea type="text" name="description" value={product.description} onChange={
                    e => setProduct({...product, [e.target.name]: e.target.value
                })}/>
                <TextField id="filled-basic" label="PRICE" 
                    variant="filled"  type="number" name="price" value={product.price} onChange={
                    e => setProduct({...product, [e.target.name]: e.target.value
                })}/>
                <TextField id="filled-basic" label="IMAGE URL" 
                    variant="filled"  type="text" name="image" value={product.image} onChange={
                    e => setProduct({...product, [e.target.name]: e.target.value
                })}/>

                <button onClick={() => updateProduct(product, val._id)}>Update</button>
                <button onClick={() => removeProduct(val._id)}>Delete</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeProduct: (id) => dispatch(removeProduct(id)),
        updateProduct: (product, id) => dispatch(updateProduct(product, id)),
    }
}
export default connect(null, mapDispatchToProps)(FormUpdate);
