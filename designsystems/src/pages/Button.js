import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
export const ButtonStyles = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="topPadding clsbuttons marginleft">
      <h2>Buttons</h2>
      <p>Buttons in web development refer to clickable elements that perform a specific action when clicked.</p>
      <div class="flex-container">
        <div className="card" style={{ height: '580px', overflow: 'scroll' }}>
          <div className="card-body" style={{ height: '600px' }}>
            <p className="card-title"><h4>Submit and Reset Button</h4>A submit button is used to submit a form and is typically labeled "Submit". When clicked, it sends the data entered in the form to a server for processing.</p>
            <p>A reset button is used to reset all the form fields to their default values. It is usually labeled "Reset".</p>
            <p className="card-text"> {
              <div style={{ textAlign: 'center' }}> <input type="submit" value="Submit" id="buttons" /><input type="reset" value="Reset" id="buttons" style={{ marginTop: '1%' }} /></div>
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
              <div class="expandHideCode" >html
                <br></br><br></br>
              </div>
              {isExpanded && (
                <pre>
                  <code>
                    {`<input type="submit" value="Submit" id="buttons"/>
                     <input type="reset" value="Reset" id="buttons" />`}
                  </code>
                </pre>
              )}</p>
            <p className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
              <div class="expandHideCode">css
                <br></br><br></br>
              </div>
              {isExpanded && (
                <pre>
                  <code>
                    {`#buttons  {
  font-size: 2.5em;
  font-weight: bold;
  font-family: "Arial", serif;
  padding: 8px 40px;
  background: #e61158;
  border: 0px;
  margin-left: 0px;
  margin-right: 50px;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, .75);
  -moz-box-shadow: 0 0 4px rgba(0, 0, 0, .75);
  box-shadow: 0 0 4px rgba(0, 0, 0, .75);
  color: #FFFAFA;
}
#buttons:hover
{
  background-color: #958689;
  outline: none;
  -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, .75);
  -moz-box-shadow: 0 0 1px rgba(0, 0, 0, .75);
  box-shadow: 0 0 1px rgba(0, 0, 0, .75);
}
#buttons:focus {
  outline: none;
}
`}
                  </code>
                </pre>
              )}</p>
          </div>
        </div>
        <div className="card" style={{height: '580px', overflow: 'scroll' }}>
          <div className="card-body" style={{ height: '600px' }}>
            <p className="card-title"><h4>Inactive Button</h4>Disabled buttons are buttons that are non-interactive and do not respond to user actions. They are typically grayed out and may display a message indicating that they are disabled. This can be useful in certain scenarios where you want to prevent users from clicking a button until certain conditions are met.</p><br />
            <p className="card-text"> {
              <div style={{ textAlign: 'center' }}> <input type="reset" value="Inactive" id="buttons" disabled style={{ backgroundColor: '#5c494f' }} /></div>
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
              <div class="expandHideCode" >html
                <br></br><br></br>
              </div>
              {isExpanded && (
                <pre>
                  <code>
                    {`<input type="submit" value="Inactive" id="buttons" disabled/>`}
                  </code>
                </pre>
              )}</p>
            <p className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
              <div class="expandHideCode">css
                <br></br><br></br>
              </div>
              {isExpanded && (
                <pre>
                  <code>
                    {`#buttons  {
  font-size: 2.5em;
  font-weight: bold;
  font-family: "Arial", serif;
  padding: 8px 40px;
  background: #5c494f;
  border: 0px;
  margin-left: 0px;
  margin-right: 50px;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, .75);
  -moz-box-shadow: 0 0 4px rgba(0, 0, 0, .75);
  box-shadow: 0 0 4px rgba(0, 0, 0, .75);
  color: #FFFAFA;
}
#buttons:hover
{
  background-color: #958689;
  outline: none;
  -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, .75);
  -moz-box-shadow: 0 0 1px rgba(0, 0, 0, .75);
  box-shadow: 0 0 1px rgba(0, 0, 0, .75);
}
#buttons:focus {
  outline: none;
}
`}
                  </code>
                </pre>
              )}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
