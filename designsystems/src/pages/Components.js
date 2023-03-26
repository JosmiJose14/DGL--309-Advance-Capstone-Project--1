import React from "react";
import hairsalon from "../images/hairsalon.jpg";
import carousel from '../images/carousel.jpg';
import carousel1 from '../images/carousel1.jpg';
import carousel2 from '../images/carousel2.jpg';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.className
import 'react-accessible-accordion/dist/fancy-example.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// reference- https://www.npmjs.com/package/react-accessible-accordion
export const Accordian = () => {
  return (
    <div className="topPadding classAccordian marginleft ">
      <h2 style={{ paddingTop: 20 }}>Accordian</h2>
      <p style={{ paddingTop: 10, paddingBottom: 10 }}>React accordion refers to an expandable and collapsible content panel. Accordions are commonly used to organize and present information in a compact and organized manner, allowing users to toggle between the visibility of different sections of content.</p>

      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true} >
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
              In ad velit in ex nostrud dolore cupidatat consectetur
              ea in ut nostrud velit in irure cillum tempor laboris
              sed adipisicing eu esse duis nulla non.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      <div className="flex-container">
        <div className="card" style={{ height: '150px', width: '100%' }}>
          <div className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div className="expandHideCode" style={{ color: 'black' }} >Command Prompt
              <br></br>
              {/* <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} /> */}
            </div>
            {
              <pre>
                <code>
                  {`npm install --save react-accessible-accordion`}
                </code>
              </pre>
            }</div>
        </div>
        <div className="card" style={{ height: '280px', width: '100%' }}>
          <div className="expandHideCode" style={{ color: 'black' }} >react.js
            <br></br></div>
          <div className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}

            {/* <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} /> */}

            {
              <pre>
                <code>
                  {`import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
<Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
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
                    In ad velit in ex nostrud dolore cupidatat consectetur
                    ea in ut nostrud velit in irure cillum tempor laboris
                    sed adipisicing eu esse duis nulla non.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
    </Accordion>`}
                </code>
              </pre>
            }</div>
        </div>
      </div>
    </div>
  );
};
//reference- // https://www.javatpoint.com/carousel-in-react
export const Carousels = () => {
  return (
    <div className="topPadding classCarousel marginleft">
      <h2>Carousel</h2>
      <p>A carousel in React is a component that displays a rotating set of items, typically images, in a circular fashion. There are many pre-built carousel components available for React that you can use, or you can build your own from scratch.</p>
      <br />
      <div className="divCarousel">
        <Carousel showThumbs={false}>
          <div>
            <img src={carousel} style={{ width: "60%", height: "50%" }} />
          </div>
          <div>
            <img src={carousel1} style={{ width: "60%", height: "50%" }} />
          </div>
          <div>
            <img src={carousel2} style={{ width: "60%", height: "50%" }} />
          </div>
        </Carousel>
      </div>
      <div className="flex-container">
        <div className="card" style={{ height: '140px' }}>
          <div className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div className="expandHideCode" style={{ color: 'black' }} >Command Prompt
              <br></br>
            </div>
            {
              <pre>
                <code>
                  {`npm install  add react-responsive-carousel  `}
                </code>
              </pre>
            }</div>
        </div>
        <div className="card" style={{ height: '200px' }}>
          <div className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div className="expandHideCode" style={{ color: 'black' }}>react.js
              <br></br>
            </div>
            {
              <pre>
                <code>
                  {`import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';
<Carousel showThumbs={false}>
<div>
  <img src={carousel} style={{ width: "60%", height: "50%" }} />
</div>
<div>
  <img src={carousel1} style={{ width: "60%", height: "50%" }} />
</div>
<div>
  <img src={carousel2} style={{ width: "60%", height: "50%" }} />
</div>
</Carousel>`}
                </code>
              </pre>
            }</div>
        </div>
      </div>
    </div>
  );
};

