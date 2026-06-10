import {AddressCard} from './AddressCard';
import {useState} from 'react';
import type { StepProps } from '@/types';
import {Button} from "@/components/ui/button";
import { Plus } from 'lucide-react';

const addresses = [
  {
    id: 1,
    name: '2118 Thornridge',
    type: 'HOME' as const,
    address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    phone: '(209) 555-0104',
  },
  {
    id: 2,
    name: 'Headoffice',
    type: 'OFFICE' as const,
    address: '2715 Ash Dr. San Jose, South Dakota 83475',
    phone: '(704) 555-0127',
  },
]

export const AddressStep = ({ onNext, onBack }: StepProps) => {
  const [selectedId, setSelectedId] = useState(1)

  return (
    <div className="flex flex-col gap-6">

      <h2 className="text-lg font-medium">Select Address</h2>

      {/* Address Cards */}
      <div className="flex flex-col gap-3">
        {addresses.map((address) => (
          <AddressCard
            key={address.id}
            {...address}
            isSelected={selectedId === address.id}
            onSelect={setSelectedId}
            onEdit={(id) => console.log('edit', id)}
            onDelete={(id) => console.log('delete', id)}
          />
        ))}
      </div>

      {/* Add New Address */}
      <button className="flex items-center justify-center gap-2 py-3 border border-dashed border-neutral-300 rounded-xl text-sm text-neutral-500 hover:border-neutral-400 hover:text-neutral-700 transition-all">
        <Plus size={16} />
        Add New Address
      </button>

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-3 mt-4">
        <Button variant="outlineBlk" onClick={onBack} className="px-15 py-2.5">
          Back
        </Button>
        <Button variant="primary" onClick={onNext} className="px-15 bg-neutral-900 text-white">
          Next
        </Button>
      </div>

    </div>
  )
}