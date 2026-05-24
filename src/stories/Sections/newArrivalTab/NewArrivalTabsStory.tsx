import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IPhone from "../../../assets/images/Iphone 14 pro 1.png";
import IphoneBuds from "../../../assets/images/IphoneBuds.png";
import SmartWatch from "../../../assets/images/smartWatch.png";
import Iphone13 from "../../../assets/images/Iphone13.png";
import Like from "../../../assets/icons/Like.png";
import { Button } from '@/components/ui/button';
import type { Product } from '@/types/index';

export const products: Product[] = [
        {
            id: 1,
            name: 'Apple iPhone 14 Pro Max 128GB Deep Purple',
            price: 900,
            image: IPhone,
            isWishlisted: false,
        },
        {
            id: 2,
            name: 'Blackmagic Pocket Cinema Camera 6k',
            price: 2535,
            image: IphoneBuds,
            isWishlisted: false,
        },
        {
            id: 3,
            name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium',
            price: 399,
            image: SmartWatch,
            isWishlisted: false,
        },
        {
            id: 4,
            name: 'AirPods Max Silver Starlight Aluminium',
            price: 549,
            image: Iphone13,
            isWishlisted: false,
        },
        {
            id: 5,
            name: 'Samsung Galaxy Watch6 Classic 47mm Black',
            price: 369,
            image: IPhone,
            isWishlisted: false,
        },
        {
            id: 6,
            name: 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black',
            price: 1799,
            image: IphoneBuds,
            isWishlisted: true,
        },
        {
            id: 7,
            name: 'Galaxy Buds FE Graphite',
            price: 99.99,
            image: SmartWatch,
            isWishlisted: false,
        },
        {
            id: 8,
            name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
            price: 398,
            image: Iphone13,
            isWishlisted: false,
        },
    ]


export function NewArrivalTabsStory() {
    
    return (
        <div>
            <Tabs  defaultValue="NewArrival" >
                <TabsList variant="line">
                    <TabsTrigger value="NewArrival">New Arrival</TabsTrigger>
                    <TabsTrigger value="Bestseller">Bestseller</TabsTrigger>
                    <TabsTrigger value="FeaturedProducts">Featured Products</TabsTrigger>
                </TabsList>
                <TabsContent value="NewArrival" className="flex flex-wrap w-full justify-evenly">
                    <>
                        {products.map((product) => {
                            return (
                                <div className="basis-1/4  mt-4">
                                    <div className="bg-[#F9F9F9] w-65 flex flex-col m-auto pb-4 px-4 pt-5 rounded-lg">
                                        <img className="w-8 self-end" src={Like} alt="Like" />
                                        <div className="h-50 flex items-center justify-center ">
                                            <img className="max-h-full max-w-full object-contain" src={product.image} alt="IPhone" />
                                        </div>
                                        <div className="w-8/10 m-auto flex flex-col items-center gap-3">
                                            <h4 className="font-normal text-center text-sm ">{product.name}</h4>
                                            <p className="font-medium text-xl">${product.price}</p>
                                            <Button className='font-light text-xs px-10 pb-2 pt-2 text-center' variant="primary">Buy Now</Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                </TabsContent>
                <TabsContent value="Bestseller">Change your password here.</TabsContent>
            </Tabs>
        </div>
    );
}