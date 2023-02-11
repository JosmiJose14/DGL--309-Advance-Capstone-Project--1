import React, { useState } from "react";
export const Typography = () => {
  return (
    <div id="clsTypography" class="marginleft">
      <h2>Typography</h2>
      <p>
        Designing the typography of h1 to h6 headings in a design system
        involves defining the font styles and sizes that will be used for each
        heading level. This helps to ensure consistency in the visual appearance
        of headings across the design system, making it easier for designers and
        developers to create visually appealing and effective headings.
      </p>
      <br />
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
  );
};

export const Colors = () => {
  return (
    <div className="clsColors" class="marginleft">
      <h2>Colors</h2>
      <p>In a design system, different colors are used to
         create visual hierarchy, convey meaning, and establish 
         brand identity. The color selection should be guided by
          accessibility considerations, such as ensuring sufficient 
          color contrast between text and its background. Additionally, 
          the use of color should be consistent across the design system
           to ensure a coherent and cohesive visual experience.</p>
           <br/>
           {/* reference site - https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox */}
           <div class="flex-container">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
            <div class="item">6</div>
            <div class="item">7</div>
            <div class="item">8</div>
          </div>
    </div>
  );
};
