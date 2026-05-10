import dayjs from 'dayjs';
import {DeliveryOptions} from './DeliveryOptions';

import { CartItemDetail } from './CartItemsDetail'

export function OrderSummary ({deliveryOptions , cart , loadCart}) {
    
    return (
         <div className="order-summary">
                        {deliveryOptions.length > 0 && cart.map((cartItem) => {
                            const selectedDeliveryOption = deliveryOptions
                                .find((deliveryOption) => {
                                    return deliveryOption.id === cartItem.deliveryOptionId;
                                })

                            

                            return (
                                <>
                                    <div key={cartItem.productId} className="cart-item-container">
                                        <div className="delivery-date">
                                            Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}

                                        </div>

                                        <div className="cart-item-details-grid">
                                            <img className="product-image"
                                                src={cartItem.product.image} />

                                            <CartItemDetail loadCart={loadCart} cartItem={cartItem} />

                                            <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} />
                                        </div>
                                    </div>
                                </>
                            );
                        })}

                    </div>
    );
}