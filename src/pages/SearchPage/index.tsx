import { useNavigate, useSearchParams } from 'react-router-dom';
import { Icon } from '@/components/Button/Icon';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { SearchSelect } from '@/components/Select/SearchSelect';
import { searchOptions } from '@/constants/searchOptions';
import { positions } from '@/constants/positions';
import { Badge } from '@/components/ui/badge';
import { UserCard } from '@/components/Card';
import { profileCardData, userId } from '@/mock/data';
import { Button } from '@/components/ui/button';

interface SearchContainerProps {}

export function SearchPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const searchValues = {
    nickname: searchParams.get('nickname'),
    position: searchParams.get('position'),
  };

  const [input, setInput] = useState('');
  const currentInput = searchValues.nickname ?? input;

  const [searchFilters, setSeacrchFilters] = useState({
    jobs: '',
    years: '',
  });

  return (
    <div>
      <div className="w-full h-48 flex justify-between items-center px-20 mt-8">
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        >
          <Icon icon="arrow_left" />
        </div>
        <Input
          value={currentInput}
          placeholder="검색"
          className="text-gr8 b2_medium py-10 px-18 h-40 bg-gr1 rounded-full w-full"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      {!searchValues.nickname && (
        <div className="flex items-center mt-32 gap-8 px-20">
          <SearchSelect
            value={searchFilters.jobs}
            placeholder={
              searchValues.position
                ? positions[searchValues.position][0]
                : '직무 선택'
            }
            items={
              searchValues.position
                ? searchOptions.jobs[searchValues.position]
                : []
            }
            onChange={(value) => {
              setSeacrchFilters((prev) => ({ ...prev, jobs: value }));
            }}
          />
          <SearchSelect
            placeholder="연차 선택"
            items={searchOptions.years}
            value={searchFilters.years}
            onChange={(value) => {
              setSeacrchFilters((prev) => ({ ...prev, years: value }));
            }}
          />
          {Object.values(searchFilters).some((value) => value) && (
            <button
              onClick={() => {
                setSeacrchFilters({
                  jobs: '',
                  years: '',
                });
              }}
            >
              <Badge variant={'outline'}>초기화</Badge>
            </button>
          )}
        </div>
      )}

      <div className="px-20 mt-18">
        {searchValues.position ? (
          <p className="h1_bold text-grs mb-24">
            {positions[searchValues.position][0]} 직군
          </p>
        ) : (
          <></>
        )}
        {profileCardData
          .filter((data) => data.id !== userId)
          .map((item) => (
            <UserCard
              id={item.id}
              name={item.name}
              job={item.job}
              intro={item.interest}
              status={item.status}
              info={item.info}
              profileImage={item.profileImg}
              key={item.id}
              onClick={() => {
                navigate(`/profile/${item.id}`);
              }}
              isBookmark={item.isBookmark}
              extraContent={
                <Button
                  variant={'outline'}
                  size="xs"
                  className="border-bp mt-16 b3_bold"
                  onClick={(e) => {
                    navigate(`/chat/${item.id}`);
                    e.stopPropagation();
                  }}
                >
                  스몰챗 보내기
                </Button>
              }
            />
          ))}
      </div>
    </div>
  );
}
