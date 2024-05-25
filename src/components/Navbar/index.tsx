import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Icon } from '../Button/Icon';
import { userId } from '@/mock/data';

const LOCATION = {
  list: '/home',
  chat: '/chat/list',
  notification: '/notification',
  profile: (id: string) => `/profile/${id}`,
};

const NAVBAR_LIST = [
  {
    location: LOCATION.list,
    activeIcon: 'burger_active',
    inactiveIcon: 'burger',
    text: '리스트',
  },
  {
    location: LOCATION.chat,
    activeIcon: 'chat_active',
    inactiveIcon: 'chat',
    text: '대화',
  },
  {
    location: LOCATION.notification,
    activeIcon: 'notification_active',
    inactiveIcon: 'notification',
    text: '알람',
  },
  {
    location: LOCATION.profile,
    activeIcon: 'profile_active',
    inactiveIcon: 'profile',
    text: '프로필',
  },
];

export function Navbar() {
  const currentLocation = useLocation().pathname;

  return (
    <>
      <Outlet />
      <nav className="bg-white fixed bottom-0 left-0 right-0 z-10 border-t-[1px] border-t-[#e7e7e7] max-w-[500px] mx-auto h-85">
        <ul className="flex items-center w-full h-full justify-around border-top-[1px] border-top-[#111010]s">
          {NAVBAR_LIST.map(({ location, activeIcon, inactiveIcon, text }) => (
            <NavLink
              to={typeof location === 'string' ? location : location(userId)}
              className="w-full h-full"
              key={text}
            >
              <li className="flex flex-col h-full justify-center items-center space-y-2">
                <Icon
                  size={24}
                  icon={
                    location === currentLocation ? activeIcon : inactiveIcon
                  }
                />
                <p
                  className={`${location === currentLocation ? 'text-gr7' : 'text-gr4'} b4_medium text-gr4`}
                >
                  {text}
                </p>
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </>
  );
}
