import React from "react"
import styled from "styled-components"
import Navbar from "./navbar"
import Logo from "images/logo.png"
import { Link } from "react-router-dom"

function NavbarSmall() {
  return (
    <Navbar center>
      <MainLink to="/">
        <img src={Logo} alt="notenboom-logo" /> 
      </MainLink>
    </Navbar>
  )
}

const MainLink = styled(Link)`
  outline: none;
  text-decoration: none;
  display: block;
  img {
    display: block;
    margin: 0;
    height: auto;
    image-rendering: optimizeQuality;
  }
`

export default NavbarSmall