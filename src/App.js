
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AppointmentPage from './Pages/Appointment/AppointmentPage';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/appointment" element={<AppointmentPage></AppointmentPage>} />
      <Route path="/login" element={<Login></Login>} />
    </Routes>
  );
}

export default App;
