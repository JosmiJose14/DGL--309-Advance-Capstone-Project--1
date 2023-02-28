import React, { useState } from "react";
import hairsalon from "../images/hairsalon.jpg";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import tajMahalImage from '../images/tajmahal.jpg';
import tagmahalmoonImage from '../images/tajmahalmoon.jpeg';
import tajMahalfullImage from '../images/tajmahalfull.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';
// reference- https://www.npmjs.com/package/react-accessible-accordion
export const Accordian = () => {
  const [isExpanded, setIsExpanded] = useState(true);
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
      <div class="flex-container">
        <div className="card" style={{ height: '150px', width: '100%' }}>
          <p className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div class="expandHideCode" style={{ color: 'black' }} >Command Prompt
              <br></br>
              {/* <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} /> */}
            </div>
            {isExpanded && (
              <pre>
                <code>
                  {`npm install --save react-accessible-accordion`}
                </code>
              </pre>
            )}</p>
        </div>
        <div className="card" style={{ height: '280px', width: '100%' }}>
          <div class="expandHideCode" style={{ color: 'black' }} >react.js
            <br></br></div>
          <p className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}

            {/* <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} /> */}

            {isExpanded && (
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
            )}</p>
        </div>
      </div>
    </div>
  );
};
//reference- // https://www.javatpoint.com/carousel-in-react
export const Carousels = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="topPadding classCarousel marginleft">
      <h2>Carousel</h2>
      <p>A carousel in React is a component that displays a rotating set of items, typically images, in a circular fashion. There are many pre-built carousel components available for React that you can use, or you can build your own from scratch.</p>
      <br />
      <div style={{ width: '70%', height: '200px' }}>
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
      </div>
      <div class="flex-container">
        <div className="card" style={{ height: '140px', width: '100%' }}>
          <p className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div class="expandHideCode" style={{ color: 'black' }} >Command Prompt
              <br></br>
            </div>
            {isExpanded && (
              <pre>
                <code>
                  {`npm install  add react-responsive-carousel  `}
                </code>
              </pre>
            )}</p>
        </div>
        <div className="card" style={{ height: '275px', width: '100%' }}>
          <p className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div class="expandHideCode" style={{ color: 'black' }}>react.js
              <br></br>
            </div>
            {isExpanded && (
              <pre>
                <code>
                  {`import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';
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
</Carousel>`}
                </code>
              </pre>
            )}</p>
        </div>
      </div>
    </div>
  );
};

export const Table = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="topPadding classTable marginleft">
      <h2>Table</h2>
      <p>a table is a way to display data in rows and columns. It allows you to organize and present information in a structured format, similar to a spreadsheet.</p>
      <br />
      <table style={{ width: '97%' }}>
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
      </table>
      <div class="flex-container">
        <div className="card" style={{ height: '250px', width: '97%' }}>
          <p className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div class="expandHideCode" style={{ color: 'black' }} >Html
              <br></br>
            </div>
            {isExpanded && (
              <pre>
                <code>
                  {` <table>
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
</table> `}
                </code>
              </pre>
            )}</p>
        </div>
        <div className="card" style={{ height: '250px', width: '97%' }}>
          <p className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div class="expandHideCode" style={{ color: 'black' }}>css
              <br></br>
            </div>
            {isExpanded && (
              <pre>
                <code>
                  {`table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}

table th,
table td {
  padding: .625em;
  text-align: left;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}`}
                </code>
              </pre>
            )}</p>
        </div>
      </div>
    </div>
  );
};
export const Card = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="topPadding classCard marginleft">
      <h2>Card</h2>
      <p>Cards are often used to group related content together, and are frequently found in responsive web design because they can adapt to different screen sizes and orientations. They can be used to display a variety of content, such as articles, blog posts, products, images, and more.</p>
      <br />
      <div class="flex-container">
        <div className="card" style={{ backgroundColor: '#000000', color: '#ffffff', height: '300px',width:'30%' }}>
          <img src={hairsalon} fluid={true} alt="hair-salon" />
          <div className="card-body" style={{ height: '60px' }}>
            <p className="card-title"><h4>Title</h4></p>
            <p className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
              <div class="expandHideCode">Test Card
                <br></br><br></br>
              </div>
            </p>
          </div>
        </div>
        <div className="card" style={{ backgroundColor: '#000000', color: '#ffffff', height: '300px',width:'30%'  }}>
          <img src={hairsalon} fluid={true} alt="hair-salon" />
          <div className="card-body" style={{ height: '60px' }}>
            <p className="card-title"><h4>Title</h4></p>
            <p className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
              <div class="expandHideCode">Test Card
                <br></br><br></br>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div class="flex-container">
        <div className="card" style={{ height: '250px', width: '43%' }}>
          <p className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div class="expandHideCode" style={{ color: 'black' }} >Html
              <br></br>
            </div>
            {isExpanded && (
              <pre>
                <code>
                  {`<div class="flex-container">
        <div className="card" style={{ backgroundColor: '#000000', color: '#ffffff',height: '70%'}}>
          <img src={hairsalon} fluid={true} alt="hair-salon"  />
          <div className="card-body" style={{height: 'auto'}}>
            <p className="card-title"><h4>Aspect ratio</h4></p>
            <p className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
              <div class="expandHideCode">Test Card
              <br></br><br></br>
              </div>
             </p>
          </div>
        </div>
        </div> `}
                </code>
              </pre>
            )}</p>
        </div>
        <div className="card" style={{ height: '250px', width: '43%' }}>
          <p className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div class="expandHideCode" style={{ color: 'black' }}>css
              <br></br>
            </div>
            {isExpanded && (
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
            )}</p>
        </div>
      </div>
    </div>
  );
};

export const ToolTip = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="topPadding classCard marginleft">
      <h2>ToolTip</h2>
      <p>A tooltip in HTML is a small pop-up box that appears when the user hovers over an element on a web page, such as a link or an image. The tooltip usually contains additional information about the element, providing context or clarification to the user.</p>
      <br />
      <div style={{ width: '70%', height: 'auto',textAlign: 'center'}}>
          <button title="Click me for more info">Learn More</button>
      </div>
      <div class="flex-container">        
        <div className="card" style={{ height: 'auto', width: '100%' }}>
          <p className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div class="expandHideCode" style={{ color: 'black' }}>html.js
              <br></br> <br></br>
            </div>
            {isExpanded && (
              <pre>
                <code>
                  {`<button title="Click me for more info">Learn More</button>`}
                </code>
              </pre>
            )}</p>
        </div>
      </div>
    </div>
  );
};

