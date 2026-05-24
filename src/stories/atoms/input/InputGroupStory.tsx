import { Search } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";


export const InputGroupStory = () => {
  return (
    <InputGroup className="max-w-xs flex  bg-neutral-100 rounded-lg p-2">
      <InputGroupInput className="placeholder:text-neutral-400 placeholder:text-xs" placeholder="Search" />
      <InputGroupAddon className="pr-1.5" >
        <Search />
      </InputGroupAddon>
    </InputGroup>
  );
};
