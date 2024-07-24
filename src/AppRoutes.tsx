import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage></HomePage>
          </Layout>
        }
      ></Route>
      <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
      <Route
        path="/auth-callback"
        element={<AuthCallbackPage></AuthCallbackPage>}
      ></Route>
      <Route element={<ProtectedRoute></ProtectedRoute>}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage></UserProfilePage>
            </Layout>
          }
        ></Route>
        <Route
          path="/manage-restaurant"
          element={
            <Layout>
              <ManageRestaurantPage></ManageRestaurantPage>
            </Layout>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
