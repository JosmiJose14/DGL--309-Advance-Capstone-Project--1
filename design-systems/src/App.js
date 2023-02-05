
 import './App.css';
import React from 'react';


export default App;
function App() {
  return (
        <div id="designSystem">
        <div id="divHeading"> 
           <h1>HAIR WITH FLAIR SALON</h1>
           <h3>UNISEX SALON</h3></div> 
        <nav className="navigation">      
        <div
          className="navigation-menu">
          <ul>
            <li>
              <a href="/home">Typography & Color</a>
            </li>
            <li>
              <a href="/about">Forms</a>
            </li>
            <li>
              <a href="/contact">Components</a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="bdyDesignSystems">
        <div id="typography">
          <h3>Typography & Colors</h3>
          <div id="typography">
            <h4>Fonts</h4>
            <span> font-family: Josefin Sans</span>
            <span> font-size: 16px</span>
            <h4>Headers</h4>
            <span> H1 - Logo </span><br/>
            <span> H2  - sub headings</span><br/>
            <span> H3  -Logo sub heading</span><br/>
            <span> H4 </span><br/>
            <span> h4 -image heading</span><br/>
            <span> h4 </span> <br/>
            <h4>Colors</h4> 
            <span> body text : #color </span> <br/>  
            <span> titles or display text : #color</span> <br/>
            <span>background : #color</span> <br/>
            <span>alternate background : #color</span> <br/>
            <span>primary for buttons: #color</span> <br/>
            <span>secondary colous for buttons: #color</span> <br/>
            <span>success button or message: #color</span> <br/>
            <span> danger button or message: #color</span> <br/>
            <span> info button or message: #color</span> <br/>
            <span> warning button or message: #color</span> <br/> 
            <h4>Spacing</h4> 
            <span> body margin : #value </span> <br/>
            <span> body padding : #value </span><br/>
            <span> div margin : #value </span> <br/>
            <span> div padding : #value </span><br/>
            <h4>Images </h4> 
            <span> image width : #value </span><br/>
            <span> image height : #value </span><br/>
            <span> image border style : #value </span><br/>
            <span> image styles: #value </span><br/>
          </div>

        </div>
      </div>
      </div>
  )
}
