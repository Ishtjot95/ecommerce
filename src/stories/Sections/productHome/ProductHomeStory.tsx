import IPhone from "../../../assets/images/Iphone 14 pro 1.png";
import IphoneBuds from "../../../assets/images/IphoneBuds.png";
import SmartWatch from "../../../assets/images/smartWatch.png";
import Iphone13 from "../../../assets/images/Iphone13.png";
import Like from "../../../assets/icons/Like.png";
import { Button } from '@/components/ui/button';

export function ProductHomeStory() {
    return (
        <div>
            <h4 className="mb-6 text-2xl">Discounts up to -50%</h4>
            <div className="flex gap-4">
                <div className="bg-[#F6F6F6] basis-1/4 flex flex-col m-auto pb-4 px-4 pt-5 rounded-lg">
                    <img className="w-8 self-end" src={Like} alt="Like" />
                    <div className="h-50 flex items-center justify-center ">
                        <img className="max-h-full max-w-full object-contain" src={IPhone} alt="IPhone" />
                    </div>
                    <div className="w-8/10 m-auto flex flex-col items-center gap-3">
                        <h4 className="font-normal text-center text-sm ">Apple iPhone 14 Pro 512GB Gold (MQ233)</h4>
                        <p className="font-medium text-xl">$1437</p>
                        <Button className='font-light text-xs px-10 pb-2 pt-2 text-center' variant="primary">Buy Now</Button>
                    </div>
                </div>
                <div className="bg-[#F6F6F6] basis-1/4 flex flex-col m-auto pb-4 px-4 pt-5 rounded-lg">
                    <img className="w-8 self-end" src={Like} alt="Like" />
                    <div className="h-50 flex items-center justify-center ">
                        <img className="max-h-full max-w-full object-contain" src={IphoneBuds} alt="IphoneBuds" />
                    </div>
                    <div className="w-8/10 m-auto flex flex-col items-center gap-3">
                        <h4 className="font-normal text-center text-sm ">AirPods Max Silver Starlight Aluminium</h4>
                        <p className="font-medium text-xl">$549</p>
                        <Button className='font-light text-xs px-10 pb-2 pt-2 text-center' variant="primary">Buy Now</Button>
                    </div>
                </div>
                <div className="bg-[#F6F6F6] basis-1/4 flex flex-col m-auto pb-4 px-4 pt-5 rounded-lg">
                    <img className="w-8 self-end" src={Like} alt="Like" />
                    <div className="h-50 flex items-center justify-center ">
                        <img className="max-h-full max-w-full object-contain" src={SmartWatch} alt="SmartWatch" />
                    </div>
                    <div className="w-8/10 m-auto flex flex-col items-center gap-3">
                        <h4 className="font-normal text-center text-sm ">Apple Watch Series 9 GPS 41mm Starlight Aluminium </h4>
                        <p className="font-medium text-xl">$399</p>
                        <Button className='font-light text-xs px-10 pb-2 pt-2 text-center' variant="primary">Buy Now</Button>
                    </div>
                </div>
                <div className="bg-[#F6F6F6] basis-1/4 flex flex-col m-auto pb-4 px-4 pt-5 rounded-lg">
                    <img className="w-8 self-end" src={Like} alt="Like" />
                    <div className="h-50 flex items-center justify-center ">
                        <img className="max-h-full max-w-full object-contain" src={Iphone13} alt="Iphone13" />
                    </div>
                    <div className="w-8/10 m-auto flex flex-col items-center gap-3">
                        <h4 className="font-normal text-center text-sm ">Apple iPhone 14 Pro 512GB Gold (MQ233)</h4>
                        <p className="font-medium text-xl">$1437</p>
                        <Button className='font-light text-xs px-10 pb-2 pt-2 text-center' variant="primary">Buy Now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};