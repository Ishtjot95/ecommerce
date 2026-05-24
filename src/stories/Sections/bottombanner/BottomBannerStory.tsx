import  Banner2  from "../../../assets/images/Banner2.png";
import { Button } from '@/components/ui/button';

export function BottomBannerStory() {
    return (
        <div style={{ backgroundImage: `url(${Banner2})` }}
        className=" w-full h-112 bg-cover bg-center bg-no-repeat  flex">
            {/* <img src={Banner2} className="w-full object-contain" /> */}
            <div className="flex justify-center items-center w-full flex-col">
                <h4 className="text-background font-thin text-6xl">Big Summer <span className="font-medium">Sale</span></h4>
                <p className="text-[#787878] text-sm mt-3 mb-10">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                <Button className='px-12 pb-3 pt-3 text-center' variant="outline">Shop Now</Button>
            </div>
        </div>
    );
};