interface AddressCardProps {
  id: number
  name: string
  type: 'HOME' | 'OFFICE'
  address: string
  phone: string
  isSelected: boolean
  onSelect: (id: number) => void
  onEdit: (id: number) => void
  onDelete: (id: number) => void
}
import { Pencil , X } from 'lucide-react';


export const AddressCard = ({
  id, name, type, address, phone,
  isSelected, onSelect, onEdit, onDelete
}: AddressCardProps) => {
  return (
    <div
      onClick={() => onSelect(id)}
      className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all bg-[#F6F6F6]`}
    >
      {/* Left — Radio + Info */}
      <div className="flex items-start gap-3">
        <div className={`w-4 h-4 rounded-full border-2 mt-2 flex items-center justify-center
          ${isSelected ? 'border-neutral-900' : 'border-neutral-300'}`}
        >
          {isSelected && (
            <div className="w-2 h-2 rounded-full bg-neutral-900" />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-[16px] font-light text-neutral-900">{name}</span>
            <span className={`text-[10px] px-2 py-0.5 rounded font-light
              ${type === 'HOME'
                ? 'bg-neutral-900 text-white'
                : 'bg-neutral-200 text-neutral-600'
              }`}
            >
              {type}
            </span>
          </div>
          <p className="text-sm text-neutral-500 font-light">{address}</p>
          <p className="text-sm text-[#17183B] font-light">{phone}</p>
        </div>
      </div>

      {/* Right — Edit + Delete */}
      <div className="flex items-center gap-2">
        <button
          onClick={(e) => { e.stopPropagation(); onEdit(id) }}
          className="p-1.5 text-neutral-400 hover:text-primary transition-colors cursor-pointer"
        >
          <Pencil size={15} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(id) }}
          className="p-1.5 text-neutral-400 hover:text-primary transition-colors cursor-pointer"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  )
}