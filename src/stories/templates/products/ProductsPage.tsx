import { NavBarStory } from "../../molecules/NavBar/NavBarStory";
import { BreadcrumbStory } from "../../atoms/Breadcrumb/BreadcrumbStory";
import { AccordionStory } from "../../atoms/Accordion/AccordionStory";
import { ProductCardStory } from "../../molecules/ProductCard/ProductCardStory";
import { FooterStory } from "../../Sections/footer/Footer";

export function ProductsPage() {

    return (
        <div>
            <NavBarStory />

            <div className="px-40 py-5 ">
                <BreadcrumbStory
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Smartphones' },
                    ]}
                />
            </div>
            <div className="flex justify-center px-40 gap-8 mb-14" >
                <div className="basis-[20%]">
                    <AccordionStory />
                    <AccordionStory />
                    <AccordionStory />
                    <AccordionStory />
                </div>
                <div className="basis-[80%]">
                    <div className="ml-2">
                        <p>Selected Products:<span>85</span></p>
                    </div>
                    <div className="flex flex-wrap justify-items-start gap-10 mt-6">
                        <div className="basis-[30%]">
                            <ProductCardStory />
                        </div>
                        <div className="basis-[30%]">
                            <ProductCardStory />
                        </div>
                        <div className="basis-[30%]">
                            <ProductCardStory />
                        </div>
                        <div className="basis-[30%]">
                            <ProductCardStory />
                        </div>
                        <div className="basis-[30%]">
                            <ProductCardStory />
                        </div>
                        <div className="basis-[30%]">
                            <ProductCardStory />
                        </div>
                        <div className="basis-[30%]">
                            <ProductCardStory />
                        </div>
                        <div className="basis-[30%]">
                            <ProductCardStory />
                        </div>
                        <div className="basis-[30%]">
                            <ProductCardStory />
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <FooterStory />
            </div>
        </div>
    );
};