import { SpecSection } from "./SpecSection";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function ProductDetail2Story() {
    return (
        <div>
            <div className="mb-8">
                <h4 className="font-normal text-2xl mb-6">Details</h4>
                <p className="text-[#9D9D9D] font-normal text-sm">Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker,
                    leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand.
                    And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.
                </p>
            </div>
            <SpecSection
        title="Screen"
        specs={[
          { label: 'Screen diagonal',       value: '6.7"' },
          { label: 'The screen resolution', value: '2796×1290' },
          { label: 'The screen refresh rate', value: '120 Hz' },
          { label: 'The pixel density',     value: '460 ppi' },
          { label: 'Screen type',           value: 'OLED' },
        ]}
      />
      <Accordion type="single" collapsible>
        <AccordionItem value="more-specs" >
          <AccordionContent>
            <SpecSection
              title="CPU"
              specs={[
                { label: 'CPU',             value: 'A16 Bionic' },
                { label: 'Number of cores', value: '6' },
              ]}
            />

          </AccordionContent>
          <AccordionTrigger className="flex-0 basis-[14%] px-8 py-2.5 items-center border border-primary justify-center  text-sm font-normal hover:no-underline cursor-pointer">
            View More
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>
        </div>
    );
};