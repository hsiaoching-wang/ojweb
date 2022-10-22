import './App.css';
import Home from './components/Home/Home'
import {useState, useEffect} from 'react'
import Login from './components/login/Login'
import Code from './components/Code/Code';
import { Link , Routes, Route, useLocation, useNavigate} from 'react-router-dom';

function App() {
  const [login, setLogin] = useState(false);
  function handle(even) {
    console.log(even);
    if(even.user=="judy"&&even.password=="1111")
      setLogin(true);
};
  return (
    <div>
      <Routes>
          <Route path="/code" element={<Code/>} />
          <Route path="/home" element={<Home/>} />
      </Routes>
      <Home/>
    </div>
    
  );
}

export default App;
