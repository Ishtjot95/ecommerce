import { MapPin, Truck, CreditCard } from 'lucide-react';

const steps = [
  { number: 1, label: 'Address',  icon: <MapPin size={16} /> },
  { number: 2, label: 'Shipping', icon: <Truck size={16} /> },
  { number: 3, label: 'Payment',  icon: <CreditCard size={16} /> },
]

export const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="flex items-center justify-center w-full py-6">
      {steps.map((step, index) => (
        <div key={step.number} className={`flex items-center justify-start basis-1/3 nth-3:basis-auto`}>

          {/* Step */}
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all
              ${currentStep >= step.number
                ? 'bg-neutral-900 border-neutral-900 text-white'
                : 'bg-white border-neutral-300 text-neutral-400'
              }`}
            >
              {step.icon}
            </div>
            <div className="flex flex-col">
              <span className={`text-xs ${currentStep >= step.number ? 'text-neutral-400' : 'text-neutral-300'}`}>
                Step {step.number}
              </span>
              <span className={`text-sm font-medium ${currentStep >= step.number ? 'text-neutral-900' : 'text-neutral-400'}`}>
                {step.label}
              </span>
            </div>
          </div>

          {/* Connector line */}
          {index < steps.length - 1 && (
            <div className={`flex-1 h-px mx-4 ${currentStep > step.number ? 'bg-neutral-900' : 'bg-neutral-200'}`} />
          )}

        </div>
      ))}
    </div>
  )
}