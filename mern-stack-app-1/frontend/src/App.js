import { BrowserRouter, Routes, Route } from "react-router-dom";
// publicly available pages:
import { HomePage } from "./pages/HomePage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { ProductListingPage } from "./pages/ProductListingPage";
import { CartPage } from "./pages/CartPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

// protected user pages:
import { UserProfilePage } from "./pages/user/UserProfilePage";
import { UserOrdersPage } from "./pages/user/UserOrdersPage";
import { UserCartDetailsPage } from "./pages/user/UserCartDetailsPage";
import { UserOrderDetailsPage } from "./pages/user/UserOrderDetailsPage";

// protected admin pages:
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import RouteWithUserComponent from "./components/User/RouteWithUserComponent";
import RouteWithAdminComponent from "./components/Admin/RouteWithAdminComponent";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* publicly available routes: */}
        <Route element={<RouteWithUserComponent />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListingPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element="Page not exists 404" />

          {/* <Route path="/" component={HomePage} />  in previous versions of react-router-dom */}

          {/* user protected routes: */}
          <Route element={<ProtectedRoutesComponent admin={false} />}>
            <Route path="/user" element={<UserProfilePage />} />
            <Route path="/user/my-orders" element={<UserOrdersPage />} />
            <Route
              path="/user/cart-details"
              element={<UserCartDetailsPage />}
            />
            <Route
              path="/user/order-details"
              element={<UserOrderDetailsPage />}
            />
          </Route>
        </Route>

        {/* admin protected routes: */}
        <Route element={<RouteWithAdminComponent />}>
          <Route element={<ProtectedRoutesComponent admin={true} />}>
            <Route path="/admin/users" element={<AdminUsersPage />} />
            <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
            <Route path="/admin/products" element={<AdminProductsPage />} />
            <Route
              path="/admin/create-new-product"
              element={<AdminCreateProductPage />}
            />
            <Route
              path="/admin/edit-product"
              element={<AdminEditProductPage />}
            />
            <Route path="/admin/orders" element={<AdminOrdersPage />} />
            <Route
              path="/admin/order-details"
              element={<AdminOrderDetailsPage />}
            />
            <Route path="/admin/chats" element={<AdminChatsPage />} />
            <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
