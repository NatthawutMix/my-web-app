import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import Product from './Product'
import FormUpdate from './FormUpdate'

function UpdateProduct( {products} ) {
    const [id, setId] = useState(''); 
    return (
        <div>
            <input type='text' value={id} onChange=
                {e => setId(e.target.value)} />
                <Link to="/">Home</Link>
                <div>            
                    {products.filter(product => product.id.includes(id) || product.name.includes(id)).map(product => (
                        <FormUpdate
                            key={product.id}
                            val={ product }
                        />
                    ))}
                </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.product.products
    }
}

export default connect(mapStateToProps)(UpdateProduct)
