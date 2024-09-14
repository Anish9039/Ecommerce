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
import Sidebar from './Component/Header/Sidebar'

function App() {
  return (
    <Router>
      
      <Routes>
        {/* Route for the admin screen */}
        <Route path="/aadmin" element={<Aadmin />} />
        <Route path="/Signup" element={
          <>

          <Signup />
          </>

          } />

        {/* Routes for other parts of the app with Header and other components */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Sidebar />
               
        
              <FlashSalesCarousel />
              < Redicon />
              < Redicons />
              < Productp />
              <Banner  />
      
            </>
          }
        />
        {/* Add more routes here if needed */}
      </Routes>

    </Router>
  );
}

export default App;