export const Table = () => {
  return (
    <div className="topPadding classTable marginleft">
      <h2>Table</h2>
      <p>a table is a way to display data in rows and columns. It allows you to organize and present information in a structured format, similar to a spreadsheet.</p>
      <br />
      <table className="tblClass" style={{ width: '97%' }}>
        <tbody>
          <tr>
            <th>Tuesday</th>
            <td>9am - 5pm</td>
          </tr>
          <tr>
            <th>Wednesday</th>
            <td>9am - 5pm</td>
          </tr>
          <tr>
            <th>Thursday</th>
            <td>9am - 5pm</td>
          </tr>
          <tr>
            <th>Friday</th>
            <td>9am - 5pm</td>
          </tr>
          <tr>
            <th>Saturday</th>
            <td>9am - 5pm</td>
          </tr>
          <tr>
            <th>Sunday</th>
            <td>Closed</td>
          </tr>
          <tr>
            <th>Monday</th>
            <td>Closed</td>
          </tr>
          <tr>
            <td colSpan={'2'}>
              <small><em>All statutory holidays are closed. and tuesdays following a
                holiday monday.</em></small>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex-container">
        <div className="card" style={{ height: '350px' }}>
          <div className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div className="expandHideCode" style={{ color: 'black' }} >Html
              <br></br>
            </div>
            {
              <pre>
                <code>
                  {`<table>
              <tbody>
                <tr>
                  <th>Tuesday</th>
                  <td>9am - 5pm</td>
                </tr>
                <tr>
                  <th>Wednesday</th>
                  <td>9am - 5pm</td>
                </tr>
                <tr>
                  <th>Thursday</th>
                  <td>9am - 5pm</td>
                </tr>
                <tr>
                  <th>Friday</th>
                  <td>9am - 5pm</td>
                </tr>
                <tr>
                  <th>Saturday</th>
                  <td>9am - 5pm</td>
                </tr>
                <tr>
                  <th>Sunday</th>
                  <td>Closed</td>
                </tr>
                <tr>
                  <th>Monday</th>
                  <td>Closed</td>
                </tr>
                <tr>
                  <td colSpan={'2'}>
                    <small><em>All statutory holidays are closed. and tuesdays following a
                      holiday monday.</em></small>
                  </td>
                </tr>
              </tbody>
            </table> `}
                </code>
              </pre>
            }</div>
        </div>
        <div className="card" style={{ height: '350px' }}>
          <div className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div className="expandHideCode" style={{ color: 'black' }}>css
              <br></br>
            </div>
            {
              <pre>
                <code>
                  {`table {
  width: 70%;
  padding: 30px;
  border-style: outset;
  margin: auto;
  text-align: center;
}

th {
  text-align: center;
}`}
                </code>
              </pre>
            }</div>
        </div>
      </div>
    </div>
  );
};
export const Card = () => {
  return (
    <div className="topPadding classCard marginleft">
      <h2>Card</h2>
      <p>Cards are often used to group related content together, and are frequently found in responsive web design because they can adapt to different screen sizes and orientations. They can be used to display a variety of content, such as articles, blog posts, products, images, and more.</p>
      <br />
      <div className="flex-container">
        <div className="card" style={{ backgroundColor: '#000000', color: '#ffffff', height: '350px', width: '30%' }}>
          <img src={hairsalon} alt="hair-salon" />
          <div className="card-body" style={{ height: '60px' }}>
            <p className="card-title"><b>Title</b></p>
            <div className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
              <div className="expandHideCode">Test Card
              </div>
            </div>
          </div>
        </div>
        <div className="card" style={{ backgroundColor: '#000000', color: '#ffffff', height: '350px', width: '30%' }}>
          <img src={hairsalon} alt="hair-salon" />
          <div className="card-body" style={{ height: '60px' }}>
            <p className="card-title"><b>Title</b></p>
            <div className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
              <div className="expandHideCode">Test Card
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-container">
        <div className="card" style={{ height: '250px', width: '43%' }}>
          <div className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div className="expandHideCode" style={{ color: 'black' }} >Html
              <br></br>
            </div>
            {
              <pre>
                <code>
                  {`<div className="flex-container">
        <div className="card" style={{ backgroundColor: '#000000', color: '#ffffff',height: '70%'}}>
          <img src={hairsalon} fluid={true} alt="hair-salon"  />
          <div className="card-body" style={{height: 'auto'}}>
            <p className="card-title"><h4>Aspect ratio</h4></p>
            <div className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
              <div className="expandHideCode">Test Card
              <br></br><br></br>
              </div>
             </div>
          </div>
        </div>
        </div> `}
                </code>
              </pre>
            }</div>
        </div>
        <div className="card" style={{ height: '250px', width: '43%' }}>
          <div className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div className="expandHideCode" style={{ color: 'black' }}>css
              <br></br>
            </div>
            {
              <pre>
                <code>
                  {`.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
  height: auto;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
   /*height: 100%; */
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 16px;
  margin-bottom: 10px;
}

.card-text {
  font-size: 16px;
  color: #000000;
  overflow-x: auto;
    width: 100%;
    max-width: 100%;
}
.card-textList
{
  font-size: 16px;
  color: #000000;
    width: 100%;
    max-width: 100%;
}
@media screen and (max-width: 900px) {
.card
{
  width: 100%;
}
}`}
                </code>
              </pre>
            }</div>
        </div>
      </div>
    </div>
  );
};

