import { cn } from '@/lib/utils';
import type {NavLinkProps} from "@/types";


export const NavLinkStory = ({ label, to, isActive }: NavLinkProps) => {
  return (
    <a
      href={to}
      className={cn(
        'text-sm font-medium transition-colors duration-200 hover:text-foreground',
        isActive
          ? 'text-foreground border-b-2 border-foreground'
          : 'text-muted-foreground'
      )}
    >
      {label}
    </a>
  )
}