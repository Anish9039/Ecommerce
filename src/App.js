import './App.css';
import Header from './Component/Header/header';
import FlashSalesCarousel from './Component/Product/FlashSalesCarousel';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Aadmin from './Component/Admin/Aadmin';
import Redicon from './Component/product Category/redIcon';
import Redicons from './Component/product Category/redicons';
import Productp from './Component/Popularproduct/Productp';
import Banner from './Component/Popularproduct/banner';
import Signup from './Component/signup/signup';
import Sidebar from './Component/Header/Sidebar';
import Globalheader from './Component/Header/globalheader';
import Login from './Component/signup/login';
import ProductGrid from './Component/Exploreproduct/ProductGrid';
import { Newarrival } from './Component/New Arrival/Newarrival';
import ServicesSection from './Servicecard/ServiceSection';
import Footer from './Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Product from './Component/Admin/Product';
import Cart from './Component/Cart/cart';
import { CartProvider } from './Component/Exploreproduct/Cartcontext';
import Maindetail from './Component/Billing/Maindetail';
import Profile from './Component/Profile/profile'

// Authentication check for protected routes
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = true; // Replace with real auth logic
  return isAuthenticated ? element : <Navigate to="/login" />;
};

// Admin layout that includes the sidebar and space for nested components
const AdminLayout = () => (
  <div>
    <Aadmin />
    <Outlet /> {/* This will render nested admin routes */}
  </div>
);

// Main layout for routes with a global header (Signup/Login pages)
const MainLayout = ({ children }) => (
  <>
    <Globalheader />
    {children}
    <br />
    <Footer />
  </>
);

// Regular layout for routes with Header and Sidebar (Home, etc.)
const RegularLayout = ({ children }) => (
  <>
    <Header />
    <Sidebar />
    {children}
  </>
);

function App() {
  return (
    // Wrap the entire app with CartProvider to make cart context available globally
    <CartProvider>
      <Router>
        <ToastContainer />

        <Routes>
          {/* Billing Details Route */}
          <Route
            path="/maindetail"
            element={
              <MainLayout>
                <Maindetail />
              </MainLayout>
            }
          />

          {/* Cart Route */}
          <Route
            path="/Cart"
            element={
              <MainLayout>
                <Cart />
                
              </MainLayout>
            }
          />

          {/* Admin Routes with ProtectedRoute */}
          <Route
            path="/aadmin"
            element={<ProtectedRoute element={<AdminLayout />} />}
          >
            <Route path="Product" element={<Product />} />
            {/* Add more nested admin routes here */}
          </Route>

          {/* Signup and Login Routes with Globalheader */}
          <Route path="/signup" element={<MainLayout><Signup /></MainLayout>} />
          <Route path="/login" element={<MainLayout><Login /></MainLayout>} />

          {/* Home Route with Header, Sidebar, and other components */}
          <Route
            path="/"
            element={
              <RegularLayout>
                <FlashSalesCarousel className="relative mx-auto max-w-[1170px] h-[768px] pt-[60px]" />
                <Redicon />
                <Redicons />
                <Productp className="container" />
                <Banner />
                <ProductGrid />
                <ToastContainer />
                <Newarrival />
                <ServicesSection />
                <Footer />
              </RegularLayout>
                 }
          />

          {/* Add more public routes as needed */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
