import { CardInfoProps } from '@/pages/RecommendUsersPage';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Icon, IconButton } from '../Button/Icon';
import { ProfileImage } from '../ProfileImage';

export function UserCard(props: CardInfoProps) {
  return (
    <Card className="mb-16">
      <CardContent className="p-20">
        <div className="flex justify-between items-center mb-12">
          <Badge>{props.status}</Badge>
          <IconButton icon="bookmark" />
        </div>
        <div className="flex items-center">
          <div>
            <div className="flex items-center space-x-2">
              <p>{props.name}</p>
              <Icon icon="verified" size={12} />
              <p className="text-gr3 b4_light">{props.job}</p>
            </div>
            <p className="text-[#747474] mb-10">{props.intro}</p>
            <div className="text-gr4 b4_light">
              <span>스몰톡 {props.info.smallTalk}회 </span> ·{' '}
              <span>응답률 {props.info.responsePercent}%</span>·
            </div>
          </div>
          <div>
            <ProfileImage
              src={
                'https://cloudfour.com/examples/img-currentsrc/images/kitten-large.png'
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
