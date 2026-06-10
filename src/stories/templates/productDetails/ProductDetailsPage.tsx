import { NavBarStory } from "../../molecules/NavBar/NavBarStory";
import { BreadcrumbStory } from "../../atoms/Breadcrumb/BreadcrumbStory";
import { ProductDetail1Story } from "../../Sections/productDetail1/ProductDetail1Story";
import { ProductDetail2Story } from "../../Sections/productDetail2/ProductDetail2Story";
import { FooterStory } from "../../Sections/footer/Footer";



export function ProductDetailsPage() {
    return (
        <div>
            <NavBarStory />

            <div className="px-40 py-5 ">
                <BreadcrumbStory
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Smartphones' },
                        { label: 'Apple' },
                        { label: 'iPhone 14 Pro Max' },

                    ]}
                />
            </div>

            <div className="px-40 py-25">
                <ProductDetail1Story />
            </div>
            <div className="px-40 py-20 mb-7 bg-[#FAFAFA]">
                <ProductDetail2Story />
            </div>
            <FooterStory />

        </div>
    );
};