export const ToolTip = () => {
  return (
    <div className="topPadding classCard marginleft">
      <h2>ToolTip</h2>
      <p>A tooltip in HTML is a small pop-up box that appears when the user hovers over an element on a web page, such as a link or an image. The tooltip usually contains additional information about the element, providing context or clarification to the user.</p>
      <br />
      <div style={{ width: '70%', height: 'auto', textAlign: 'center' }}>
        <label title="Click me for more info">Click here see the tooltip</label>
      </div>
      <div className="flex-container">
        <div className="card" style={{ height: 'auto', width: '100%' }}>
          <div className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div className="expandHideCode" style={{ color: 'black' }}>html.js
              <br></br> <br></br>
            </div>
            {
              <pre>
                <code>
                  {`<label title="Click me for more info">Click here see the tooltip</label>`}
                </code>
              </pre>
            }</div>
        </div>
      </div>
    </div>
  );
};

export const Section = () => {
  return (
    <div className="topPadding classSection marginleft">
      <h2>Section</h2>
      <p>Section are created for different elements under a heading.</p>
      <br />
      <div className="service-container sidepadding">
        <div className="service-section">
          <h3 className="headColor">Hair Examination and Remedies</h3>
          <p title="Book our service for detailed hair examination">This service include importance of determining hair type and maintaining hair health, common hair problems and their treatments, product selection tips, and the benefits of consulting a professional. It emphasizes the need for personalized care and attention to maintain healthy, beautiful hair.</p>
          <p><b>Hourly Rate:</b> $75 (+ plus product fee)</p>
          <input type="button" value="Book" id="buttons" />
        </div>
        <div className="service-section">
          <h3 className="headColor">Gender-free haircuts</h3>
          <p title="Book our service for detailed  hair examination">Our hair stylists  also offer consultations to help clients choose a gender-free haircut that best suits their needs and preferences.  Our environment welcome individuals to express themselves through their hair.</p>
          <p><b>Hourly Rate:</b> $100 (+ plus product fee)</p>
          <input type="button" value="Book" id="buttons" />
        </div>
      </div>
      <div className="flex-container">
        <div className="card" style={{ height: '250px' }}>
          <div className="card-text"> {
           /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div className="expandHideCode" style={{ color: 'black' }} >html  <br></br><br></br>

            </div>
            {
              <pre>
                <code>
                  {`<div className="service-container sidepadding">
        <div className="service-section">
          <h3 className="headColor">Hair Examination and Remedies</h3>
          <p title="Book our service for detailed hair examination">This service include importance of determining hair type and maintaining hair health, common hair problems and their treatments, product selection tips, and the benefits of consulting a professional. It emphasizes the need for personalized care and attention to maintain healthy, beautiful hair.</p>
          <p><b>Hourly Rate:</b> $75 (+ plus product fee)</p>
          <input type="button" value="Book" id="buttons"/>
        </div>
        <div className="service-section">
          <h3 className="headColor">Gender-free haircuts</h3>
          <p title="Book our service for detailed  hair examination">Our hair stylists  also offer consultations to help clients choose a gender-free haircut that best suits their needs and preferences.  Our environment welcome individuals to express themselves through their hair.</p>
          <p><b>Hourly Rate:</b> $100 (+ plus product fee)</p>
          <input type="button" value="Book" id="buttons"/>
        </div>       
      </div>`}
                </code>
              </pre>
            }</div>
        </div>
        <div className="card" style={{ height: '250px' }}>
          <div className="card-text"> {
           /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div className="expandHideCode" style={{ color: 'black' }}>css
              <br></br><br></br>
            </div>
            {
              <pre>
                <code>
                  {`.service-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  margin: 1% 0;
  text-align: center;
}

/* Style for the first section */
.service-section {
  flex-basis: 50%;
  padding: 40px 20px;
  box-sizing: border-box;
  background-color: #f9f9f9;
}

/* Style for the second section */
.service-section:nth-child(2),
.service-section:nth-child(3) {
  background-color: #e9e9e9;
}`}
                </code>
              </pre>
            }</div>
        </div>
      </div>
    </div>
  )
};

