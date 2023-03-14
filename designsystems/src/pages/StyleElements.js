import React, { useState } from "react";
import hairsalon from "../images/hairsalon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const Typography = () => {
  return (
    <div class="marginleft topPadding clsTypography">
      <h2>Typography</h2>
      <p>
        Designing the typography of h1 to h6 headings in a design system
        involves defining the font styles and sizes that will be used for each
        heading level. This helps to ensure consistency in the visual appearance
        of headings across the design system, making it easier for designers and
        developers to create visually appealing and effective headings.
      </p>
      <br />
      <div style={{ height: '650px', overflow: 'auto' }}>
        <table>
          <tbody>
            <tr>
              <td>Heading one</td>
              <td>
                <h1>This is h1 tag.</h1>
              </td>
              <td>
                <pre>
                  {`<h1>This is h1 tag.</h1>`}
                </pre>
              </td>
            </tr>
            <tr>
              <td>Heading two</td>
              <td>
                <h2>This is h2 tag.</h2>
              </td>
              <td>
                <pre>
                  {`<h2>This is h2 tag.</h2>`}
                </pre>
              </td>
            </tr>
            <tr>
              <td>Heading three</td>
              <td>
                <h3>This is h3 tag.</h3>
              </td>
              <td>
                <pre>
                  {`<h3>This is h3 tag.</h3>`}
                </pre>
              </td>
            </tr>
            <tr>
              <td>Heading four</td>
              <td>
                <h4>This is h4 tag.</h4>
              </td>
              <td>
                <pre>
                  {`<h4>This is h4 tag.</h4>`}
                </pre>
              </td>
            </tr>
            <tr>
              <td>Heading five</td>
              <td>
                <h5>This is h5 tag.</h5>
              </td>
              <td>
                <pre>
                  {`<h5>This is h5 tag.</h5>`}
                </pre>
              </td>
            </tr>
            <tr>
              <td>Heading six</td>
              <td>
                <h6>This is h6 tag.</h6>
              </td>
              <td>
                <pre>
                  {`<h6>This is h6 tag.</h6>`}
                </pre>
              </td>
            </tr>
            <tr>
              <td>p tag </td>
              <td>
                <p>This is p tag.</p>
              </td>
              <td>
                <pre>
                  {`<p>This is p tag.</h6>`}
                </pre>
              </td>
            </tr>
            <tr>
              <td>Font-Family for headings - Josefin-Sans</td>
              <td>
                <h3 style={{ fontFamily: 'Josefin Sans' }}>This is Josefin-Sans tag.</h3>
              </td>
              <td>
                <pre>
                  {`{font-family: 'Josefin Sans';}`}
                </pre>
              </td>
            </tr>
            <tr>
              <td>Font-Family for body text - sans-serif</td>
              <td>
                <h3 style={{ fontFamily: 'sans-serif' }}>This is sans-serif font.</h3>
              </td>
              <td>
                <pre>
                  {`{fontFamily: 'sans-serif';}`}
                </pre>
              </td>
            </tr>
            <tr>
              <td>Font-size for body text - 16px</td>
              <td>
                <p style={{ fontSize: '16px' }}>This is 16px.</p>
              </td>
              <td>
                <pre>
                  {`{font-size: '16px';}`}
                </pre>
              </td>
            </tr>
            <tr>
              <td>Font-size for image caption - 16px</td>
              <td>
                <p style={{ fontSize: '16px' }}>This is 16px.</p>
              </td>
              <td>
                <pre>
                  {`{font-size: '16px';}`}
                </pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const Colors = () => {
  return (
    <div class="topPadding clsColors marginleft">
      <h2>Colors</h2>
      <p>In a web page, different colors are used to
        create visual hierarchy, convey meaning, and establish
        brand identity. The color selection should be guided by
        accessibility considerations, such as ensuring sufficient
        color contrast between text and its background. Additionally,
        the use of color should be consistent across the design system
        to ensure a coherent and cohesive visual experience.</p>
      <br />
      {/* reference site - https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox */}
      <div class="flex-container" >
        <div class="card" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
          <h3>body text color</h3>
          <p>hex - #000000 </p>
          <p>rgb - RGB (0, 0, 0)</p>
        </div>
        <div class="card" style={{ backgroundColor: '#b82243', color: '#ffffff' }}>
          <h3>header text color</h3>
          <p>hex - #b82243 </p>
          <p>rgb - RGB (184, 34, 67)</p>
        </div>
        <div class="card" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
          <h3>background color</h3>
          <p>hex - #ffffff </p>
          <p>rgb - RGB (255, 255, 255) </p>
        </div>
        <div class="card" style={{ backgroundColor: '#e61158', color: '#ffffff' }}>
          <h3>primary button color</h3>
          <p>hex - #e61158 </p>
          <p>rgb - RGB (230, 17, 88)</p>
        </div>
        <div class="card" style={{ backgroundColor: '#ECD1A0', color: '#ffffff' }}>
          <h3>secondary button color</h3>
          <p>hex - #ECD1A0 </p>
          <p>rgb - RGB (236, 209, 160)</p>
        </div>
        <div class="card" style={{ backgroundColor: '#418433', color: '#ffffff' }}>
          <h3>success message</h3>
          <p>hex - #418433 </p>
          <p>rgb - RGB (65, 132, 51)</p>
        </div>
        <div class="card" style={{ backgroundColor: '#bc3907', color: '#ffffff' }}>
          <h3>error message</h3>
          <p>hex - #bc3907 </p>
          <p>rgb - RGB (188, 57, 7)</p>
        </div>
        <div class="card" style={{ backgroundColor: '#f4f4f4', color: '#000000' }}>
          <h3>button hover</h3>
          <p>hex - #f4f4f4 </p>
          <p>rgb - RGB (149, 134, 137)</p>
        </div>
      </div>
    </div>
  );
};
export const Images = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (

    <div class="topPadding clsImages marginleft">
      <h2>Images</h2>
      <p>An image style guide will typically
        outline specific guidelines for all of these elements,
        as well as any other relevant visual or formatting specifications,
        to ensure that images are consistent with the overall look and feel of the brand.</p>
      <div class="flex-container">
        <div className="card" style={{height: '600px', overflow: 'scroll' }}>
          <img src={hairsalon} fluid={true} alt="hair-salon" style={{ paddingTop: '38%' }} />
          <div className="card-body" style={{ height: '600px' }}>
            <p className="card-title"><h4>Aspect ratio</h4>The aspect ratio of an image refers to the proportional relationship between its width and height.</p>
            <p className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
              <div class="expandHideCode">react.js
                <br></br><br></br>
              </div>
              {isExpanded && (
                <pre>
                  <code>
                    {`import hairsalon from "../images/hairsalon.jpg";
<img src={hairsalon} fluid={true} alt="hair-salon" />`}
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
                    {`img {
          width: 100%;
          height: 60%;
        }`}
                  </code>
                </pre>
              )}</p>
          </div>
        </div>
        <div className="card" style={{height: '600px', overflow: 'scroll' }}>
          <img src={hairsalon} class="imgborderCss" fluid={true} alt="hair-salon" style={{ marginTop: '45%' }} />
          <div className="card-body" style={{ height: '600px' }}>
            <p className="card-title"><h4>Image borders and border radius</h4>An image border is a frame or line that surrounds an image. The border radius property in CSS allows you to specify the rounding of the corners of an element's border.</p>
            <p className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
              <div class="expandHideCode">react.js
                <br></br><br></br>
              </div>
              {isExpanded && (
                <pre>
                  <code>
                    {`import hairsalon from "../images/hairsalon.jpg";
<img src={hairsalon}  fluid={true} alt="hair-salon" />`}
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
                    {`img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
}`}
                  </code>
                </pre>
              )}</p>
          </div>
        </div>
      </div>
    </div>

  );
};
