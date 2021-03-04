import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"
import Logo from "images/logo.png"
import Navbar from "./navbar"

function NavbarLarge() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <Navbar>
      <MainLink to="/">
        <img src={Logo} alt="notenboom-logo" />
      </MainLink>
      <NavLinks className={navOpen ? 'nav-open' : ''}>
        <NavLink activeClassName="is-active" to="/fouten">Rapporteer fouten</NavLink>
        <NavLink activeClassName="is-active" to="/boeken">Boeken</NavLink>
        <NavLink activeClassName="is-active" to="/account">Account</NavLink>
        {JSON.parse(localStorage.getItem('currentUser')).adm == 1 && 
          <NavLink activeClassName="is-active" to="/admin">Admin</NavLink>
        }
        <NavLink exact activeClassName="is-active" to="/account/uitloggen">Log uit</NavLink>
      </NavLinks>
      <NavbarToggler onClick={() => setNavOpen(!navOpen)} className={navOpen ? 'nav-open' : ''}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </NavbarToggler>
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

const NavLinks = styled.nav`
  a {
    margin-left: 15px;
    color: #777;
    display: inline-block;
    transition: .2s;
    text-decoration: none;
    &.is-active {
      font-weight: bold;
      color: #333;
      position: relative;
      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: -10px;
        width: 100%;
        height: 1px;
        background: #333;
      }
    }
    &:first-child {
      margin-left: 0;
    }
    &:hover,
    &:focus {
      color: black;
    }
  }

  @media screen and (max-width: 750px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    padding: 10px 30px;
    box-sizing: border-box;
    display: block;
    border-bottom: 3px solid #003162;
    pointer-events: none;
    opacity: 0;
    transition: .1s;
    z-index: 1001;
    &.nav-open {
      opacity: 1;
      pointer-events: auto;
    }

    a {
      display: block;
      width: 100%;
      margin: 0 0 10px;
      position: static;
      &.is-active::after {
        display: none;
      }
    }
  }
`

const NavbarToggler = styled.div`
  width: 25px;
  height: 22px;
  float: right;
  cursor: pointer;
  padding: 4px 5px 7px 5px;
  display: none;
  text-decoration: none;
  outline: none;
  box-sizing: content-box;

  span {
    user-select: none;
    display: block;
    width: 100%;
    height: 3px;
    background: #333333;
    -webkit-transition: all 0.25s ease-in-out;
    -o-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;
    margin: 4px 0;
    position: relative;
    z-index: 3;
    &:nth-child(3) {
      margin-top: -7px;
    }
  }

  &.nav-open span {
    &:nth-child(1) {
      transform: translateY(3px) scale(0);
      opacity: 0;
    }
    &:nth-child(2) {
      transform: rotate(45deg);
    }
    &:nth-child(3) {
      transform: rotate(-45deg);
      opacity: 1;
    }
    &:nth-child(4) {
      transform: translateY(-3px) scale(0);
      opacity: 0;
    }
  }

  &:hover span,
  &:focus span {
    background: black;
  }
  &:focus {
    box-shadow: 0 0 0 3px rgba(lightblue, .7);
  }

  @media screen and (max-width: 750px) {
    display: block;
  }
`

export default NavbarLarge