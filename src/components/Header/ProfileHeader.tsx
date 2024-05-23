import { useNavigate } from 'react-router-dom';
import { Icon } from '../Button/Icon';

interface ProfileHeaderProps {
  title: string;
}

export function ProfileHeader({ title }: ProfileHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="w-full h-48 flex justify-between items-center px-20 py-11 border-[1px]">
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
