// ---- This component is custom made and is not present in current version of shadcn 4.7.0 ----

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

interface QuantitySelectorProps {
  min?: number
  max?: number
  defaultValue?: number
  onChange?: (value: number) => void
}

export const QuantitySelector = ({
  min = 1,
  max = 99,
  defaultValue = 1,
  onChange,
}: QuantitySelectorProps) => {
  const [quantity, setQuantity] = useState(defaultValue)

  const decrease = () => {
    if (quantity > min) {
      setQuantity(quantity - 1)
      onChange?.(quantity - 1)
    }
  }

  const increase = () => {
    if (quantity < max) {
      setQuantity(quantity + 1)
      onChange?.(quantity + 1)
    }
  }

  return (
    <div className="flex items-center  border-neutral-200 rounded-lg w-fit">
      <button
        onClick={decrease}
        disabled={quantity <= min}
        className="px-3 py-2 text-neutral-500 hover:text-neutral-900 disabled:opacity-30 transition-colors"
      >
        <Minus size={14} />
      </button>

      <span className="px-4 py-2 text-sm font-medium min-w-8 text-center border rounded-sm border-neutral-200">
        {quantity}
      </span>

      <button
        onClick={increase}
        disabled={quantity >= max}
        className="px-3 py-2 text-neutral-500 hover:text-neutral-900 disabled:opacity-30 transition-colors"
      >
        <Plus size={14} />
      </button>
    </div>
  )
}