import IPhone from "../../../assets/images/Iphone 14 pro 1.png";
import Like from "../../../assets/icons/Like.png";
import { Button } from '@/components/ui/button';

export function ProductCardStory() {
    return (
        // remove margin , width
        <div className="bg-[#F9F9F9] w-65 flex flex-col m-auto pb-4 px-4 pt-5 rounded-lg">
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
    );
};