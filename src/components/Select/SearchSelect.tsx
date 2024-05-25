import {
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SelectType } from '@/types';
import { Icon } from '../Button/Icon';

interface SearchSelectProps {
  placeholder: string;
  items: SelectType[];
  value: string;
  onChange: (value: string) => void;
}

export function SearchSelect({
  placeholder,
  items,
  value,
  onChange,
}: SearchSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        className={`w-fit max-w-200 b2_medium h-30 px-8 rounded-full ${value ? 'bg-b1 text-bp border-bp' : 'text-gr4'}`}
      >
        <SelectValue placeholder={placeholder} />
        <SelectIcon className="pl-4">
          <Icon
            icon={value ? 'arrow_bottom_selected' : 'arrow_bottom'}
            size={12}
          />
        </SelectIcon>
      </SelectTrigger>
      <SelectContent className="p-8 text-[#1d1d1d] bg-white z-10">
        <SelectGroup>
          {items.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              className={`${item.value === value ? 'bg-b1 text-bp' : ''} cursor-pointer`}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
