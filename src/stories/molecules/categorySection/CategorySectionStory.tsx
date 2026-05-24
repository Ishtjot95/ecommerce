import Phone from "../../../assets/icons/Phones.png";
import Camera from "../../../assets/icons/Cameras.png";
import Headphone from "../../../assets/icons/Headphones.png";
import Computer from "../../../assets/icons/Computers.png";
import Gaming from "../../../assets/icons/Gaming.png";
import Watch from "../../../assets/icons/SmartWatches.png";

export function CategorySectionStory() {
    return (
        <div>
            <h4 className="mb-8 font-normal text-xl">Browse By Category</h4>
            <div className="flex gap-8">
                <div className="flex flex-col items-center justify-center bg-[#EDEDED] rounded-xl basis-1/6 pt-6 pb-6 gap-2">
                    <img src={Phone} />
                    <p>Phones</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-[#EDEDED] rounded-xl basis-1/6 pt-6 pb-6 gap-2">
                    <img src={Watch} />
                    <p>Smart Watches</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-[#EDEDED] rounded-xl basis-1/6 pt-6 pb-6 gap-2">
                    <img src={Camera} />
                    <p>Cameras</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-[#EDEDED] rounded-xl basis-1/6 pt-6 pb-6 gap-2">
                    <img src={Headphone} />
                    <p>Headphones</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-[#EDEDED] rounded-xl basis-1/6 pt-6 pb-6 gap-2">
                    <img src={Computer} />
                    <p>Computers</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-[#EDEDED] rounded-xl basis-1/6 pt-6 pb-6 gap-2">
                    <img src={Gaming} />
                    <p>Gaming</p>
                </div>
            </div>
        </div>
    );
};