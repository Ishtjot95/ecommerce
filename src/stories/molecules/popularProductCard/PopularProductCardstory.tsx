import IPad from "../../../assets/images/Ipad.png";
import { Button } from '@/components/ui/button';

export function PopularProductCardstory() {
    return (
        // remove margin , width
        <div className="bg-[#F9F9F9] w-75 flex flex-col m-auto pb-4 hover:bg-[#2C2C2C] transition delay-0 duration-100 ease-in group">
             <div className="h-70 flex items-center justify-center p-4">
            <img className="max-h-full max-w-full object-contain" src={IPad} alt="iPad Pro"  />
            </div>
            <div className="w-8/10 m-auto flex flex-col items-start gap-3">
                <h4 className="font-light text-3xl group-hover:text-[#ffffff] transition delay-0 duration-100 ease-in">Ipad Pro</h4>
                <p className="text-[#909090] font-light text-[11px]/relaxed tracking-wide transition delay-0 duration-100 ease-in">iPad combines a magnificent 10.2-inch Retina display,
                    incredible performance, multitasking and ease of use.
                </p>
                <Button className='px-10 pb-3 pt-3 text-center group-hover:border-[#ffffff] group-hover:text-[#ffffff] transition delay-0 duration-100 ease-in' variant="outlineBlk">Shop Now</Button>
            </div>

        </div>
    );
};