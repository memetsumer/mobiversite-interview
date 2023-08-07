import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRegion } from "@/context/RegionStore";

const SelectRegion = () => {
  const { changeRegion, region } = useRegion();

  return (
    <Select value={region} onValueChange={changeRegion}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="EN">English</SelectItem>
        <SelectItem value="TR">Turkish</SelectItem>
        <SelectItem value="DE">German</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectRegion;
