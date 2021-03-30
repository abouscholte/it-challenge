import React from 'react';
import styled, { css } from 'styled-components';
import { LogoReact, LogoJavascript, CodeSharp, CodeWorkingSharp, FolderSharp } from 'react-ionicons';

export default function Code() {
  const FolderInlineItem = ({ children }) => (
    <li className="code_item inline_item">
      {children}
      <InlineIcon small>
        <FolderSharp />
      </InlineIcon>
    </li>
  );
  
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
        <FolderInlineItem>book/</FolderInlineItem>
        <FolderInlineItem>config/</FolderInlineItem>
        <FolderInlineItem>email/</FolderInlineItem>
        <FolderInlineItem>objects/</FolderInlineItem>
        <FolderInlineItem>user/</FolderInlineItem>
        <FolderInlineItem>vendor/</FolderInlineItem>
        
        <li className="code_item main_item">
          frontend/
          <InlineIcon>
            <LogoReact />
          </InlineIcon>
        </li>
        <FolderInlineItem>src/</FolderInlineItem>
        <li className="code_item double_inline_item">
          app.js
          <InlineIcon small>
            <LogoJavascript />
          </InlineIcon>
        </li>
        <li className="code_item double_inline_item">
          index.js
          <InlineIcon small>
            <LogoJavascript />
          </InlineIcon>
        </li>
        <li className="code_item inline_item">
          package.json
          <InlineIcon small>
            <CodeWorkingSharp />
          </InlineIcon>
        </li>
        
        <li className="code_item main_item">
          code/
          <InlineIcon>
            <LogoReact />
          </InlineIcon>
        </li>
        <FolderInlineItem>src/</FolderInlineItem>
        <li className="code_item inline_item">
          package.json
          <InlineIcon small>
            <CodeWorkingSharp />
          </InlineIcon>
        </li>
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
    color: #bbb;
  }
  ${props => props.small && css`
    svg {
      width: 20px;
      height: 20px;
      margin-bottom: -5px;
      fill: rgba(187, 187, 187, 0.7);
      color: rgba(187, 187, 187, 0.7);
    }
  `}
`;