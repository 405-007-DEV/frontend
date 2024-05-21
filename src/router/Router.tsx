import {Route, Routes} from "react-router-dom";
import {HomePage, EmptyPage, ChatPage} from "../pages";
import {Layout} from "../components/Layout";
import {PrivateRoute} from "./PrivateRoute";
import {UIPage} from "@/pages/UIPage";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat/:chat_room_id" element={<ChatPage />} />
        </Route>
        <Route path="/ui" element={<UIPage />} />
        <Route path="*" element={<EmptyPage />} />
      </Route>
    </Routes>
  );
}
