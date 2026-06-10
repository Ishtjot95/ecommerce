import { useState } from "react";
import { Button } from '@/components/ui/button';
import smallPhone1 from "../../../assets/images//smallPhone1.png";
import smallPhone2 from "../../../assets/images/smallphone2.png";
import smallPhone3 from "../../../assets/images/smallphone3.png";
import smallPhone4 from "../../../assets/images/smallphone4.png";
import bigPhone1 from "../../../assets/images/bigPhone1.png";
import bigPhone2 from "../../../assets/images/bigPhone2.png";
import bigPhone3 from "../../../assets/images/bigPhone3.png";
import bigPhone4 from "../../../assets/images/bigPhone4.png";
import Screensize from "../../../assets/icons/Screensize.png";
import Smartphone from "../../../assets/icons/smartphone-rotate-2.png";
import Cores from "../../../assets/icons/cores.png";
import Camera from "../../../assets/icons/cameraIcon.png";
import Battery from "../../../assets/icons/battery.png";
import Truck from "../../../assets/icons/delivery-truck.png";
import Shop from "../../../assets/icons/shop-2.png";
import Verify from "../../../assets/icons/verify.png";



export function ProductDetail1Story() {
    const thumbnails = [smallPhone1, smallPhone2, smallPhone3, smallPhone4]
    const largeImages = [bigPhone1, bigPhone2, bigPhone3, bigPhone4]
    const [isActive, setIsActive] = useState<number>(0);

    return (
        <div className="flex justify-center items-center gap-9">
            <div className="flex">
                <div className="flex flex-col justify-center mr-12">
                    {thumbnails.map((thumb, i) => (
                        <div key={i} className={`cursor-pointer mb-2 ${isActive === i ? 'opacity-100' : 'opacity-40'}`} onClick={() => setIsActive(i)}>
                            <img src={thumb} alt="smallPhone1" className="w-11 h-14 object-contain" />
                        </div>

                    ))}
                </div>
                <div className="flex items-center justify-center w-60 h-77.5">
                    <img src={largeImages[isActive]} alt="bigPhone" className="w-full h-full object-contain" />
                </div>
            </div>
            <div>
                <h4 className="text-primary font-medium text-3xl mb-5">Apple iPhone 14 Pro Max</h4>
                <div className="flex items-center gap-4">
                    <p className="font-normal text-2xl">$1399</p>
                    <p className="line-through text-[#A0A0A0] font-light text-xl">$1499</p>
                </div>
                <div className="flex items-center gap-3 mb-5">
                    <span>Select color :</span>
                    <div className="flex gap-1.5">
                        <span className="w-6 h-6 bg-primary basis-1/3 rounded-[50%]"></span>
                        <span className="w-6 h-6 bg-[#781DBC] basis-1/3 rounded-[50%]"></span>
                        <span className="w-6 h-6 bg-[#E8E8E8] basis-1/3 rounded-[50%]"></span>
                    </div>
                </div>
                <div>
                    <div className="flex gap-3  justify-center">
                        <p className="rounded-[8px] border border-[#D5D5D5] basis-1/4 py-2.5 text-center text-xs text-[#D5D5D5] hover:border-primary hover:border hover:text-primary cursor-pointer transition-all delay-20">128GB</p>
                        <p className="rounded-[8px] border border-[#D5D5D5] basis-1/4 py-2.5 text-center text-xs text-[#D5D5D5] hover:border-primary hover:border hover:text-primary cursor-pointer transition-all delay-20">256GB</p>
                        <p className="rounded-[8px] border border-[#D5D5D5] basis-1/4 py-2.5 text-center text-xs text-[#D5D5D5] hover:border-primary hover:border hover:text-primary cursor-pointer transition-all delay-20">512GB</p>
                        <p className="rounded-[8px] border border-[#D5D5D5] basis-1/4 py-2.5 text-center text-xs text-[#D5D5D5] hover:border-primary hover:border hover:text-primary cursor-pointer transition-all delay-20">1TB</p>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex  gap-3">
                        <div className="flex items-center bg-[#F4F4F4] rounded-[6px] gap-2 py-3 px-1.5 basis-1/3">
                            <div className="w-5 h-6">
                                <img src={Screensize} alt="Screensize" className="w-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-light text-[#A7A7A7]">Screen size</span>
                                <span className="text-xs font-normal text-primary">6.7"</span>
                            </div>
                        </div>
                        <div className="flex items-center bg-[#F4F4F4] rounded-[6px] gap-2 py-3 px-1.5 basis-1/3">
                            <div className="w-5 h-6">
                                <img src={Smartphone} alt="Smartphone" className="w-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-light text-[#A7A7A7]">CPU</span>
                                <span className="text-xs font-normal text-primary">Apple A16 Bionic</span>
                            </div>
                        </div>
                        <div className="flex items-center bg-[#F4F4F4] rounded-[6px] gap-2 py-3 px-1.5 basis-1/3">
                            <div className="w-5 h-6">
                                <img src={Cores} alt="Cores" className="w-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-light text-[#A7A7A7]">Number of Cores</span>
                                <span className="text-xs font-normal text-primary">6</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex  gap-3 mt-4">
                        <div className="flex items-center bg-[#F4F4F4] rounded-[6px] gap-2 py-3 px-1.5 basis-1/3">
                            <div className="w-5 h-6">
                                <img src={Camera} alt="Camera" className="w-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-light text-[#A7A7A7]">Main camera</span>
                                <span className="text-xs font-normal text-primary">48-12 -12 MP</span>
                            </div>
                        </div>
                        <div className="flex items-center bg-[#F4F4F4] rounded-[6px] gap-2 py-3 px-1.5 basis-1/3">
                            <div className="w-5 h-6">
                                <img src={Camera} alt="Camera" className="w-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-light text-[#A7A7A7]">Front-camera</span>
                                <span className="text-xs font-normal text-primary">12 MP</span>
                            </div>
                        </div>
                        <div className="flex items-center bg-[#F4F4F4] rounded-[6px] gap-2 py-3 px-1.5 basis-1/3">
                            <div className="w-5 h-6">
                                <img src={Battery} alt="Battery" className="w-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-light text-[#A7A7A7]">Battery capacity</span>
                                <span className="text-xs font-normal text-primary">4323 mAh</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex  gap-4 mt-8">
                        <Button className='px-12 pb-3 pt-3 text-center basis-1/2' variant="outlineBlk">Add to Wishlist</Button>
                        <Button className='px-12 pb-3 pt-3 text-center basis-1/2' variant="primary">Add to Card</Button>
                    </div>
                    <div className="flex gap-9 mt-6">
                        <div className="flex items-center gap-3.5">
                            <div className="bg-[#F6F6F6] p-3 rounded-[8px]">
                                <img src={Truck} alt="Truck" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-normal text-xs text-[#717171]">Free Delivery</span>
                                <span className="font-normal text-xs text-primary">1-2 day</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3.5">
                            <div className="bg-[#F6F6F6] p-3 rounded-[8px]">
                                <img src={Shop} alt="Shop" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-normal text-xs text-[#717171]">In Stock</span>
                                <span className="font-normal text-xs text-primary">Today</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3.5">
                            <div className="bg-[#F6F6F6] p-3 rounded-[8px]">
                                <img src={Verify} alt="Verify" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-normal text-xs text-[#717171]">Guaranteed</span>
                                <span className="font-normal text-xs text-primary">1 year</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};