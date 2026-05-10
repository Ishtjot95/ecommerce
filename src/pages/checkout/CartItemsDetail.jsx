import { useState } from 'react';
import { formatMoney } from '../../utils/money';
import axios from 'axios';


export function CartItemDetail({ cartItem, loadCart }) {
    const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
    const [quantity, setQuantity] = useState(cartItem.quantity);


    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCart();
    };

    const updateStock = async () => {
        await axios.put(`/api/cart-items/${cartItem.productId}`, {
            quantity: quantity
        });
        await loadCart();

    }

    const updateQuantity = () => {
        if (isUpdatingQuantity) {
            setIsUpdatingQuantity(false);
            updateStock();
        } else {
            setIsUpdatingQuantity(true);
        }
    };

    const newQuantity = (event) => {
        const inputQuantity = Number(event.target.value)
        setQuantity(inputQuantity);
    };

    const handleQuantityKeyDown = (event) => {
        const keyPressed = event.key;
        if(keyPressed === 'Enter') {
            updateQuantity()
        }else if (keyPressed === 'Escape') {
            setQuantity(cartItem.quantity);
            setIsUpdatingQuantity(false)

        }
    }

    return (
        <div className="cart-item-details">
            <div className="product-name">
                {cartItem.product.name}
            </div>
            <div className="product-price">
                {formatMoney(cartItem.product.priceCents)}
            </div>
            <div className="product-quantity">

                <span>
                    Quantity: {isUpdatingQuantity
                        ? <input
                            value={quantity}
                            onChange={newQuantity}
                            onKeyDown={handleQuantityKeyDown}
                            className="update-quantity" type="text" />
                        : <span className="quantity-label">{cartItem.quantity}</span>
                    }
                </span>
                <span className="update-quantity-link link-primary"
                    onClick={updateQuantity}
                >
                    Update
                </span>
                <span className="delete-quantity-link link-primary"
                    onClick={deleteCartItem}
                >
                    Delete
                </span>
            </div>
        </div>
    );
};