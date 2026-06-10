
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
};

// ----Breadcrumb----
export interface BreadcrumbItem {
  label: string
  href?: string
};
export interface BreadcrumbProps {
  items: BreadcrumbItem[]
};

// ----Product Detail-----
interface Spec {
  label: string
  value: string | string[]
};
export interface SpecSectionProps {
  title: string
  specs: Spec[]
}
// ---- For stepper ----
export interface StepProps {
  onNext: () => void
  onBack: () => void
}


