
import './App.css';
import Home from './components/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  },[])
  return (
    <div className="">
     <Home></Home>
    </div>
  );
}

export default App;
