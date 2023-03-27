import React , { useState, useEffect } from "react";
export const Forms = () => {
  const [module, setModule] = useState(null);

  useEffect(() => {
    import('/assets/environment-1a3ab62fa5e0.js')
      .then((module) => setModule(module))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="topPadding clsForms marginleft">
      <h2>Labels and textbox </h2>
      <p>Labels and text boxes are elements commonly used in user interfaces to collect information from users.
        A label is a piece of text that is used to describe or explain a text box or another UI element.
        A text box, on the other hand, is a rectangular area in which the user can enter text.</p>
      <br />
      <div style={{ width: '70%' }}>
        <label>
          Name:
          <input type="text" required placeholder='ex : josmi' />
        </label></div>

      <div className="flex-container">
        <div className="card" style={{ height: '150px' }}>
          <div className="card-text"> {
           /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div className="expandHideCode" style={{ color: 'black' }} >html  <br></br><br></br>

            </div>
            {
              <pre>
                <code>
                  {`<label>Name:
<input type="text" required placeholder='ex : josmi' /></label></div>`}
                </code>
              </pre>
            }</div>
        </div>
        <div className="card" style={{ height: '150px' }}>
          <div className="card-text"> {
           /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div className="expandHideCode" style={{ color: 'black' }}>css
              <br></br><br></br>
            </div>
            {
              <pre>
                <code>
                  {`input {
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 16px;
}
label {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
}`}
                </code>
              </pre>
            }</div>
        </div>
      </div>
      <h2>Dropdown List</h2>
      <p>A dropdown list is a graphical control element, similar to a list box, that allows the user to choose one value from a predefined list of values. The user can select a value from the dropdown list by clicking on the dropdown button and then clicking on a value in the list. </p>
      <br />
      <div style={{ width: '70%' }}>
        <label>
          Select Services:
          <select required>
            <option disabled>Select a Service</option>
            <option value="Option 1">Service 1</option>
            <option value="Option 2">Service 2</option>
            <option value="Option 3">Service 3</option>
          </select>
        </label>
      </div>
      <div className="flex-container">
        <div className="card" style={{ height: '200px' }}>
          <div className="card-text"> {
           /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div className="expandHideCode" style={{ color: 'black' }} >html
              <br></br><br></br>

            </div>
            {
              <pre>
                <code>
                  {` <label>
            Select Services:
            <select required>
              <option disabled>Select a Service</option>
              <option value="Option 1">Service 1</option>
              <option value="Option 2">Service 2</option>
              <option value="Option 3">Service 3</option>
            </select>
          </label>`}
                </code>
              </pre>
            }</div>
        </div>
        <div className="card" style={{ height: '200px' }}>
          <div className="card-text"> {
           /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div className="expandHideCode" style={{ color: 'black' }} >css
              <br></br><br></br>

            </div>
            {
              <pre>
                <code>
                  {`select {
   padding: 10px;
   margin-top: 5px;
   margin-bottom: 5px;
   border: 1px solid #ccc;
   border-radius: 4px;
   box-sizing: border-box;
   font-family: inherit;
   font-size: 16px;
}`}
                </code>
              </pre>
            }</div>
        </div>
      </div>
    </div>
  );
};

