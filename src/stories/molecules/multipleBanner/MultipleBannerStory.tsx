import Playstation from "../../../assets/images/PlayStation.png";
import AirpodsMax from "../../../assets/images/airpodMax.png";
import VisionPro from "../../../assets/images/visionPro.png";
import Macbook from "../../../assets/images/MacBook.png";
import { Button } from '@/components/ui/button';

export function MultipleBannerStory() {
    return (
        <div className="flex ">
            <div className="basis-1/2">
                <div className="flex bg-background items-center">
                    <img src={Playstation} width={"260px"} />
                    <div className="w-1/2 mr-auto">
                        <h4 className="font-medium text-4xl mb-2.5">Playstation 5</h4>
                        <p className="text-[#909090] font-normal text-xs">Incredibly powerful CPUs, GPUs, and an SSD with
                            integrated I/O will redefine your PlayStation experience.</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex bg-[#EDEDED] items-center justify-between gap-7 basis-1/2">
                        <img src={AirpodsMax} width={"80px"} />
                        <div className="w-1/2 mr-auto">
                            <h4 className="font-extralight text-2xl">Apple AirPods <span className="font-normal">Max</span></h4>
                            <p className="text-[#909090] font-normal text-xs">Computational audio. Listen, it's powerful</p>
                        </div>
                    </div>
                    <div className="flex bg-[#353535] items-center justify-between gap-7 basis-1/2">
                        <img src={VisionPro} width={"120px"} className="object-contain"  />
                        <div className="w-1/3 mr-auto">
                            <h4 className="text-background font-extralight text-2xl">Apple Vision <span className="font-normal">Pro</span></h4>
                            <p className="text-[#909090] font-normal text-xs">An immersive way to experience entertainment</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex bg-[#EDEDED] items-center justify-between basis-1/2">
                <div className="ml-auto w-1/2 flex flex-col items-start gap-3">
                    <h4 className="text-black text-5xl font-thin">Macbook <span className="font-normal">Air</span></h4>
                    <p className="text-[#909090] text-xs font-normal">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                    <Button variant="outlineBlk" className="px-12 pb-3 pt-3 text-center font-normal">Shop Now</Button>
                </div>
                <img src={Macbook} width={"220px"} />
            </div>
        </div>
    );
};