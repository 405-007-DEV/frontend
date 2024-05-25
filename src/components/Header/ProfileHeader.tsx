import { useNavigate } from 'react-router-dom';
import { Icon } from '../Button/Icon';
import { cn } from '@/lib/utils';

interface ProfileHeaderProps {
  title: string;
  className?: string;
}

export function ProfileHeader({ title, className }: ProfileHeaderProps) {
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        'w-full h-48 flex justify-between items-center px-20 py-11',
        className,
      )}
    >
      <div
        onClick={() => {
          navigate(-1);
        }}
      >
        <Icon icon="arrow_left" size={24} />
      </div>
      <h2 className="text-gr7 h2_bold">{title}</h2>
      <div>
        <Icon icon="share" size={24} />
      </div>
    </div>
  );
}
