import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import OrderStatusPage from "./pages/OrderStatusPage";

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
      <Route
        path="/search/:city"
        element={
          <Layout showHero={false}>
            <SearchPage />
          </Layout>
        }
      />
      <Route
        path="/detail/:restaurantId"
        element={
          <Layout showHero={false}>
            <DetailPage />
          </Layout>
        }
      />
      <Route element={<ProtectedRoute></ProtectedRoute>}>
        <Route
          path="/order-status"
          element={
            <Layout>
              <OrderStatusPage />
            </Layout>
          }
        />
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
