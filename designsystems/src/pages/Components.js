import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <h2 style={{paddingTop: 20}}>Accordian</h2>
      <p style={{paddingTop: 10, paddingBottom: 10}}>React accordion refers to an expandable and collapsible content panel. Accordions are commonly used to organize and present information in a compact and organized manner, allowing users to toggle between the visibility of different sections of content.</p>

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
        <div className="card" style={{height:'150px',width:'100%'}}>
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
        <div className="card" style={{height:'280px',width:'100%'}}>
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
 
export const Carousels = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="topPadding classCarousel marginleft">
     <h2>Carousel</h2>
      <p>A carousel in React is a component that displays a rotating set of items, typically images, in a circular fashion. There are many pre-built carousel components available for React that you can use, or you can build your own from scratch.</p>
      <br/>
      <div style={{    width: '70%',height: '200px'}}>
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
        <div className="card" style={{height:'140px',width:'100%'}}>
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
        <div className="card" style={{height:'275px',width:'100%'}}>
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
      <p>A carousel in React is a component that displays a rotating set of items, typically images, in a circular fashion. There are many pre-built carousel components available for React that you can use, or you can build your own from scratch.</p>
      <br/>     
       </div>
  );
};
  export const Card = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    return (
      <div className="topPadding classCard marginleft">
       <h2>Card</h2>
        <p>A carousel in React is a component that displays a rotating set of items, typically images, in a circular fashion. There are many pre-built carousel components available for React that you can use, or you can build your own from scratch.</p>
        <br/>     
         </div>
    );
};
 

