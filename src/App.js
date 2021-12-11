
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route} from 
'react-router-dom';
import {Overview , BookRoom, CheckOut} from './pages/chucnang.js';
import Room from './pages/room.js';
import Customer from './pages/customers.js'; 
import Employee from './pages/Employee/employees.js';
import Service from './pages/service.js'; 
import {Reports, RoomReport, ServiceReport, CusReport} from './pages/reports.js';


function App() {
  return (
    <Router>
    <Sidebar/>
      <Routes>
        <Route path='/chucnang' element={<Overview/>} />
        <Route path='/chucnang/datphong' element={<BookRoom/>} />
        <Route path='/chucnang/traphong' element={<CheckOut/>} />
        <Route path='/phong' element={<Room/>} />
        <Route path='/customers' element={<Customer/>} />
        <Route path='/employee' element={<Employee/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/report' element={<Reports/>} />
        <Route path='/report/roomReport' element={<RoomReport/>} />
        <Route path='/report/serviceReport' element={<ServiceReport/>} />
        <Route path='/report/cusReport' element={<CusReport/>} />
      </Routes>
   
    </Router>
    
  );
}

export default App;
