import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { SportsBasketball } from '@material-ui/icons';
import { useStateValue } from "./StateProvider"
import Login from './Login';
import { auth } from "./firebase"
function Header() {
    const [{ basket, user }] = useStateValue();

    const login = () =>{
        if(user){
            auth.signOut();
        }
    }
 

    return (
        <nav className="header">
            {/* logo on the left -> img*/}
            <Link to="/">
            <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
            </Link>
            {/* Search box*/}
            <div className="header_search">
            <input type="text" className = "header_searchInput"/>
            <SearchIcon className="header_searchIcon" />
            </div>
            {/* 3 links */}
            <div className="header__nav">
           
            {/* 1st link */}
            <Link to={!user && "/login"} className="header__link">
            <div onClick={login} className="header__options">
            <span className="header__optionLineOne">Hello{user?.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out': 'Sign In'}</span>
            </div>
            </Link>

            {/* 2nd link */}
            <Link to="/" className="header__link">
            <div className="header__options">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">Orders</span>
            </div>
            </Link>

            {/* 3rd link */}
            <Link to="/" className="header__link">
            <div className="header__options">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
            </div>
            </Link>

            {/* 4th link */}
        <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
                {/* Shopping basket icon */}
                <ShoppingBasketIcon />
                {/* Shopping basket icon */}
                <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
        </Link>

            </div>
            {/* Basket icon with number */}
        </nav>
    )
}

export default Header
