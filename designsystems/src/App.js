//Setup react js in visual studio code
//https://www.geeksforgeeks.org/how-to-create-a-responsive-sidebar-with-dropdown-menu-in-reactjs/


//navigation implemented
//https://www.geeksforgeeks.org/how-to-create-a-responsive-sidebar-with-dropdown-menu-in-reactjs/
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Typography, Colors,Images } from "./pages/StyleElements";
import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./pages/Services";

import { Navigation, NavbarSubmenu } from "./pages/Navigation";
import { Forms } from "./pages/Forms";
import{ ButtonStyles }from "./pages/Button";
import{ List }from "./pages/List";
function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        
        {/* <Route path='' element={<TypoHeading/>} /> */}
        <Route path='/style-elements/typography' element={<Typography/>} />
        <Route path='//style-elements/colors' element={<Colors/>} />
        <Route path='//style-elements/images' element={<Images/>} />
        <Route path='/navigation/navigations' element={<Navigation/>} />
        <Route path='/navigation/navSubmenu' element={<NavbarSubmenu/>}/>
        <Route path='/forms' element={<Forms/>} />
        <Route path='/button' element={<ButtonStyles/>} />
        <Route path='/list' element={<List/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/services/services1' element={<ServicesOne/>} />
        <Route path='/services/services2' element={<ServicesTwo/>} />
        <Route path='/services/services3' element={<ServicesThree/>} />
      </Routes>
    </Router>
    
  );
}
   
export default App;