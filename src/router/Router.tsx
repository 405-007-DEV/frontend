import {Route, Routes} from "react-router-dom";
import {HomePage, EmptyPage} from "../pages";
import {Layout} from "../components/Layout";
import {PrivateRoute} from "./PrivateRoute";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route path="*" element={<EmptyPage />} />
        </Route>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
