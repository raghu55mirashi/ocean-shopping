import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import './header.scss'
import { auth } from '../../firebase/firebase'

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
            {currentUser
                ? (<div className="option" onClick={() => auth.signOut()}>SignOut</div>)
                : (<Link to="/signin" className="option">SIGN IN</Link>)
            }
            <CartIcon />
        </div>
        {hidden
            ? null
            : <CartDropdown />
        }
    </div>
)
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);