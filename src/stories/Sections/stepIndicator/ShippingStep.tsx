import { useState } from 'react'
import { Button } from '@/components/ui/button'
import type { StepProps } from '@/types'

interface ShippingOption {
  id: string
  label: string
  description: string
  price: string
  estimatedDate: string
}

const shippingOptions: ShippingOption[] = [
  {
    id: 'free',
    label: 'Free',
    description: 'Regular shipment',
    price: 'Free',
    estimatedDate: '17 Oct, 2023',
  },
  {
    id: 'express',
    label: '$8.50',
    description: 'Get your delivery as soon as possible',
    price: '$8.50',
    estimatedDate: '1 Oct, 2023',
  },
  {
    id: 'schedule',
    label: 'Schedule',
    description: 'Pick a date when you want to get your delivery',
    price: 'Schedule',
    estimatedDate: 'Select Date',
  },
]

export const ShippingStep = ({ onNext, onBack }: StepProps) => {
  const [selectedId, setSelectedId] = useState('free')

  return (
    <div className="flex flex-col gap-6">

      <h2 className="text-lg font-medium">Shipment Method</h2>

      {/* Shipping Options */}
      <div className="flex flex-col gap-3">
        {shippingOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => setSelectedId(option.id)}
            className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all
              ${selectedId === option.id
                ? 'border-neutral-900'
                : 'border-neutral-200 hover:border-neutral-300'
              }`}
          >
            {/* Left — Radio + Info */}
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                ${selectedId === option.id
                  ? 'border-neutral-900'
                  : 'border-neutral-300'
                }`}
              >
                {selectedId === option.id && (
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-neutral-900">
                  {option.label}
                </span>
                <span className="text-xs text-neutral-400">
                  {option.description}
                </span>
              </div>
            </div>

            {/* Right — Date */}
            <span className="text-sm text-neutral-500">
              {option.estimatedDate}
            </span>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-end gap-3 mt-4">
        <Button variant="outlineBlk" onClick={onBack} className="px-15 py-2.5">
          Back
        </Button>
        <Button
          onClick={onNext}
          className="px-15 py-2.5 bg-neutral-900 text-white"
        >
          Next
        </Button>
      </div>

    </div>
  )
}