import { NavBarStory } from "../../molecules/NavBar/NavBarStory";
import {CartSectionStory} from "../../Sections/cartSection/CartSectionStory";
import {FooterStory} from "../../Sections/footer/Footer";


export function ShoppingCartStory () {
    return (
        <div>
            <NavBarStory />

            <CartSectionStory />
            <FooterStory />

        </div>
    );
};