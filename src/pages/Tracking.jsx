import { Header } from "../components/Header";
import './Tracking.css'
import { Link, useParams } from "react-router";
import { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from "dayjs";

export function Tracking({ cart }) {
    const { orderId, productId } = useParams();
    const [trackingDetails, setTrackingDetails] = useState(null);

    useEffect(() => {
        const fetchTrackingDetails = async () => {
            const response = await axios.get(`/api/orders/${orderId}?expand=products`);
            setTrackingDetails(response.data);
        };

        fetchTrackingDetails();
    }, [orderId]);

    if (!trackingDetails) {
        return null;
    }

    const orderProduct = trackingDetails.products.find((orderProduct) => {
        return orderProduct.productId === productId;
    });

    const totalDeliveryTimeMs = orderProduct.estimatedDeliveryTimeMs  - trackingDetails.orderTimeMs
    const timePassedMs = dayjs().valueOf() - trackingDetails.orderTimeMs ;

    let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100;
    if (deliveryPercent > 100) {
        deliveryPercent = 100;
    }

    console.log(deliveryPercent)

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="/tracking-favicon.png" />
            <title>Tracking</title>

            <Header cart={cart} />

            <div className="tracking-page">
                <div className="order-tracking">
                    <Link className="back-to-orders-link link-primary" to="/orders">
                        View all orders
                    </Link>

                    <div className="delivery-date">
                        Arriving on {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                    </div>

                    <div className="product-info">
                        {orderProduct.product.name}
                    </div>

                    <div className="product-info">
                        Quantity: {orderProduct.quantity}
                    </div>

                    <img className="product-image" src={orderProduct.product.image} />

                    <div className="progress-labels-container">
                        <div className="progress-label">
                            Preparing
                        </div>
                        <div className="progress-label current-status">
                            Shipped
                        </div>
                        <div className="progress-label">
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{
                            width: `${deliveryPercent}%`
                        }}></div>
                    </div>
                </div>
            </div>
        </>
    );
};