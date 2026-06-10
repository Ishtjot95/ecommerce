import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import type { StepProps } from '@/types'

type PaymentMethod = 'credit' | 'paypal' | 'apple'

export const PaymentStep = ({ onNext, onBack }: StepProps) => {
  const [activeTab, setActiveTab] = useState<PaymentMethod>('credit')
  const [sameAsBilling, setSameAsBilling] = useState(false)
  const [cardDetails, setCardDetails] = useState({
    cardHolder: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  })

  const tabs: { id: PaymentMethod; label: string }[] = [
    { id: 'credit', label: 'Credit Card' },
    { id: 'paypal', label: 'PayPal' },
    { id: 'apple',  label: 'Apple Credit' },
  ]

  return (
    <div className="flex gap-8">

      {/* Left — Order Summary */}
      <div className="flex flex-col gap-4 border border-[#EBEBEB] rounded-[8px] px-5 py-6 basis-1/2">
        <h2 className="text-lg font-semibold">Summary</h2>

        {/* Mini cart items */}
        <div className="flex flex-col gap-3">
          {[
            { name: 'Apple iPhone 14 Pro Max 128Gb', price: '$1399' },
            { name: 'AirPods Max Silver',            price: '$549' },
            { name: 'Apple Watch Series 9 GPS',      price: '$399' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-100 rounded-lg" />
                <span className="text-sm text-neutral-700">{item.name}</span>
              </div>
              <span className="text-sm font-medium">{item.price}</span>
            </div>
          ))}
        </div>

        {/* Address + Shipping */}
        <div className="flex flex-col gap-1 pt-4 border-t border-neutral-200">
          <p className="text-xs text-neutral-400">Address</p>
          <p className="text-sm text-neutral-700">
            1131 Dusty Townline, Jacksonville, TX 40322
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs text-neutral-400">Shipment method</p>
          <p className="text-sm text-neutral-700">Free</p>
        </div>

        {/* Price Breakdown */}
        <div className="flex flex-col gap-2 pt-4 border-t border-neutral-200">
          {[
            { label: 'Subtotal',                    value: '$2347' },
            { label: 'Estimated Tax',               value: '$50' },
            { label: 'Estimated shipping & Handling', value: '$29' },
          ].map((row) => (
            <div key={row.label} className="flex justify-between text-sm">
              <span className="text-neutral-500">{row.label}</span>
              <span className="text-neutral-900">{row.value}</span>
            </div>
          ))}
          <div className="flex justify-between text-base font-bold pt-2 border-t border-neutral-200">
            <span>Total</span>
            <span>$2426</span>
          </div>
        </div>
      </div>

      {/* Right — Payment Form */}
      <div className="flex flex-col gap-5 basis-1/2">
        <h2 className="text-lg font-semibold">Payment</h2>

        {/* Payment Tabs */}
        <div className="flex border border-neutral-200 rounded-lg overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2.5 text-sm font-medium transition-all
                ${activeTab === tab.id
                  ? 'bg-neutral-900 text-white'
                  : 'bg-white text-neutral-500 hover:bg-neutral-50'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Credit Card Visual */}
        {activeTab === 'credit' && (
          <>
            <div className="bg-neutral-900 rounded-xl p-6 text-white h-40 flex flex-col justify-between w-[60%]">
              <div className="flex justify-between items-start">
                <div className="w-10 h-7 bg-yellow-400 rounded-sm" />
                <span className="text-xs text-neutral-400">Cardholder</span>
              </div>
              <div>
                <p className="text-sm tracking-widest text-neutral-300">
                  {cardDetails.cardNumber || '4085 9536 8475 9530'}
                </p>
              </div>
            </div>

            {/* Card Inputs */}
            <div className="flex flex-col gap-3">
              <input
                placeholder="Card holder name"
                value={cardDetails.cardHolder}
                onChange={(e) => setCardDetails({ ...cardDetails, cardHolder: e.target.value })}
                className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-neutral-900 transition-colors"
              />
              <input
                placeholder="Card Number"
                value={cardDetails.cardNumber}
                onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-neutral-900 transition-colors"
              />
              <div className="flex gap-3">
                <input
                  placeholder="Exp. date"
                  value={cardDetails.expiry}
                  onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                  className="flex-1 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-neutral-900 transition-colors"
                />
                <input
                  placeholder="CVV"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                  className="flex-1 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-neutral-900 transition-colors"
                />
              </div>
            </div>

            {/* Same as billing */}
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={sameAsBilling}
                onCheckedChange={(checked) => setSameAsBilling(!!checked)}
              />
              <span className="text-sm text-neutral-600">
                Same as billing address
              </span>
            </label>
          </>
        )}

        {/* PayPal */}
        {activeTab === 'paypal' && (
          <div className="flex items-center justify-center h-40 border border-neutral-200 rounded-xl">
            <p className="text-neutral-400 text-sm">
              You will be redirected to PayPal
            </p>
          </div>
        )}

        {/* Apple Credit */}
        {activeTab === 'apple' && (
          <div className="flex items-center justify-center h-40 border border-neutral-200 rounded-xl">
            <p className="text-neutral-400 text-sm">
              You will be redirected to Apple Pay
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-3 mt-2">
          <Button variant="outlineBlk" onClick={onBack} className="flex-1 px-15 py-2.5">
            Back
          </Button>
          <Button
            onClick={onNext}
            className="flex-1 px-15 py-2.5 bg-neutral-900 text-white"
          >
            Pay
          </Button>
        </div>

      </div>
    </div>
  )
}