import { Icon } from '@/components/Button/Icon';
import { Input } from '@/components/ui/input';

interface SearchContainerProps {
  onClose: () => void;
}

export function SearchContainer({ onClose }: SearchContainerProps) {
  return (
    <div>
      <div className="w-full h-48 flex justify-between items-center px-20 mt-8">
        <div className="cursor-pointer" onClick={onClose}>
          <Icon icon="arrow_left" />
        </div>
        <Input
          placeholder="직무, 회사, 연차로 검색하기"
          className="text-gr8 b2_medium py-10 px-18 h-40 bg-gr1 rounded-full"
        />
      </div>
    </div>
  );
}
