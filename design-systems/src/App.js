import "./App.css";
import React, { useState } from "react";
import tajMahalImage from './images/tajmahal.jpg';
import tagmahalmoonImage from './images/tajmahalmoon.jpeg';
import tajMahalfullImage from './images/tajmahalfull.jpg';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';
export default App;


function App() {
  const [menuItem, setMenuItem] = useState(1);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  function CopyrightFooter() {
    return (
      <div id="divfooter">
        <h4 style={
          {marginBottom:'0'}
        }>Copyright @ 2023 DGL 309</h4>
      </div>
    );
  }
  function NavHeader() {
    return (
      <div id="divHeading">
        <h1>HAIR WITH FLAIR SALON</h1>
        <h3>UNISEX SALON</h3>
        <nav className="navigation">
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          ></button>
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <ul>
              <li>
                <button
                 class="navButton"
                  onClick={() => setMenuItem(1)}
                >
                  Typography & Color
                </button>
              </li>
              <li>
                <button
                 class="navButton"
                  onClick={() => setMenuItem(0)}
                >
                  Navigations
                </button>
              </li>
              <li>
                <button
                   class="navButton"
                  onClick={() => setMenuItem(2)}
                >
                  Forms & Lists
                </button>
              </li>
              <li>
                <button
                  class="navButton"
                  onClick={() => setMenuItem(4)}
                >
                  Components
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

  function Typography() {
    return (
      <div id="typography">
        <h3>Typography & Colors</h3>
        <div id="typography">
          <h4>Fonts</h4>
          <div class="elementRow">
            <span style={{ flex: 0.5 }}> font-family: Josefin Sans</span>
            <span class="examplefont" style={{ flex: 0.5 }}>
              This is Josefins Sans font.
            </span>
            <span style={{ flex: 1 }}>
              <pre>
                <code>font-family: 'Josefin Sans';</code>
              </pre>
            </span>
            <br />
          </div>
          <div class="elementRow">
            <span style={{ flex: 0.5 }}> font-size: 16px</span>
            <span style={{ flex: 0.5 }} class="examplefontsize">
              This is 16px font.
            </span>
            <span style={{ flex: 1 }}>
              <pre>
                <code>font-size: 16px;</code>
              </pre>
            </span>
          </div>
          <h4>Headers</h4>
          <div class="elementRow">
            <span style={{ flex: 0.5 }}> H1 - Logo </span>
            <span style={{ flex: 0.5 }}>
              <h1 class="fontStyle">This is h1 tag.</h1>
            </span>
            <span style={{ flex: 1 }}>
              <pre>
                <code>&lt;h1&gt;This is h1 tag&lt;/h1&gt;</code>
              </pre>
            </span>
            <br />
          </div>
          <div class="elementRow">
            <span style={{ flex: 0.5 }}> H2 - sub headings</span>
            <span style={{ flex: 0.5 }}>
              <h2 class="fontStyle">This is h2 tag.</h2>
            </span>
            <span style={{ flex: 1 }}>
              <pre>
                <code>&lt;h2&gt;This is h2 tag&lt;/h2&gt;</code>
              </pre>
            </span>
            <br />
          </div>
          <div class="elementRow">
            <span style={{ flex: 0.5 }}> H3 -Logo sub heading</span>
            <span style={{ flex: 0.5 }}>
              <h3 class="fontStyle">This is h3 tag.</h3>
            </span>
            <span style={{ flex: 1 }}>
              <pre>
                <code>&lt;h3&gt;This is h3 tag&lt;/h3&gt;</code>
              </pre>
            </span>
            <br />
          </div>
          <div class="elementRow">
            <span style={{ flex: 0.5 }}> H4 </span>
            <span style={{ flex: 0.5 }}>
              <h4 class="fontStyle">This is h4 tag.</h4>
            </span>
            <span style={{ flex: 1 }}>
              <pre>
                <code>&lt;h4&gt;This is h4 tag&lt;/h4&gt;</code>
              </pre>
            </span>
            <br />
          </div>
          <div class="elementRow">
            <span style={{ flex: 0.5 }}> h5 - fo image heading</span>
            <span style={{ flex: 0.5 }}>
              <h5 class="fontStyle"> This is h5 tag.</h5>
            </span>
            <span style={{ flex: 1 }}>
              <pre>
                <code>&lt;h5&gt;This is h5 tag&lt;/h5&gt;</code>
              </pre>
            </span>
            <br />
          </div>
          <div class="elementRow">
            <span style={{ flex: 0.5 }}> h6 </span>
            <span style={{ flex: 0.5 }}>
              <h6 class="fontStyle">This is h6 tag.</h6>
            </span>
            <span style={{ flex: 1 }}>
              <pre>
                <code>&lt;h6&gt;This is h6 tag&lt;/h6&gt;</code>
              </pre>
            </span>
          </div>
          <br />
          <h4>Colors</h4>
          <div class="elementRow">
            <span style={{ flex: 0.5 }}> body text - #000000</span>
            <span style={{ flex: 0.5 }}>
              <h5 class="fontStyle" style={{ color: "#000000" }}>
                {" "}
                This is body text color.
              </h5>
            </span>
            <span style={{ flex: 1 }}>
              <pre>
                <code>color: #000000;</code>
              </pre>
            </span>
            <br />
          </div>
          <div class="elementRow">
            <span style={{ flex: 0.5 }}> Header text - #ff0038</span>
            <span style={{ flex: 0.5 }}>
              <h5 class="fontStyle" style={{ color: "#ff0038" }}>
                This is title text color.
              </h5>
            </span>
            <span style={{ flex: 1 }}>
              <pre>
                <code>color: #ff0038;</code>
              </pre>
            </span>
            <br />
          </div>
          <div class="elementRow">
            <span style={{ flex: 0.5 }}> background color - #ECD1A0</span>
            <span style={{ flex: 0.5 }}>
              <h5 class="fontStyle"> '#ECD1A0' is your background color.</h5>
            </span>
            <span style={{ flex: 1 }}>
              <pre>
                <code>color: #ECD1A0;</code>
              </pre>
            </span>
            <br />
          </div>
          <div class="elementRow">
            <span style={{ flex: 0.5 }}> primary button color - #ff0038</span>
            <span style={{ flex: 0.5 }}>
              <h5 class="fontStyle" style={{ color: "#ff0038" }}>
                This is primary button color.
              </h5>
            </span>
            <span style={{ flex: 1 }}>
              <pre>
                <code>color: #ff0038;</code>
              </pre>
            </span>
            <br />
          </div>
          <div class="elementRow">
            <span style={{ flex: 0.5 }}> secondary button color - #958689</span>
            <span style={{ flex: 0.5 }}>
              <h5 class="fontStyle" style={{ color: "#958689" }}>
                This is secondary button color.
              </h5>
            </span>
            <span style={{ flex: 1 }}>
              <pre>
                <code>color: #958689;</code>
              </pre>
            </span>
            <br />
          </div>
          <div class="elementRow">
            <span style={{ flex: 0.5 }}>
              success button or message - #418433
            </span>
            <span style={{ flex: 0.5 }}>
              <h5 class="fontStyle" style={{ color: "#418433" }}>
                This is success button or message color.
              </h5>
            </span>
            <span style={{ flex: 1 }}>
              <pre>
                <code>color: #418433;</code>
              </pre>
            </span>
            <br />
          </div>
          <div class="elementRow">
            <span style={{ flex: 0.5 }}>
              danger button or message - #bc3907
            </span>
            <span style={{ flex: 0.5 }}>
              <h5 class="fontStyle" style={{ color: "#bc3907" }}>
                This is danger button or message color.
              </h5>
            </span>
            <span style={{ flex: 1 }}>
              <pre>
                <code>color: #bc3907;</code>
              </pre>
            </span>
            <br />
          </div>
          <h4>Spacing</h4>
          <div class="elementRow">
            <span style={{ flex: 0.5 }}> body margin - auto</span>
            <span style={{ flex: 0.5 }}>
              <h5 class="fontStyle" style={{ margin: "auto" }}>
                Your margin auto style.
              </h5>
            </span>
            <span style={{ flex: 1 }}>
              <pre>
                <code>margin : auto;</code>
              </pre>
            </span>
            <br />
          </div>
          <div class="elementRow">
            <span style={{ flex: 0.5 }}> body padding - 1px</span>
            <span style={{ flex: 0.5 }}>
              <h5 class="fontStyle" style={{ padding: "22px" }}>
                Your padding style.
              </h5>
            </span>
            <span style={{ flex: 1 }}>
              <pre>
                <code>padding : 3px;</code>
              </pre>
            </span>
            <br />
          </div>
          <div class="elementRow">
            <span style={{ flex: 0.5 }}> div padding- 1px</span>
            <span style={{ flex: 0.5 }}>
              <h5 class="fontStyle" style={{ padding: "22px" }}>
                Your padding style.
              </h5>
            </span>
            <span style={{ flex: 1 }}>
              <pre>
                <code>padding : 3px;</code>
              </pre>
            </span>
            <br />
          </div>
          <h4>Images </h4>
          <div class="elementRow">
            <span style={{ flex: 0.5 }}>
              Image width and height-50% * 50%{" "}
            </span>
            <span style={{ flex: 0.5 }}>
              <h5 class="fontStyle" >
                <img src={tajMahalImage} style={{ width: "50%", height: "50%" }} alt="Taj-mahal" />
              </h5>
            </span>
            <span style={{ flex: 1 }}>
              <pre>
                <code>width : 50%; height: 50%;</code>
              </pre>
            </span>
            <br />
          </div>
        </div>
      </div>
    );
  }
  function Forms() {
    return (
      <div id="forms">
        <h3>Forms</h3>
        <h4> Form Elements</h4>
        <div class="elementRow">
          <span style={{ flex: 0.5 }}>Label and Textbox</span>
          <span style={{ flex: 0.5 }}>
            <label for="fname">First name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Josmi Jose"
            />
          </span>
          <span style={{ flex: 1 }}>
            <pre>
              <code>
                &lt;label for="fname"&gt;First name:&lt;/label&gt; <br />
                &lt;input type="text" id="fname" name="fname" placeholder='Josmi
                Jose'/&gt;
              </code>
            </pre>
          </span>
          <br />
        </div>
        <div class="elementRow">
          <span style={{ flex: 0.5 }}>Dropdown list</span>
          <span style={{ flex: 0.5 }}>
            <label for="cars">Choose a car:</label>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </span>
          <span style={{ flex: 1 }}>
            <pre>
              <code>
                &lt;select name="cars" id="cars"&gt;
                <br />
                &lt;option value="volvo"&gt;Volvo&lt;/option&gt;
                <br />
                &lt;option value="saab"&gt;Saab&lt;/option&gt;
                <br />
                &lt;option value="mercedes"&gt;Mercedes&lt;/option&gt;
                <br />
                &lt;option value="audi"&gt;Audi&lt;/option&gt;
                <br />
                &lt;/select&gt;
                <br />
              </code>
            </pre>
          </span>
          <br />
        </div>
        <div class="elementRow">
          <span style={{ flex: 0.5 }}>Submit button</span>
          <span style={{ flex: 0.5 }}>
            <input type="submit" value="Submit" />
          </span>
          <span style={{ flex: 1 }}>
            <pre>
              <code>&lt;input type="submit" value="Submit"/&gt;</code>
            </pre>
          </span>
          <br />
        </div>
      </div>
    );
  }
  function Lists() {
    return (
      <div id="lists">
        <h3>Lists</h3>
        <h4> Ul Lists</h4>
        <div class="elementRow">
          <span style={{ flex: 0.3 }}>Ul list</span>
          <span style={{  }}>
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </span>
          <span style={{  }}>
            <pre>
              <code>
                &lt;ul&gt;
                <br />
                &lt;li&gt;Coffee &lt;/li&gt;
                <br />
                &lt;li&gt;Tea &lt;/li&gt;
                <br />
                &lt;li&gt;Milk &lt;/li&gt;
                <br />
                &lt;/ul&gt;
                <br />
              </code>
            </pre>
          </span>
          <br />
        </div>
        <h4> Ol Lists</h4>
        <div class="elementRow">
          <span style={{ flex: 0.3 }}>Ul list</span>
          <span style={{ }}>
            <ol>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ol>
          </span>
          <span style={{ flex: 0.1 }}>
            <pre>
              <code>
                &lt;ol&gt;
                <br />
                &lt;li&gt;Coffee &lt;/li&gt;
                <br />
                &lt;li&gt;Tea &lt;/li&gt;
                <br />
                &lt;li&gt;Milk &lt;/li&gt;
                <br />
                &lt;/ol&gt;
                <br />
              </code>
            </pre>
          </span>
          <br />
        </div>
      </div>
    );
  }
  function Components() {
    return (
      <div id="components">
        <h3>Components</h3>
        <h4>Accordian</h4>
        <div class="elementRow">
          <span style={{ flex: 0.5 }}> Accordian</span>
          <span class="examplefont" style={{  }}>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What harsh truths do you prefer to ignore?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is free will real or just an illusion?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </span>
          <span style={{  }}>
            <pre>
              <code>
                &lt;Accordion&gt;
                <br />
                &lt;AccordionItem&gt;
                <br />
                &lt;AccordionItemHeading&gt;
                <br />
                &lt;AccordionItemButton&gt;
                <br />
                What harsh truths do you prefer to ignore?
                <br />
                &lt;/AccordionItemButton&gt;
                <br />
                &lt;/AccordionItemHeading&gt;
                <br />
                &lt;AccordionItemPanel&gt;
                <br />
                &lt;p&gt;
                <br />
                Exercitation in fugiat est ut ad ea cupidatat ut in

                <br />
                &lt;/p&gt;
                <br />
                &lt;/AccordionItemPanel&gt;
                <br />
                &lt;/AccordionItem&gt;
                <br />
                &lt;AccordionItem&gt;
                <br />
                &lt;AccordionItemHeading&gt;
                <br />
                &lt;AccordionItemButton&gt;
                <br />
                Is free will real or just an illusion?
                <br />
                &lt;/AccordionItemButton&gt;
                <br />
                &lt;/AccordionItemHeading&gt;
                <br />
                &lt;AccordionItemPanel&gt;
                <br />
                &lt;p&gt;
                <br />
                In ad velit in ex nostrud dolore cupidatat consectetur

                <br />
                &lt;/p&gt;
                <br />
                &lt;/AccordionItemPanel&gt;
                <br />
                &lt;/AccordionItem&gt;
                <br />
                &lt;/Accordion&gt;
                <br />
              </code>
            </pre>
          </span>
          <br />
        </div>
        <h4> Cards</h4>
        <div class="elementRow">
          <span style={{ flex: 0.3 }}>Cards</span>
          <span style={{ flex: 0.5 }}>
            <div class="card">
              <h3>Card 1</h3>
              <p>Some text</p>
              <p>Some text</p>
            </div>
          </span>
          <span style={{ flex: 1 }}>
            <pre>
              <code>
                &lt;div class="card"&gt;
                <br />
                &lt;h3&gt;Card 1&lt;/h3&gt;
                <br />
                &lt;p&gt;Some text&lt;/p&gt;
                <br />
                &lt;p&gt;Some text&lt;/p&gt;
                <br />
                &lt;/div&gt;
                <br />
              </code>
            </pre>
          </span>
          <br />
        </div>
        <h4> Carousel</h4>
        <div class="elementRow">
          <span style={{ flex: 0.3 }}>Carousel</span>
          <span style={{ flex: 0.5 }}>
            <Carousel showThumbs={false}>
              <div>
                <img src={tajMahalfullImage} style={{ width: "50%", height: "50%" }} />

              </div>
              <div>
                <img src={tajMahalImage} style={{ width: "50%", height: "50%" }} />

              </div>
              <div>
                <img src={tagmahalmoonImage} style={{ width: "50%", height: "50%" }} />

              </div>
            </Carousel>
          </span>
          <span style={{ flex: 1 }}>
            <pre>
              <code>
                &lt;Carousel&gt;  <br />
                &lt;div&gt;   <br />
                &lt;img src="/image.jpeg" /&gt; <br />
                &lt;/div&gt;   <br />
                &lt;div&gt;  <br />
                &lt;img src=/image.jpeg /&gt;   <br />
                &lt;/div&gt;   <br />
                &lt;div&gt;   <br />
                &lt;img src=/image.jpeg/&gt;   <br />
                &lt;/div&gt;   <br />
                &lt;/Carousel&gt;   <br />
              </code>
            </pre>
          </span>
          <br />
        </div>
        <h4> Tables</h4>
        <div class="elementRow">
          <span style={{ flex: 0.3 }}>Table</span>
          <span style={{ flex: 0.5 }}>
            <table>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
              <tr>
                <td>Anom</td>
                <td>19</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>Rekha</td>
                <td>19</td>
                <td>Female</td>
              </tr>
              <tr>
                <td>Subham</td>
                <td>25</td>
                <td>Male</td>
              </tr>
            </table>
          </span>
          <span style={{ flex: 1 }}>
            <pre>
              <code>
                &lt;table&gt;<br />
                &lt;tr&gt;<br />
                &lt;th&gt;Name&lt;/th&gt;<br />
                &lt;th&gt;Age&lt;/th&gt;<br />
                &lt;th&gt;Gender&lt;/th&gt;<br />
                &lt;/tr&gt;<br />
                &lt;tr&gt;<br />

                &lt;/tr&gt;<br />
                &lt;/table&gt;<br />
              </code>
            </pre>
          </span>
          <br />
        </div>

      </div>
    );
  }

  function Navigations() {
    return (
      <div id ="navigationSection" style={{ height: 'calc(100vh - 60px)'}}>
      <h3>Navigation</h3>
      <div class="elementRow">
      <span style={{ flex: 0.5 }}> Navigation </span>
      <span style={{ flex: 0.5 }}>
        <nav className="navigation-1">
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* hamburger svg code... */}
        </button>
        <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </div>
      </nav>
      </span>
      <span style={{ flex: 1 }}>
        <pre>
          <code>
          &lt;nav className="navigation"&gt;<br/>
        &lt;button
          className="hamburger"
        
        &gt;<br/>
          {/* hamburger svg code... */}
        &lt;/button&gt;<br/>
        &lt;div<br/>
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      &gt;<br/>
        &lt;ul&gt;<br/>
          &lt;li&gt;<br/>
            &lt;a href=""&gt;Home&lt;/a&gt;<br/>
          &lt;/li&gt;<br/>
          &lt;li&gt;<br/>
            &lt;a href=""&gt;About&lt;/a&gt;<br/>
          &lt;/li&gt;<br/>
        &lt;/ul&gt;<br/>
      &lt;/div&gt;<br/>
      &lt;/nav&gt;<br/>
          </code>;
        </pre>
      </span>
      <br />
    </div>
     </div>
    );
  }
  return (
    <div id="designSystem">
      <NavHeader />
      <div id="bdyDesignSystems">
        {menuItem == 0 ? (
          <Navigations />
        ) : menuItem == 1 ? (
          <Typography />
        ) : menuItem == 2 ? (
          <>
            <Forms />
            <Lists />
          </>
        ) : 
          menuItem == 4 ? (
            <Components />
          ) : (
            ""
          )}
      </div>
      <CopyrightFooter />
    </div>
  );
}
