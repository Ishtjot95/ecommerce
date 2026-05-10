import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter , useLocation } from 'react-router';
import userEvent from '@testing-library/user-event';
import { PaymentSummary } from './PaymentSummary';
import axios from 'axios';

vi.mock('axios');

describe('PaymentSummary component', () => {
    let paymentSummary;
    let loadCart;
    let user;

    beforeEach(() => {
        paymentSummary = {
            "totalItems": 5,
            "productCostCents": 10475,
            "shippingCostCents": 999,
            "totalCostBeforeTaxCents": 11474,
            "taxCents": 1147,
            "totalCostCents": 12621
        };

        loadCart = vi.fn();
        user = userEvent.setup();
    });

    it('displays the correct details', () => {
        render(
            <MemoryRouter>
                <PaymentSummary 
                    paymentSummary={paymentSummary}
                    loadCart={loadCart}    
                />
            </MemoryRouter>
        );

        expect(
            screen.getByText('Items (5):')
        ).toBeInTheDocument();

        expect(
            within(screen.getByTestId('payment-summary-product-cost'))
                .getByText('$104.75')
        ).toBeInTheDocument();

        expect(
            screen.getByTestId('payment-summary-shipping-cost')
        ).toHaveTextContent('$9.99');

        expect(
            screen.getByTestId('payment-summary-total-before-tax')
        ).toHaveTextContent('$114.74')

        expect(
            screen.getByTestId('payment-summary-tax')
        ).toHaveTextContent('$11.47')

        expect(
            screen.getByTestId('payment-summary-total')
        ).toHaveTextContent('$126.21')
    });

    it('places an order', async () => {
        function Location() {
            const location = useLocation();
            return <div data-testid="url-path">{location.pathname}</div>;
        }

        render(
            <MemoryRouter>
                <PaymentSummary 
                    paymentSummary={paymentSummary}
                    loadCart={loadCart}
                />
                <Location />
            </MemoryRouter>
        );
        const placeOrderButton = screen.getByTestId('place-order-button');
        await user.click(placeOrderButton);

        expect(axios.post).toHaveBeenCalledWith('/api/orders');
        expect(loadCart).toHaveBeenCalled();
        expect(screen.getByTestId('url-path')).toHaveTextContent('/orders');
    })
});

