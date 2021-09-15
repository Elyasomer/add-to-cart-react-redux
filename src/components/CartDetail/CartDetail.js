import React from 'react'
import { connect } from 'react-redux'
import './CartDetail.css'

export const CartDetail = ({prs, onRemove}) => {

  const calculatePrice = (products) => {
    let total = 0
    for (var product of products) {
      total += product.price
    }
    return total.toFixed(2)
  }
    return (
      <div className='cart-detail'>
        <table id="t01">
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
            <th>Total</th>
          </tr>
          {
            prs.map(pr => (

          <tr>
            <td><img src={pr.image} alt=""/>
            <span>{pr.title}</span>
            </td>
            <td>${pr.price}</td>
            <td><input type="number" min='1'/></td>
            <td><button onClick={() => onRemove(pr.id)} className='items'>remove</button></td>
            <td></td>
          </tr>
        ))
      }
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>${calculatePrice(prs)}</td>
      </tr>
        </table>

        </div>
    )
}

const mapStateToProps = (state) => {
  return {prs: state.products}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemove: (id) => {dispatch({type:'REMOVE', id: id})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)
