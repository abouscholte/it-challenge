import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto Slab", sans-serif;
    font-size: 15px;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    line-height: 1.4;
  }

  p {
    margin: 0 0 20px;
    line-height: 1.6;
  }

  p.large {
    font-size: 17px;
    line-height: 1.6;
  }

  h1 {
    margin: 0 0 20px;
    font-size: 2rem;
    .small {
      font-size: 0.9rem;
      color: #666666;
      display: inline-block;
      margin-left: 15px;
      font-weight: 200;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .clearfix::after {
    content: '';
    display: table;
    clear: both;
  }

  // styles for links

  a {
    color: ${props => props.theme.link};
    text-decoration: none;
    border-radius: 5px;
    transition: box-shadow .3s;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
    &:focus {
      box-shadow: 0 0 0 3px ${props => props.theme.outline};
    }
    &.danger {
      color: ${props => props.theme.ferrari_red};
    }
    &.title-link-small {
      font-size: 16px;
      margin-left: 5px;
    }
  }


  // styles for buttons

  .button {
    display: inline-block;
    padding: 13px 15px;
    background: ${props => props.theme.primary_blue};
    color: white;
    text-decoration: none;
    border-radius: .3em;
    border: 2px solid ${props => props.theme.primary_blue};
    text-align: center;
    cursor: pointer;
    outline: none;
    transition: box-shadow .2s;
    margin: 0;
    font-size: 16px;
    &:hover,
    &:focus {
      background: ${props => props.theme.lighter_blue};
      border: 2px solid ${props => props.theme.primary_blue};
      text-decoration: none;
    }
    &:focus {
      box-shadow: 0 0 0 3px ${props => props.theme.outline};
    }
  }

  a.button.button-secondary {
    background: ${props => props.theme.primary_yellow};
    border-color: ${props => props.theme.primary_yellow};
    &:hover,
    &:focus {
      background: ${props => props.theme.lighter_yellow};
    }
  }

  a.button.button-danger {
    background: ${props => props.theme.ferrari_red};
    border-color: ${props => props.theme.ferrari_red};
    &:hover,
    &:focus {
      background: ${props => props.theme.lighter_ferrari_red};
    }
  }

  a.button.button-back {
    display: flex;
    width: auto;
    max-width: 115px;
    font-size: 14px;
    padding: 9px 15px;
    justify-content: space-evenly;
    span {
      display: flex;
      align-items: center;
    }
  }

  .button-group {
    a.button {
      margin-right: 15px;
      &:last-child {
        margin-right: 0;
      }
    }
    @media screen and (max-width: 550px) {
      a.button {
        display: block;
        margin-right: 0;
        margin-bottom: 10px;
        width: 100%;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`

export default GlobalStyle