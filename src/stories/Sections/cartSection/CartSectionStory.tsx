import BigPhone from "../../../assets/images/bigPhone1.png";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import Close from "../../../assets/icons/Close.png";
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import {
    Field,
    FieldLabel,
} from "@/components/ui/field"

export function CartSectionStory() {
    return (
        <div className="flex gap-10 items-start justify-center px-40 py-27 flex-wrap">
            <div className="flex  flex-col pb-7 h-full">
                <h4 className="mb-10 text-xl font-medium">Shopping Cart</h4>
                <div className="flex items-center border-b pb-6 mb-7">
                    <div className="flex" >
                        <div className="w-13  h-full">
                            <img src={BigPhone} alt="BigPhone" className="w-full object-contain" />
                        </div>
                    </div>
                    <div className="ml-6">
                        <p className="font-medium text-sm mb-2">Apple iPhone 14 Pro Max 128Gb Deep Purple</p>
                        <p className="font-light text-xs">#25139526913984</p>
                    </div>
                    <QuantitySelector
                        min={1}
                        max={10}
                        defaultValue={1}
                        onChange={(value) => console.log('Quantity:', value)}
                    />
                    <p className="mr-6">$1399</p>
                    <div className="w-6 h-6 p-0.5">
                        <img src={Close} alt="Close" className="w-full object-contain" />
                    </div>
                </div>
                <div className="flex items-center border-b pb-6 mb-7">
                    <div className="flex" >
                        <div className="w-13  h-full">
                            <img src={BigPhone} alt="BigPhone" className="w-full object-contain" />
                        </div>
                    </div>
                    <div className="ml-6">
                        <p className="font-medium text-sm mb-2">Apple iPhone 14 Pro Max 128Gb Deep Purple</p>
                        <p className="font-light text-xs">#25139526913984</p>
                    </div>
                    <QuantitySelector
                        min={1}
                        max={10}
                        defaultValue={1}
                        onChange={(value) => console.log('Quantity:', value)}
                    />
                    <p className="mr-6">$1399</p>
                    <div className="w-6 h-6 p-0.5">
                        <img src={Close} alt="Close" className="w-full object-contain" />
                    </div>
                </div>
                <div className="flex items-center border-b pb-6 mb-7">
                    <div className="flex" >
                        <div className="w-13  h-full">
                            <img src={BigPhone} alt="BigPhone" className="w-full object-contain" />
                        </div>
                    </div>
                    <div className="ml-6">
                        <p className="font-medium text-sm mb-2">Apple iPhone 14 Pro Max 128Gb Deep Purple</p>
                        <p className="font-light text-xs">#25139526913984</p>
                    </div>
                    <QuantitySelector
                        min={1}
                        max={10}
                        defaultValue={1}
                        onChange={(value) => console.log('Quantity:', value)}
                    />
                    <p className="mr-6">$1399</p>
                    <div className="w-6 h-6 p-0.5">
                        <img src={Close} alt="Close" className="w-full object-contain" />
                    </div>
                </div>
            </div>
            <div className=" py-10 px-14  grow shadow-lg/10 rounded-[6px]">
                <h4 className="mb-8 text-lg font-semibold">Order Summary</h4>
                <Field className="gap-1">
                    <FieldLabel className="font-normal text-xs">Discount code / Promo code</FieldLabel>
                    <Input
                        className="border py-2 pl-2 placeholder:text-[#979797] placeholder:font-light placeholder:text-sm rounded-[6px]"
                        type="text"
                        placeholder="Code"
                    />   
                </Field>
                <div className="flex items-center justify-between mt-5">
                    <p className="font-normal text-sm">Subtotal</p>
                    <p className="font-normal text-sm">$2347</p>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <p className="font-light text-sm">Estimated Tax</p>
                    <p className="font-normal text-sm">$2347</p>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <p className="font-light text-sm">Estimated shipping & Handling</p>
                    <p className="font-normal text-sm">$2347</p>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <p className="font-normal text-sm">Total</p>
                    <p className="font-normal text-sm">$2347</p>
                </div>
                <Button className='px-12 pb-3 pt-3 text-center w-full mt-10' variant="primary">Checkout</Button>
            </div>
        </div>
    );
};

