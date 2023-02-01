
 import './App.css';
import React from 'react';


export default App;
function App() {
  return (
      <div>
          <nav class="navbar background">
              <ul class="nav-list">                
                  <div class="logo">
                      <img src=
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png" />
                  </div>
                  <li><a href="#courses">Courses</a></li>
                  <li><a href="#tutorials">Tutorials</a></li>
                  <li><a href="#jobs">Jobs</a></li>
                  <li><a href='#student'>Student</a></li>
              </ul>
          </nav>

         
          <footer className="footer">
              <p className="text-footer">
                  Copyright ©-All rights are reserved
              </p>
          </footer>
      </div>
  )
}
