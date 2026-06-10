import { NavBarStory } from "../../molecules/NavBar/NavBarStory";
import { LargeBannerStory } from "../../molecules/largeBanner/LargeBannerStory";
import { MultipleBannerStory } from "../../molecules/multipleBanner/MultipleBannerStory";
import { CategorySectionStory } from "../../molecules/categorySection/CategorySectionStory";
import { NewArrivalTabsStory } from "../../Sections/newArrivalTab/NewArrivalTabsStory";
import { PopularProductHomeStory } from "../../Sections/popularProductHome/PopularProductHomeStory";
import { ProductHomeStory } from "../../Sections/productHome/ProductHomeStory";
import { BottomBannerStory } from "../../Sections/bottombanner/BottomBannerStory";
import { FooterStory } from "../../Sections/footer/Footer";


export function HomeStory() {
    return (
        <div>
            <NavBarStory />

            <LargeBannerStory />

            <MultipleBannerStory />
            <div className="mt-20 mb-20 mx-40">
                <CategorySectionStory />
            </div>
            <div className="mt-15 mb-15 mx-40">
                <NewArrivalTabsStory />
            </div>

            <PopularProductHomeStory />
            <div className="mt-20 mb-20 mx-40">
                <ProductHomeStory />
            </div>

            <BottomBannerStory />

            <FooterStory />
        </div>
    );
};