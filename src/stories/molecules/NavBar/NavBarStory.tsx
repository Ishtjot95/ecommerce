import { Search } from "lucide-react";
import { Button } from '@/components/ui/button';
import { ShoppingCart, User, Heart } from 'lucide-react';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";




export function NavBarStory() {
    return (
        <div className="flex items-center gap-14 px-40 py-3 justify-evenly">

            <span className="font-bold text-lg ">MAGNUM</span>

            <InputGroup className="flex bg-neutral-100 rounded-lg p-2 grow">
                <InputGroupInput className="placeholder:text-neutral-400 placeholder:text-xs" placeholder="Search" />
                <InputGroupAddon className="pr-1.5" >
                    <Search />
                </InputGroupAddon>
            </InputGroup>
            <div className="flex items-center gap-12">
                <a className='text-sm font-medium transition-colors duration-200 hover:text-foreground cursor-pointer'>Home</a>
                <a className='text-sm font-medium transition-colors duration-200 hover:text-foreground cursor-pointer'>About</a>
                <a className='text-sm font-medium transition-colors duration-200 hover:text-foreground cursor-pointer'>Contact Us</a>
                <a className='text-sm font-medium transition-colors duration-200 hover:text-foreground cursor-pointer'>Blog</a>
            </div>
            <div className='flex gap-4.5 '>
                <Button variant="transparent">
                    <Heart />
                </Button>
                <Button variant="transparent">
                    <ShoppingCart />
                </Button>
                <Button variant="transparent">
                    <User />
                </Button>
                
            </div>
        </div>
    )
}