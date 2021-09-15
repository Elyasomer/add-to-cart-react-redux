import axios from 'axios'
import { useEffect, useState } from 'react'
import './Cart.css'
import { connect } from 'react-redux'

const Cart = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setData(res.data)
            })
    }, [])

    return (
        <div className="cart">
            <div className="container">
                <div className="row1">
                    {
                        data.map(product => (
                            <div className="product" key={product.id}>
                                <img src={product.image} />
                                <div>
                                    <p>{product.title}</p>
                                    <p>${product.price}</p>
                                </div>
                                <div className="buttons" >
                                    <button onClick={() => props.addThisProduct(product)}>Add to cart</button>
                                    <button>View</button>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const MapStateToProps = (state) => {
    return { prs: state.products }
}

const MapDispatchToProps = (dispatch) => {
    return { 
        addThisProduct: (product) => { dispatch( {type:'ADD', product: product})}  
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Cart)