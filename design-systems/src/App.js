
 import './App.css';
import React from 'react';


export default App;

function DisplayCode({htmlContent}) {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
function FormsList()
{
  return(
    <div id="formsList">
    <h3>Forms & List</h3>
    <div id="forms"></div>  
      <h4> Form Elements</h4>
    </div>
  )
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
              color: #000000;
            </code>
          </pre>
          </span><br/>
    </div>
    <div style={{display: 'flex',flexDirection: 'row'}}>
          <span style={{flex: 0.5}}> Header text - #ff0038</span>
          <span style={{flex: 0.5}}><h5 class="fontStyle" style={{color: '#ff0038'}} > This is title text color.</h5></span>
          <span style={{flex: 1}}>
          <pre>
            <code>
              color: #ff0038;
            </code>
          </pre>
          </span><br/>
    </div>
    <div style={{display: 'flex',flexDirection: 'row'}}>
          <span style={{flex: 0.5}}> background color - #ECD1A0</span>
          <span style={{flex: 0.5}}><h5 class="fontStyle"> '#ECD1A0' is your  background color.</h5></span>
          <span style={{flex: 1}}>
          <pre>
            <code>
              color: #ECD1A0;
            </code>
          </pre>
          </span><br/>
    </div>
    <div style={{display: 'flex',flexDirection: 'row'}}>
          <span style={{flex: 0.5}}> primary button color - #ff0038</span>
          <span style={{flex: 0.5}}><h5 class="fontStyle" style={{color: '#ff0038'}} > This is primary button color.</h5></span>
          <span style={{flex: 1}}>
          <pre>
            <code>
              color: #ff0038;
            </code>
          </pre>
          </span><br/>
    </div>
    <div style={{display: 'flex',flexDirection: 'row'}}>
          <span style={{flex: 0.5}}> secondary button color - #958689</span>
          <span style={{flex: 0.5}}><h5 class="fontStyle" style={{color: '#958689'}} > This is secondary button color.</h5></span>
          <span style={{flex: 1}}>
          <pre>
            <code>
              color: #958689;
            </code>
          </pre>
          </span><br/>
    </div>
    <div style={{display: 'flex',flexDirection: 'row'}}>
          <span style={{flex: 0.5}}> success button or message - #418433</span>
          <span style={{flex: 0.5}}><h5 class="fontStyle" style={{color: '#418433'}} > This is success button or message color.</h5></span>
          <span style={{flex: 1}}>
          <pre>
            <code>
              color: #418433;
            </code>
          </pre>
          </span><br/>
    </div>
    <div style={{display: 'flex',flexDirection: 'row'}}>
          <span style={{flex: 0.5}}> success button or message - #418433</span>
          <span style={{flex: 0.5}}><h5 class="fontStyle" style={{color: '#418433'}} > This is success button or message color.</h5></span>
          <span style={{flex: 1}}>
          <pre>
            <code>
              color: #418433;
            </code>
          </pre>
          </span><br/>
    </div>
    <div style={{display: 'flex',flexDirection: 'row'}}>
          <span style={{flex: 0.5}}> danger button or message - #bc3907</span>
          <span style={{flex: 0.5}}><h5 class="fontStyle" style={{color: '#bc3907'}} > This is danger button or message color.</h5></span>
          <span style={{flex: 1}}>
          <pre>
            <code>
              color: #bc3907;
            </code>
          </pre>
          </span><br/>
    </div>
    <h4>Spacing</h4> 
    <div style={{display: 'flex',flexDirection: 'row'}}>
          <span style={{flex: 0.5}}> body margin - auto</span>
          <span style={{flex: 0.5}}><h5 class="fontStyle" style={{margin : 'auto'}} > Your margin auto style.</h5></span>
          <span style={{flex: 1}}>
          <pre>
            <code>
              margin : auto;
            </code>
          </pre>
          </span><br/>
    </div>
    <div style={{display: 'flex',flexDirection: 'row'}}>
          <span style={{flex: 0.5}}> body padding - 1px</span>
          <span style={{flex: 0.5}}><h5 class="fontStyle" style={{padding : '22px'}} > Your padding style.</h5></span>
          <span style={{flex: 1}}>
          <pre>
            <code>
              padding : 3px;
            </code>
          </pre>
          </span><br/>
    </div>
    <div style={{display: 'flex',flexDirection: 'row'}}>
          <span style={{flex: 0.5}}> div padding- 1px</span>
          <span style={{flex: 0.5}}><h5 class="fontStyle" style={{padding : '22px'}} > Your padding style.</h5></span>
          <span style={{flex: 1}}>
          <pre>
            <code>
              padding : 3px;
            </code>
          </pre>
          </span><br/>
    </div>   
    <h4>Images </h4>
    <div style={{display: 'flex',flexDirection: 'row'}}>
          <span style={{flex: 0.5}}> Image width and height-50% * 50% </span>
          <span style={{flex: 0.5}}><h5 class="fontStyle" style={{width : '50%', height:'50%'}} > <img src="src/images/tagmahal.jpg" alt="Taj-mahal" /></h5></span>
          <span style={{flex: 1}}>
          <pre>
            <code>
              width : 50%;
              height: 50%;
            </code>
          </pre>
          </span><br/>
    </div>    
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
       < FormsList/>
      </div>
      </div>
  )
}
