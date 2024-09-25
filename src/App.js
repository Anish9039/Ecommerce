import './App.css';
import Header from './Component/Header/header';
import FlashSalesCarousel from './Component/Product/FlashSalesCarousel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import {  ToastContainer,toast } from 'react-toastify';


const AdminLayout = ({ children }) => (
  <div>
    <Aadmin />
    {children}
  </div>
);

const MainLayout = ({ children }) => (
  <>
    <Globalheader />
    {children}
  </>
);

const RegularLayout = ({ children }) => (
  <>
    <Header />
    <Sidebar />
    {children}
  </>
);

function App() {
  return (
    <Router>
              <ToastContainer />

      <Routes>
        {/* Admin Route */}

        <Route path="/aadmin" element={<AdminLayout><div>Admin Content Here</div></AdminLayout>} />

        {/* Signup and Login Routes with Globalheader */}
        <Route path="/signup" element={<MainLayout><Signup /></MainLayout>} />
        <Route path="/login" element={<MainLayout><Login /></MainLayout>} />

        {/* Home Route with Header, Sidebar, and other components */}
        <Route
          path="/"
          element={
            <RegularLayout>
              <FlashSalesCarousel class='relative mx-auto max-w-[1170px] h-[768px] pt-[60px]' />
              <Redicon />
              <Redicons />
              <Productp />
              <Banner />
              <ProductGrid/>
              <Newarrival/>
              <ServicesSection/>
              <Footer/>
            </RegularLayout>

          }
        />
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
