import { CardInfoProps } from '@/pages/RecommendUsersPage';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Icon, IconButton } from '../Button/Icon';
import { ProfileImage } from '../ProfileImage';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { privateAxios } from '@/api/axiosInstance';
import { LoginBottomSheet } from '../Bottom/LoginBottomSheet';

const useHandleBookmarkMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (isBookmark: boolean) =>
      privateAxios.post('/api/mock/data', { isBookmark: isBookmark }),
    onMutate: async (isBookmark) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['bookmarkUseros'] });

      // Snapshot the previous value
      const previousBookmark = queryClient.getQueryData(['bookmarkUser']);

      // Optimistically update to the new value
      queryClient.setQueryData(['bookmarkUser'], (old: boolean) => isBookmark);

      // Return a context object with the snapshotted value
      return { previousBookmark };
    },
    onError: (err, _, context: any) => {
      queryClient.setQueryData(['bookmarkUser'], context.previousBookmark);
    },

    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ['bookmarkUser'],
      });
    },
  });
};

export function UserCard(props: CardInfoProps) {
  // TODO: optimistic update with useMutation after bookmarked

  return (
    <Card
      className={`mb-16 ${props.onClick ? 'cursor-pointer' : ''}`}
      onClick={props.onClick}
    >
      <CardContent className="p-20">
        <div className="flex justify-between items-center mb-12">
          <Badge>{props.status}</Badge>
          {props.isBookmark !== undefined && (
            <IconButton
              size={20}
              className="h-20"
              icon={props.isBookmark ? 'bookmark_filled' : 'bookmark'}
              onClick={() => {
                // TODO: mutate 추가
              }}
            />
          )}
        </div>
        <div className="flex items-center justify-between">
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
            <ProfileImage src={props.profileImage} />
          </div>
        </div>
        {props.extraContent}
      </CardContent>
    </Card>
  );
}
