import React from 'react';
import styled from 'styled-components';
import { LogoReact, LogoJavascript, CodeSharp } from 'react-ionicons';

export default function Code() {
  return (
    <section id="code" className="content">
      <h1 className="title">Over de code</h1>
      <p className="infoline">De code is opgedeeld in twee delen: de code voor de backend en de code voor de frontend. De frontend is geschreven in het moderne Javascript framework React en de backend is geschreven in PHP.</p>

      <ul className="code_block">
        <li className="code_item main_item">
          backend/
          <InlineIcon>
            <CodeSharp />
          </InlineIcon>
        </li>
        <li className="code_item inline_item">book/</li>
        <li className="code_item inline_item">config/</li>
        <li className="code_item inline_item">email/</li>
        <li className="code_item inline_item">objects/</li>
        <li className="code_item inline_item">user/</li>
        <li className="code_item inline_item">vendor/</li>
        
        <li className="code_item main_item">
          frontend/
          <InlineIcon>
            <LogoReact />
          </InlineIcon>
        </li>
        <li className="code_item inline_item">src/</li>
        <li className="code_item double_inline_item">
          app.js
          <InlineIcon>
            <LogoJavascript />
          </InlineIcon>
        </li>
        <li className="code_item double_inline_item">
          index.js
          <InlineIcon>
            <LogoJavascript />
          </InlineIcon>
        </li>
        <li className="code_item inline_item">package.json</li>
        
        <li className="code_item main_item">
          code/
          <InlineIcon>
            <LogoReact />
          </InlineIcon>
        </li>
        <li className="code_item inline_item">src/</li>
        <li className="code_item inline_item">package.json</li>
      </ul>
    </section>
  );
}

const InlineIcon = styled.span`
  margin-left: 15px;
  svg {
    width: 22px;
    height: 22px;
    margin-bottom: -6px;
    fill: #bbb;
  }
`;