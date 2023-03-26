import React from "react";

export const List = () => {
  return (
    <div className="topPadding clsLists marginleft">
      <h2>List</h2>
      <p>Lists are used to organize information in a structured and easy-to-read format.</p>
      <div className="flex-container">
        <div className="card" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
          <div className="card-body">
            <p className="card-title"><b>Ordered List</b><br/>An ordered list is a list of items where the items are numbered in a specific order. In HTML, an ordered list is created using the ol tag, and each list item is denoted by the li tag.</p>
            <div className="card-textList"> {
              <div style={{ textAlign: 'center', color: '#ffffff', width: '30%', margin: 'auto' }}><ol>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ol></div>
          /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
              <div className="expandHideCode">html
                <br></br><br></br>
              </div>
              {
                <pre>
                  <code>
                    {`<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`}
                  </code>
                </pre>
              }</div>
          </div>
        </div>
        <div className="card" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
          <div className="card-body" style={{ height: 'auto' }}>
            <p className="card-title"><b>Unordered List</b><br/>An unordered list is a list of items where the items are marked with bullet points, rather than numbers. In HTML, an unordered list is created using the ul tag, and each list item is denoted by the li tag.</p><br />
            <div className="card-text"> {
              <div style={{ textAlign: 'center', color: '#ffffff', width: '30%', margin: 'auto' }}><ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul></div>
          /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
              <div className="expandHideCode">html
                <br></br><br></br>
              </div>
              {
                <pre>
                  <code>
                    {`<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`}
                  </code>
                </pre>
              }</div>

          </div>
        </div>
      </div>
    </div>
  );
};

