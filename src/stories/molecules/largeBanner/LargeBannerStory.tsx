import Iphone from "../../../assets/images/Iphone-Image.png";
import { Button } from '@/components/ui/button';


export function LargeBannerStory () {
    return (
        <div className="flex items-center justify-evenly  w-full bg-[#211C24] flex-wrap">
            <div className="flex flex-col items-start gap-3.5">
                <p className="text-[#ffffff] opacity-40 font-semibold text-xl">Pro.Beyond.</p>
                <h4 className="text-[#ffffff] text-7xl font-thin leading-14">IPhone 14 <span className="font-semibold">Pro</span></h4>
                <p className="text-[#ffffff] opacity-40">Created to change everything for the better. For everyone</p>
                <Button variant="outline" className="px-12 pb-3 pt-3 text-center">Shop Now</Button>
            </div>
            <img src={Iphone} alt="Banner" height="100px"  />
        </div>
    )
}