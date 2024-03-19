import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import DashSidebar from './components/DashSidebar';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import AddStudent from './components/AddStudent';
import AddTeachers from './components/AddTeachers';
import { useState } from 'react';



const App = () => {
  
  
  const [hidden, setHidden] = useState('');

  return (
    <Router>
      <div className="flex w-full min-h-screen">
        <DashSidebar />
        <div className="w-full">
          <Header />
          <Routes>
            <Route path="dashboard" element={<Dashboard  />} />
            <Route path="students" element={<Students  />} />
            <Route path="teachers" element={<Teachers  />} />
            <Route path="/" element={<Register  />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile  />} />
            <Route path="add" element={<AddStudent  />} />
            <Route path="addt" element={<AddTeachers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
