import { Icon } from '../Button/Icon';
import { ProfileImage } from '../ProfileImage';
import { Badge } from '../ui/badge';

export interface ChatCardProps {
  username: string;
  job: string;
  message: string;
  time: string;
  profileImg: string;
}

export function ChatCard({
  username,
  job,
  message,
  time,
  profileImg,
}: ChatCardProps) {
  return (
    <div className="py-14 space-x-15 flex items-center px-20">
      <div>
        <ProfileImage src={profileImg} alt="profile image" size="md" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2">
          <p className="b2_medium text-gr7">{username}</p>
          <Icon icon="verified" size={12} />
          <p className="text-gr3 b4_light">{job}</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="b3_light text-gr6 text-nowrap overflow-hidden text-ellipsis">
            {message}
          </p>
          <Badge variant={'notification'}>1</Badge>
        </div>
      </div>

      <div className="text-gr6 b4_light flex flex-col items-end justify-end h-full">
        {/* TODO: 접속 상태 UI */}
        <div className="h-20"></div>
        <p className="">{time}</p>
      </div>
    </div>
  );
}
