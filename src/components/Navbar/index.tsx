import { NavLink, useLocation } from 'react-router-dom';
import { Icon } from '../Button/Icon';

const LOCATION = {
  list: '/',
  chat: '/chat/list',
  notification: '/notification',
  profile: '/profile',
};

const NAVBAR_LIST = [
  {
    location: LOCATION.list,
    activeIcon: 'chat_active',
    inactiveIcon: 'chat',
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
    activeIcon: 'chat_active',
    inactiveIcon: 'chat',
    text: '알람',
  },
  {
    location: LOCATION.profile,
    activeIcon: 'chat_active',
    inactiveIcon: 'chat',
    text: '프로필',
  },
];

export function Navbar() {
  const currentLocation = useLocation().pathname;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 border-top-[1px] border-top-[#e7e7e7] max-w-[500px] mx-auto h-85">
      <ul className="flex items-center w-full h-full justify-around">
        {NAVBAR_LIST.map(({ location, activeIcon, inactiveIcon, text }) => (
          <NavLink to={location} className="w-full h-full">
            <li className="flex flex-col h-full justify-center items-center space-y-2">
              <Icon
                size={24}
                icon={location === currentLocation ? activeIcon : inactiveIcon}
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
  );
}
