import { Button } from '@/components/ui/button';
import type {ButtonProps} from '@/types'

const variantMap = {
  primary:     'primary',
  secondary:   'secondary',
  outline:     'outline',
  ghost:       'ghost',
  destructive: 'destructive',
  transparent: 'transparent',
  outlineBlk: 'outlineBlk'
} as const;


export const ButtonStory = ({btntype = "primary",text}:ButtonProps) => {
  return (
   <Button className='px-12 pb-3 pt-3 text-center' variant={variantMap[btntype]}>{text}</Button>
  );
};
