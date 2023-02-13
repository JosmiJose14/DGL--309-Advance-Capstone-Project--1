//Setup react js in visual studio code
//https://www.geeksforgeeks.org/how-to-create-a-responsive-sidebar-with-dropdown-menu-in-reactjs/


//navigation implemented
//https://www.geeksforgeeks.org/how-to-create-a-responsive-sidebar-with-dropdown-menu-in-reactjs/
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route ,Navigate } from "react-router-dom";
import { Typography, Colors,Images } from "./pages/StyleElements";
import {Accordian} from "./pages/Components";

import { Navigation, NavbarSubmenu } from "./pages/Navigation";
import { Forms } from "./pages/Forms";
import{ ButtonStyles }from "./pages/Button";
import{ List }from "./pages/List";
function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate to="/style-elements/typography" />}></Route>
        <Route path='/style-elements/typography' element={<Typography/>} />
        <Route path='/style-elements/colors' element={<Colors/>} />
        <Route path='/style-elements/images' element={<Images/>} />
        <Route path='/navigation/navigations' element={<Navigation/>} />
        <Route path='/navigation/navSubmenu' element={<NavbarSubmenu/>}/>
        <Route path='/forms' element={<Forms/>} />
        <Route path='/button' element={<ButtonStyles/>} />
        <Route path='/list' element={<List/>} />
        <Route path='/components/accordian' element={<Accordian/>} />
        
      </Routes>
    </Router>
    
  );
}
   
export default App;