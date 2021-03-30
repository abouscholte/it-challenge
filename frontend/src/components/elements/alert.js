import React from "react"
import styled from "styled-components"

const Alert = props => (
  <OuterAlert {...props} visible={props.visible} id="alert">
    {props.text}
  </OuterAlert>
)


const OuterAlert = styled.div`
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto 30px auto;
  background: white;
  border: 1px solid #bbb;
  border-radius: 5px;
  position: relative;
  text-align: left;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  max-width: 600px;
  display: ${props => props.visible ? 'block' : 'none'};
  box-shadow: 0 0 15px 3px rgba(0,0,0,.1);
`

export default Alert