import { useEffect } from "react";
import {BrowserRouter,Routes,Route,useLocation} from 'react-router-dom'

import Home from "./components/pages/Home/index";
import CartMenu from "./components/CartMenu";


const ScrollTop=()=>{
  const {pathname} = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname])
  return null;
}
function App() {
  return (
    <div className="app">
     <BrowserRouter>
        <ScrollTop/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <CartMenu />
     </BrowserRouter>
    </div>
  );
}

export default App;
