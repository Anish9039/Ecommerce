import './App.css';
import Header from './Component/Header/header';
import FlashSalesCarousel from './Component/Product/FlashSalesCarousel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aadmin from './Component/Admin/Aadmin';
import ProductForms from './Component/Admin/ProductForm';


function App() {
  return (
    <Router>
      
      <Routes>
        {/* Route for the admin screen */}
        <Route path="/aadmin" element={<Aadmin />} />

        {/* Routes for other parts of the app with Header and other components */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <FlashSalesCarousel />
            </>
          }
        />
        {/* Add more routes here if needed */}
      </Routes>

    </Router>
  );
}

export default App;
