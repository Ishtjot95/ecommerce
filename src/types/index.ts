
// ----Button----
export interface ButtonProps {
  btntype?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'transparent' | 'outlineBlk' ,
  text?: string;
};

// ----NavLink----
export interface NavLinkProps {
  label: string
  to: string
  isActive?: boolean
};

// ----Products----
export interface Product {
  id: number
  name: string
  price: number
  image: string
  isWishlisted?: boolean
}
