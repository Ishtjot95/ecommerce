import './header.css'
import { Link, NavLink , useNavigate , useSearchParams } from 'react-router';
import LogoWhite from "../assets/images/logo-white.png";
import MobileLogoWhite from "../assets/images/mobile-logo-white.png";
import {useState} from 'react';

type HeaderProps = {
    cart: {
        productId: string;
        quantity: number;
        deliveryOptionId: string;
    }[];
}


export function Header({ cart }: HeaderProps ) {
    const navigate = useNavigate();
     const [searchParams] = useSearchParams();
    

    const searchText = searchParams.get('search');

    const [searchValue , setSearchValue] = useState(searchText || '');
    let totalQuantity = 0;

    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    });

    const handleSearchValue = (event) => {
        const searchInput = event.target.value ;
        setSearchValue(searchInput);
    }

    const handleSearchedItem = () => {
        console.log(searchValue);
        navigate(`/?search=${searchValue}`);
    }

    return (
        <>
            <div className="header">
                <div className="left-section">
                    <Link to="/" className="header-link">
                        <img className="logo"
                            src={LogoWhite} />
                        <img className="mobile-logo"
                            src={MobileLogoWhite} />
                    </Link>
                </div>

                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search"
                        value={searchValue}
                        onChange={handleSearchValue}
                    />

                    <button className="search-button"
                    onClick={handleSearchedItem}
                    >
                        <img className="search-icon" src="images/icons/search-icon.png" />
                    </button>
                </div>

                <div className="right-section">
                    <NavLink className="orders-link header-link" to="/orders">

                        <span className="orders-text">Orders</span>
                    </NavLink>

                    <Link className="cart-link header-link" to="/checkout">
                        <img className="cart-icon" src="images/icons/cart-icon.png" />
                        <div className="cart-quantity">{totalQuantity}</div>
                        <div className="cart-text">Cart</div>
                    </Link>
                </div>
            </div>
        </>
    )
}