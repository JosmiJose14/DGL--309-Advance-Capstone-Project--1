import React, { useState }  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
 
export const List = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="clsLists marginleft">
    <h2>List</h2>
    <p>Lists are used to organize information in a structured and easy-to-read format.</p>
    <div class="flex-container">
      <div className="card" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
        <div className="card-body">
          <p className="card-title"><h4>Ordered List</h4>An ordered list is a list of items where the items are numbered in a specific order. In HTML, an ordered list is created using the ol tag, and each list item is denoted by the li tag.</p>
          <p className="card-textList"> {
            <div style={{ textAlign: 'center',color:'#ffffff',width: '30%',  margin: 'auto' }}><ol>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ol></div>
          /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div class="expandHideCode" onClick={() => setIsExpanded(!isExpanded)}>html
              <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
            </div>
            {isExpanded && (
              <pre>
                <code>
                  {`<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`}
                </code>
              </pre>
            )}</p>
      </div>
      </div>
      <div className="card" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
        <div className="card-body" style={{height:'auto'}}>
          <p className="card-title"><h4>Unordered List</h4><p>An unordered list is a list of items where the items are marked with bullet points, rather than numbers. In HTML, an unordered list is created using the ul tag, and each list item is denoted by the li tag.</p></p><br/>
          <p className="card-text"> {
            <div style={{ textAlign: 'center',color:'#ffffff',width: '30%',  margin: 'auto' }}><ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul></div>
          /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div class="expandHideCode" onClick={() => setIsExpanded(!isExpanded)}>html
              <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
            </div>
            {isExpanded && (
              <pre>
                <code>
    {`<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`}
                </code>
              </pre>
            )}</p>
          
        </div>
      </div>
    </div>
  </div>
  );
};
 
