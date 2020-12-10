import React, {useState} from 'react'
import { connect } from 'react-redux'
import Product from './Product'
import FormUpdate from './FormUpdate'
function UpdateProduct( {products} ) {
    const [id, setId] = useState(''); 
    return (
        <div>
            <input type='text' value={id} onChange=
                {e => setId(e.target.value)} />
                <div>            
                    {products.filter(val => val.id.includes(id) || val.name.includes(id)).map(val => (
                        <FormUpdate
                            key={val.id}
                            val={ val }
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
