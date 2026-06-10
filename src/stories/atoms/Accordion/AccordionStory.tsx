import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { InputGroupStory } from "../input/InputGroupStory"
import { Checkbox } from "@/components/ui/checkbox"


export function AccordionStory() {
    return (
        <>
            {/* remove width from "Accordion" w-[20%] when using component */}
            <Accordion type="multiple" defaultValue={["item-1"]} >
                <AccordionItem value="item-1 ">
                    <AccordionTrigger className="items-center hover:no-underline cursor-pointer border-b border-primary border-t-0 border-x-0 rounded-b-none mb-4">
                        Brand
                    </AccordionTrigger>

                    <AccordionContent>
                        <InputGroupStory />
                        <ul className="mt-4">
                            <li >
                                <label className="flex gap-2 font-normal text-sm items-center cursor-pointer">
                                    <Checkbox />
                                    <p>Apple</p>
                                </label>
                            </li>
                            <li >
                                <label className="flex gap-2 font-normal text-sm items-center cursor-pointer">
                                    <Checkbox />
                                    <p>Samsung</p>
                                </label>
                            </li>
                            <li >
                                <label className="flex gap-2 font-normal text-sm items-center cursor-pointer">
                                    <Checkbox />
                                    <p>Xiaomi</p>
                                </label>
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>

            </Accordion>

        </>
    );
};