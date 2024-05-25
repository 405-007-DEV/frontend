import { Route, Routes } from 'react-router-dom';
import {
  HomePage,
  EmptyPage,
  ChatPage,
  RecommendUsersPage,
  LandingPage,
  ChatListPage,
  OnboardingPage,
  ProfilePage,
  SearchPage,
} from '../pages';
import { Layout } from '../components/Layout';
import { PrivateRoute } from './PrivateRoute';
import { UIPage } from '@/pages/UIPage';
import { Navbar } from '@/components/Navbar';
import { OnboardingResultPage } from '@/pages/OnboardingResult';

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route element={<Navbar />}>
            <Route path="/chat/list" element={<ChatListPage />} />
            <Route path="/home" element={<HomePage />} />
          </Route>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/chat/:chat_room_id" element={<ChatPage />} />
          <Route path="/profile/:user_id" element={<ProfilePage />} />
        </Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recommend/result" element={<RecommendUsersPage />} />
        <Route path="/ui" element={<UIPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/onboarding/result" element={<OnboardingResultPage />} />
        <Route path="*" element={<EmptyPage />} />
      </Route>
    </Routes>
  );
}
