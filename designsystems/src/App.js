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
import { Events, EventsOne, EventsTwo } from "./pages/Events";
import Contact from "./pages/ContactUs";
import { Navigation, NavbarSubmenu } from "./pages/Navigation";
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
        <Route path='/services' element={<Services/>} />
        <Route path='/services/services1' element={<ServicesOne/>} />
        <Route path='/services/services2' element={<ServicesTwo/>} />
        <Route path='/services/services3' element={<ServicesThree/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/events/events1' element={<EventsOne/>} />
        <Route path='/events/events2' element={<EventsTwo/>} />
      
      </Routes>
    </Router>
    
  );
}
   
export default App;