import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { createProduct } from "../redux/product";
import TextField from '@material-ui/core/TextField';
import "./Products.css";
import * as dayjs from 'dayjs'

function CreateProduct( { createProduct } ) {    

    const [date,setDate] = useState(dayjs().format())

    const [product, setProduct] = useState({
        id: '',
        name:'',
        description: '',
        price: 0,
        stock: 0,
        gender: 'Male',
        image: '',
        size: 'S',
        date: date,
        view: 0,
    }); 

    return (
        <div className="product">
            <div className="product_container">                
                <TextField id="filled-basic" label="ID" variant="filled" name="id" value={product.id} onChange={
                    e => setProduct({...product, [e.target.name]: e.target.value
                })} />
                <p>Gander</p>
                <select name="gender" onChange={ 
                    e => setProduct({...product, [e.target.name]: e.target.value})
                }>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <TextField id="filled-basic" label="NAME PRODUCT" variant="filled" type="text" name="name" value={product.name} onChange={
                    e => setProduct({...product, [e.target.name]: e.target.value
                })}/>
                <p>Size</p>
                <select name="size" onChange={ 
                    e => setProduct({...product, [e.target.name]: e.target.value})
                }> 
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
                <TextField id="filled-basic" label="STOCK" variant="filled"  type="number" name="stock" value={product.stock} onChange={
                    e => setProduct({...product, [e.target.name]: e.target.value
                })}/>
                <p>description</p>
                <textarea type="text" name="description" value={product.description} onChange={
                    e => setProduct({...product, [e.target.name]: e.target.value
                })}/>
                <TextField id="filled-basic" label="PRICE" variant="filled"  type="number" name="price" value={product.price} onChange={
                    e => setProduct({...product, [e.target.name]: e.target.value
                })}/>
                <TextField id="filled-basic" label="IMAGE URL" variant="filled"  type="text" name="image" value={product.image} onChange={
                    e => setProduct({...product, [e.target.name]: e.target.value
                })}/>

                <button onClick={() => createProduct(product)}>Add</button>
            </div>            
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        createProduct: (product) => dispatch(createProduct(product)),
    }
}
export default connect(null, mapDispatchToProps)(CreateProduct);
