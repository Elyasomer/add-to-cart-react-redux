import { NavLink } from 'react-router-dom'
import './Header.css'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'

const Header = (props) => {

    return (
        <header>
            <div className="links">
            <NavLink exact to="/add-to-cart-react-redux"><i className="fas fa-home"></i></NavLink>
                <NavLink to="/add-to-cart-react-redux/cart"><i className="fas fa-shopping-cart"></i>
                    <span className='items'>{props.prs.length}</span></NavLink>
            </div>
        </header>
    )
}
const MapStateToProps = (state) => {
    return { prs: state.products }
}
export default connect(MapStateToProps)(Header)
