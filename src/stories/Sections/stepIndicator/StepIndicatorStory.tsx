import {StepIndicator} from "@/components/ui/step-Indicator";
import {useState} from "react";
import { AddressStep } from "./AddressStep";
import {ShippingStep} from "./ShippingStep";
import {PaymentStep} from "./PaymentStep";

export function StepIndicatorStory () {
    const [currentStep, setCurrentStep] = useState(1)

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))
    return(
        <div>
            <div className="flex flex-col mx-auto justify-center items-center px-40 py-8">

      <StepIndicator currentStep={currentStep} />

      <div className="mt-8 w-full">
        {currentStep === 1 && (
          <AddressStep onNext={nextStep} onBack={prevStep} />
        )}
        {currentStep === 2 && (
          <ShippingStep onNext={nextStep} onBack={prevStep} />
        )}
        {currentStep === 3 && (
          <PaymentStep onNext={nextStep} onBack={prevStep} />
        )}
      </div>

    </div>
        </div>
    );
};