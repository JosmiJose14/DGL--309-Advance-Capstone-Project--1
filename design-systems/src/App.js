
 import './App.css';
import React from 'react';


export default App;

function DisplayCode({htmlContent}) {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

function Typography()
{
  return(<div id="typography">
  <h3>Typography & Colors</h3>
  <div id="typography" >
    <h4>Fonts</h4>
    <div style={{display: 'flex',flexDirection: 'row'}}>
          <span style={{flex: 0.5}}> font-family: Josefin Sans</span>
          <span class="examplefont" style={{flex: 0.5}}>This is Josefins Sans font.</span>
          <span style={{flex: 1}}>
          <pre>
            <code>
                  font-family: 'Josefin Sans';
            </code>
          </pre>
          </span><br/>
    </div>
    <div style={{display: 'flex',flexDirection: 'row'}}>
          <span style={{flex: 0.5}}> font-size: 16px</span>
          <span style={{flex: 0.5}} class="examplefontsize">This is 16px font.</span>
          <span style={{flex: 1}}>
          <pre>
            <code>
                  font-size: 16px;
            </code>
          </pre>
          </span>
    </div>
    <h4>Headers</h4>
    <div style={{display: 'flex',flexDirection: 'row'}}>
          
          <span style={{flex: 0.5}}> H1 - Logo </span>
          <span style={{flex: 0.5}}>
            <h1 class="fontStyle">This is h1 tag.</h1></span>
          <span style={{flex: 1}}>
              
                <pre>
                  <code>
                      &lt;h1&gt;This is h1 tag&lt;/h1&gt;
                  </code>
                </pre>
              
          </span><br/>
    </div>
    <div style={{display: 'flex',flexDirection: 'row'}}>
          <span style={{flex: 0.5}}> H2  - sub headings</span>
          <span style={{flex: 0.5}}><h2 class="fontStyle">This is h2 tag.</h2></span>
          <span style={{flex: 1}}>
              <pre>
                <code>
                &lt;h2&gt;This is h2 tag&lt;/h2&gt;
                </code>
              </pre>
          </span><br/>
    </div>
    <div style={{display: 'flex',flexDirection: 'row'}}>
          <span style={{flex: 0.5}}> H3  -Logo sub heading</span>
          <span style={{flex: 0.5}}><h3 class="fontStyle">This is h3 tag.</h3></span>
          <span style={{flex: 1}}>
          <pre>
            <code>
            &lt;h3&gt;This is h3 tag&lt;/h3&gt;
            </code>
          </pre>
          </span><br/>
    </div>
    <div style={{display: 'flex',flexDirection: 'row'}}>
          <span style={{flex: 0.5}}> H4 </span>
          <span style={{flex: 0.5}}><h4  class="fontStyle">This is h4 tag.</h4></span>
          <span style={{flex: 1}}>
          <pre>
            <code>
            &lt;h4&gt;This is h4 tag&lt;/h4&gt;
            </code>
          </pre>
          </span><br/>
    </div>
    <div style={{display: 'flex',flexDirection: 'row'}}>
          <span style={{flex: 0.5}}> h5 - fo image heading</span>
          <span style={{flex: 0.5}}><h5 class="fontStyle"> This is h5 tag.</h5></span>
          <span style={{flex: 1}}>
          <pre>
            <code>
            &lt;h5&gt;This is h5 tag&lt;/h5&gt;
            </code>
          </pre>
          </span><br/>
    </div>
    <div style={{display: 'flex',flexDirection: 'row'}}>
          <span style={{flex: 0.5}}> h6 </span> 
          <span style={{flex: 0.5}}>
            <h6  class="fontStyle">This is h6 tag.</h6></span>
          <span style={{flex: 1}}>
          <pre>
            <code>
            &lt;h6&gt;This is h6 tag&lt;/h6&gt;
            </code>
          </pre>
          </span>
    </div>
    <br/>
    <h4>Colors</h4> 
    <div style={{display: 'flex',flexDirection: 'row'}}>
          <span style={{flex: 0.5}}> body text - #000000</span>
          <span style={{flex: 0.5}}><h5 class="fontStyle" style={{color: '#000000'}} > This is body text color.</h5></span>
          <span style={{flex: 1}}>
          <pre>
            <code>
              color: '#000000'
            </code>
          </pre>
          </span><br/>
    </div>
    <span> body text : #ECD1A0 </span> <br/>  
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
)
};
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
              <a href="/about">Forms & List</a>
            </li>
            <li>
              <a href="/contact">Components</a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="bdyDesignSystems">
       < Typography/>
      </div>
      </div>
  )
}
