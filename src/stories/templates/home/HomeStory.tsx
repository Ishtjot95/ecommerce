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

            <CategorySectionStory />

            <NewArrivalTabsStory />

            <PopularProductHomeStory />

            <ProductHomeStory />

            <BottomBannerStory />

            <FooterStory />
        </div>
    );
};