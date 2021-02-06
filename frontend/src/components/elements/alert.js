import React from "react"
import styled from "styled-components"

class Alert extends React.Component {
  handleClick = event => {
    event.preventDefault()
    document.getElementById('alert').style.display = 'none'
  }
  
  render() {
    return (
      <OuterAlert visible={this.props.visible} id="alert">
        {this.props.text}
        <CloseAlert onClick={this.handleClick} href="#close-alert">&times;</CloseAlert>
      </OuterAlert>
    )
  }
}

const OuterAlert = styled.div`
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto 30px auto;
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding-right: 60px;
  position: relative;
  text-align: left;
  font-family: 'Barlow', sans-serif;
  max-width: 600px;
  display: ${props => props.visible ? 'block' : 'none'}
`

const CloseAlert = styled.a`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 25px;
  color: black;
  cursor: pointer;
  display: block;
  width: 25px;
  height: 25px;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`

export default Alert