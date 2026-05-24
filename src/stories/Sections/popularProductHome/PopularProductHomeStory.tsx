import IPad from "../../../assets/images/Ipad.png";
import Watch from "../../../assets/images/Watch.png";
import MacbookPro from "../../../assets/images/MacbookPro.png";
import Phone from "../../../assets/images/Phone.png";
import { Button } from '@/components/ui/button';

export function PopularProductHomeStory() {
    return (
        <div className="flex">
            <div className="bg-[#F9F9F9] basis-1/4 flex flex-col m-auto pb-7 hover:bg-[#2C2C2C] transition delay-0 duration-100 ease-in group">
                <div className="h-80 flex items-center justify-center p-4">
                    <img className="max-h-full max-w-full object-contain" src={Watch} alt="Watch" />
                </div>
                <div className="w-8/10 m-auto flex flex-col items-start gap-3">
                    <h4 className="font-light text-3xl group-hover:text-[#ffffff] transition delay-0 duration-100 ease-in">Popular Products</h4>
                    <p className="text-[#909090] font-light text-[11px]/relaxed tracking-wide transition delay-0 duration-100 ease-in">iPad combines a magnificent 10.2-inch Retina display,
                        incredible performance, multitasking and ease of use.
                    </p>
                    <Button className='px-10 pb-3 pt-3 text-center group-hover:border-[#ffffff] group-hover:text-[#ffffff] transition delay-0 duration-100 ease-in' variant="outlineBlk">Shop Now</Button>
                </div>

            </div>
            <div className="bg-[#F9F9F9] basis-1/4 flex flex-col m-auto pb-7 hover:bg-[#2C2C2C] transition delay-0 duration-100 ease-in group">
                <div className="h-80 flex items-center justify-center p-4">
                    <img className="max-h-full max-w-full object-contain" src={IPad} alt="IPad" />
                </div>
                <div className="w-8/10 m-auto flex flex-col items-start gap-3">
                    <h4 className="font-light text-3xl group-hover:text-[#ffffff] transition delay-0 duration-100 ease-in">Ipad Pro</h4>
                    <p className="text-[#909090] font-light text-[11px]/relaxed tracking-wide transition delay-0 duration-100 ease-in">iPad combines a magnificent 10.2-inch Retina display,
                        incredible performance, multitasking and ease of use.
                    </p>
                    <Button className='px-10 pb-3 pt-3 text-center group-hover:border-[#ffffff] group-hover:text-[#ffffff] transition delay-0 duration-100 ease-in' variant="outlineBlk">Shop Now</Button>
                </div>

            </div>
            <div className="bg-[#F9F9F9] basis-1/4 flex flex-col m-auto pb-7 hover:bg-[#2C2C2C] transition delay-0 duration-100 ease-in group">
                <div className="h-80 flex items-center justify-center p-4">
                    <img className="max-h-full max-w-full object-contain" src={Phone} alt="Phone" />
                </div>
                <div className="w-8/10 m-auto flex flex-col items-start gap-3">
                    <h4 className="font-light text-3xl group-hover:text-[#ffffff] transition delay-0 duration-100 ease-in">Samsung Galaxy</h4>
                    <p className="text-[#909090] font-light text-[11px]/relaxed tracking-wide transition delay-0 duration-100 ease-in">iPad combines a magnificent 10.2-inch Retina display,
                        incredible performance, multitasking and ease of use.
                    </p>
                    <Button className='px-10 pb-3 pt-3 text-center group-hover:border-[#ffffff] group-hover:text-[#ffffff] transition delay-0 duration-100 ease-in' variant="outlineBlk">Shop Now</Button>
                </div>

            </div>
            <div className="bg-[#F9F9F9] basis-1/4 flex flex-col m-auto pb-7 hover:bg-[#2C2C2C] transition delay-0 duration-100 ease-in group">
                <div className="h-80 flex items-center justify-center p-4">
                    <img className="max-h-full max-w-full object-contain" src={MacbookPro} alt="MacbookPro" />
                </div>
                <div className="w-8/10 m-auto flex flex-col items-start gap-3">
                    <h4 className="font-light text-3xl group-hover:text-[#ffffff] transition delay-0 duration-100 ease-in">Macbook Pro</h4>
                    <p className="text-[#909090] font-light text-[11px]/relaxed tracking-wide transition delay-0 duration-100 ease-in">iPad combines a magnificent 10.2-inch Retina display,
                        incredible performance, multitasking and ease of use.
                    </p>
                    <Button className='px-10 pb-3 pt-3 text-center group-hover:border-[#ffffff] group-hover:text-[#ffffff] transition delay-0 duration-100 ease-in' variant="outlineBlk">Shop Now</Button>
                </div>

            </div>
        </div>
    );
};