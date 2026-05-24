import { Button } from '@/components/ui/button';
import { ShoppingCart, User, Heart } from 'lucide-react';
import type {ButtonProps} from "@/types";

const variantMap = {
  primary: 'primary',
  secondary: 'secondary',
  outline: 'outline',
  ghost: 'ghost',
  destructive: 'destructive',
  transparent: 'transparent'
} as const;

export const ButtonIconsStory = ({ btntype = "primary" }: ButtonProps) => {
  return (
    <div className='flex'>
      <Button variant={variantMap[btntype]}>
        <ShoppingCart />
      </Button>
      <Button variant={variantMap[btntype]}>
        <User />
      </Button>
      <Button variant={variantMap[btntype]}>
        <Heart />
      </Button>
    </div>
  );
};