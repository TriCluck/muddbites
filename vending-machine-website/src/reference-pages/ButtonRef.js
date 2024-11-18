import React from 'react';
import Button from '../components/Button'; // Import the button component
import '../components/Button.css'; // Import the existing button styles

import TextBox from '../components/textBox'; // Import the TextBox component
import '../components/textBox.css'; // Import the TextBox styles

import '../index.css'; // Import the fonts and global styles

const ButtonRef = () => {
  return (
    <div className="button-ref-page">
      <h1>Style Reference Page</h1>
      
      {/* Typography Section */}
      <div className="typography-container">
        <div className="typography-group">
          <h1>Main Title (H1)</h1>
          <pre className="code-snippet">
            {`<h1>Main Title (H1)</h1>`}
          </pre>
        </div>
        <div className="typography-group">
          <h2>Subheading with Underline (H2)</h2>
          <pre className="code-snippet">
            {`<h2>Subheading with Underline (H2)</h2>`}
          </pre>
        </div>
        <div className="typography-group">
          <h2 className="alt">Alternate Subheading (H2)</h2>
          <pre className="code-snippet">
            {`<h2 className="alt">Alternate Subheading (H2)</h2>`}
          </pre>
        </div>
        <div className="typography-group">
          <h3>Section Subheading (H3)</h3>
          <pre className="code-snippet">
            {`<h3>Section Subheading (H3)</h3>`}
          </pre>
        </div>
        <div className="typography-group">
          <h4>Small Heading (H4)</h4>
          <pre className="code-snippet">
            {`<h4>Small Heading (H4)</h4>`}
          </pre>
        </div>
        <div className="typography-group">
          <h4 className="alt">Alternate Small Heading (H4)</h4>
          <pre className="code-snippet">
            {`<h4 className="alt">Alternate Small Heading (H4)</h4>`}
          </pre>
        </div>
        <div className="typography-group">
          <p>This is an example of normal paragraph text.</p>
          <pre className="code-snippet">
            {`<p>This is an example of normal paragraph text.</p>`}
          </pre>
        </div>
      </div>

      {/* Button Section */}
      <div className="button-container">
        <div className="button-group">
          <Button text="Full menu" variant="button1" />
          <p>Button 1 - Full menu</p>
          <pre className="code-snippet">
            {`<Button text="Full menu" variant="button1" />`}
          </pre>
        </div>

        <div className="button-group">
          <Button text="Create an account!" variant="button2" />
          <p>Button 2 - Create an account</p>
          <pre className="code-snippet">
            {`<Button text="Create an account!" variant="button2" />`}
          </pre>
        </div>

        <div className="button-group">
          <Button text="Menu" variant="menu-button" />
          <p>Button 3 - Menu Button</p>
          <pre className="code-snippet">
            {`<Button text="Menu" variant="menu-button" />`}
          </pre>
        </div>

        <div className="button-group">
          <Button text="Email us!" variant="email-button" />
          <p>Button 4 - Email Button</p>
          <pre className="code-snippet">
            {`<Button text="Email us!" variant="email-button" />`}
          </pre>
        </div>

        <div className="button-group">
          <Button text="Sign up" variant="sign-up-button" />
          <p>Button 5 - Sign-up Button</p>
          <pre className="code-snippet">
            {`<Button text="Sign up" variant="sign-up-button" />`}
          </pre>
        </div>

        {/* TextBox Example */}
        <div className="button-group">
          <TextBox placeholder="Enter email here:" maxLength={50} />
          <p>TextBox - Editable Input</p>
          <pre className="code-snippet">
            {`<TextBox placeholder="Enter email here:" maxLength={50} />`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ButtonRef;
