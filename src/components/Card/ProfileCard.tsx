import { cn } from '@/lib/utils';
import { Icon, IconButton } from '../Button/Icon';
import { ProfileImage } from '../ProfileImage';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader } from '../ui/card';

export interface ProfileCardProps {
  id: string;
  name: string;
  job: string;
  company: string;
  year: string;
  profileImg: string;
  info: {
    smallTalk: number;
    responsePercent: number;
  };
  isBookmark: boolean;
  className?: string;
}

export function ProfileCard({
  profileImg,
  name,
  job,
  company,
  year,
  info,
  isBookmark,
  className,
}: ProfileCardProps) {
  return (
    <Card className={cn('py-30 px-10', className)}>
      <CardHeader className="border-b-[1px] border-b-gr1 items-center pb-20">
        <div className="ml-auto">
          <Icon icon="kebab_light" size={24} />
        </div>
        <ProfileImage src={profileImg} size="lg" className="mt-[-2px]" />
      </CardHeader>
      <CardContent className="p-10 pb-0 space-y-[10px]">
        <div className="flex items-center w-full justify-between">
          <div className="space-x-2 flex items-center">
            <p className="h1_bold text-grs">{name}</p>
            <Icon icon="verified" />
          </div>
          <IconButton
            icon={isBookmark ? 'bookmark_filled' : 'bookmark'}
            // onClick={() => {}}
          />
        </div>

        <div className="flex gap-2">
          <p className="b2_bold text-gr3">{company}</p>
          <p className="b2_light text-gr3">
            {job} | {year}
          </p>
        </div>

        <div className="space-x-4">
          <Badge variant={'outline'}>
            스몰챗
            <span className="pl-2 b5_light text-bp"> {info.smallTalk}회</span>
          </Badge>
          <Badge variant={'outline'}>
            응답률
            <span className="pl-2 b5_light text-bp">
              {info.responsePercent}%
            </span>
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
