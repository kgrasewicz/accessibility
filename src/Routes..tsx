import { Route, Routes } from "react-router";
import BaseLayout from "./layouts/BasicLayout";
import MovieDetailsPage from "./pages/MovieDetailsPage";

const AppRoutes = () => (
  <Routes>
    <Route element={<BaseLayout />}>
      <Route path="/">
        <Route path=":movieId" element={<MovieDetailsPage />} />
      </Route>
    </Route>
  </Routes>
);

export default AppRoutes;
