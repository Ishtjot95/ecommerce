import { NavBarStory } from "../../molecules/NavBar/NavBarStory";
import {StepIndicatorStory} from "../../Sections/stepIndicator/StepIndicatorStory";
import {FooterStory} from "../../Sections/footer/Footer";



export function Checkout () {
    return (
        <div>
            <NavBarStory />
            <StepIndicatorStory />
            <FooterStory />
        </div>
    );
};