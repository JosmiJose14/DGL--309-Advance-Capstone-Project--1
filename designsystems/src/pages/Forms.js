import React, { useState }  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
export const Forms = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="topPadding clsForms marginleft">
      <h2>Labels and textbox</h2>
      <p>Labels and text boxes are elements commonly used in user interfaces to collect information from users.
        A label is a piece of text that is used to describe or explain a text box or another UI element.
        A text box, on the other hand, is a rectangular area in which the user can enter text.</p>
      <br />
     <div style={{textAlign: 'center'}}> <label for="name" style={{marginRight:'5px'}}>First Name:</label>
        <input type="text" name="name" id="name" placeholder="ex: Josmi Jose"></input></div>
      
       <div class="flex-container">
       <div className="card" style={{height:'200px'}}>
         <p className="card-text"> {
           /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
           <div class="expandHideCode" style={{ color: 'black' }} >html  <br></br><br></br>

           </div>
           {isExpanded && (
             <pre>
               <code>
                 {`<label for="name" style={{marginRight:'5px'}}>First Name:</label>
<input type="text" name="name" id="name"></input>`}
               </code>
             </pre>
           )}</p>
       </div>
       <div className="card" style={{height:'200px'}}>
         <p className="card-text"> {
           /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
           <div class="expandHideCode" style={{ color: 'black' }}>css
           <br></br><br></br>
           </div>
           {isExpanded && (
             <pre>
               <code>
                 {`input {
  padding: 3px;
  box-shadow: 3px 3px 5px grey;
  font-size: 14px;
  font-weight: 600;
  width: 300px;
}`}
               </code>
             </pre>
           )}</p>
       </div>
       </div>
       <h2>Dropdown List</h2>
      <p>A dropdown list is a graphical control element, similar to a list box, that allows the user to choose one value from a predefined list of values. The user can select a value from the dropdown list by clicking on the dropdown button and then clicking on a value in the list. </p>
      <br />
      <div style={{textAlign: 'center'}}>
      <label  style={{marginRight:'5px'}}>Select fruits:</label>
        <select>
        <option value="Select">Select</option>
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
      </div>
      <div class="flex-container">
       <div className="card" style={{height:'200px'}}>
         <p className="card-text"> {
           /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
           <div class="expandHideCode" style={{ color: 'black' }} >html
           <br></br><br></br>

           </div>
           {isExpanded && (
             <pre>
               <code>
                 {`<label for="name" style={{marginRight:'5px'}}>First Name:</label>
<input type="text" name="name" id="name"></input>`}
               </code>
             </pre>
           )}</p>
       </div>
       <div className="card" style={{height:'200px'}}>
         <p className="card-text"> {
           /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
           <div class="expandHideCode" style={{ color: 'black' }} >css
           <br></br><br></br>

           </div>
           {isExpanded && (
             <pre>
               <code>
                 {`select {
  padding: 3px;
  box-shadow: 3px 3px 5px grey;
  font-size: 14px;
  font-weight: 600;
  width: 300px;
}`}
               </code>
             </pre>
           )}</p>
       </div>
       </div>
       </div>



  );
};
 
