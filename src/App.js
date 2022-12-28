
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AppointmentPage from './Pages/Appointment/AppointmentPage';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import SignIn from './Pages/Login/SignIn';
import Navbar from './Pages/Shared/Navbar/Navbar';
import RequireAuth from './Pages/Shared/RequireAuth';
import ResetPassword from './Pages/Shared/ResetPassword';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/appointment" element={
          <RequireAuth>
            <AppointmentPage></AppointmentPage>
          </RequireAuth>
        } />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/resetPassword" element={<ResetPassword></ResetPassword>} />
      </Routes>
      <ToastContainer />
    </div>


  );
}

export default App;
