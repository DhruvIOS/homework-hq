
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Tasks from './pages/Tasks';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import RequireAuth from '@auth-kit/react-router/RequireAuth'


function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>


          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />

          <Route path="/tasks" index element={<RequireAuth fallbackPath="/Login">
            <Tasks />
          </RequireAuth>} />

          <Route path="/SignUp" index element={<SignUp />} />

          <Route path="/Login" index element={<Login />} />



        </Routes>
      
      

      </BrowserRouter>
    </div>
  );
}

export default App;
