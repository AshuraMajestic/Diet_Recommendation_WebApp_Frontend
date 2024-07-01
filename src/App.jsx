import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import AdminDashboard from './components/Admin/AdminDashboard';
import PrivateComponent from './components/Auth/PrivateComponent';
import User from './components/User/User';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>

        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path='/' element={<Home />} />
            <Route path='/user' element={<User />} />
            <Route path='/admin' element={<AdminDashboard />} />
          </Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
