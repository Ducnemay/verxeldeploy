import { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import HomeTro from './page/HomeTro';
import StudioPage from './page/StudioPage';
import EditStudio from './page/EditStudio';
import AdminManagerPage from './page/AdminManagerPage';
import RevenuePage from './page/RevenuePage';
import UpdateuserPage from './page/UpdateuserPage';
import UserProfile from './page/UserProfile';
import StudioBookingManager from './page/StudioBookingManager';
import Layout from './components/Layout/Layout';
import LayoutHome from './components/Layout/LayoutHome';
import OrderPage from './page/OrderPage';



function App() {
  return (
    <Routes>
       <Route element={<Layout />}>
      
<Route path="/studio/:id" element={<StudioPage />} />
<Route path="/order/:bookingId" element={<OrderPage />} />
<Route path="/bookingmanager" element={<StudioBookingManager />} />
<Route path="/editstu" element={<EditStudio />} />
<Route path="/adminmanager" element={<AdminManagerPage />} />
<Route path="/revenue" element={<RevenuePage />} />
<Route path="/updateuser" element={<UpdateuserPage />} />
<Route path="/userpro" element={<UserProfile />} />
       </Route>

       <Route element={<LayoutHome />}>
       
       <Route path="/hometro" element={<HomeTro />} />
       </Route>

      </Routes>
  );
}

export default App
