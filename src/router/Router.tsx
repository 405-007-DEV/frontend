import { Route, Routes } from 'react-router-dom';
import {
  HomePage,
  EmptyPage,
  ChatPage,
  RecommendUsersPage,
  LandingPage,
  ChatListPage,
  ProfilePage,
} from '../pages';
import { Layout } from '../components/Layout';
import { PrivateRoute } from './PrivateRoute';
import { UIPage } from '@/pages/UIPage';
import { Navbar } from '@/components/Navbar';

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route element={<Navbar />}>
            <Route path="/chat/list" element={<ChatListPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/chat/:chat_room_id" element={<ChatPage />} />
          </Route>
          <Route path="/profile/:user_id" element={<ProfilePage />} />
        </Route>
        <Route path="/start" element={<LandingPage />} />
        <Route path="/recommend/result" element={<RecommendUsersPage />} />
        <Route path="/ui" element={<UIPage />} />
        <Route path="*" element={<EmptyPage />} />
      </Route>
    </Routes>
  );
}
