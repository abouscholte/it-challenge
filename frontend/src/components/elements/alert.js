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
  border: 1px solid #ddd;
  border-radius: 5px;
  position: relative;
  text-align: left;
  font-family: 'Barlow', sans-serif;
  max-width: 600px;
  display: ${props => props.visible ? 'block' : 'none'};
`

export default Alert