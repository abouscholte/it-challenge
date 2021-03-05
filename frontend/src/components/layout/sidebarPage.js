import React, { useState } from "react"
import styled from "styled-components"
import Page from "components/layout/defaultPage"
import { NavLink } from "react-router-dom"
import { ChevronDownOutline } from "react-ionicons"

const SidebarPage = ({ children, title, sidebarTitle, sidebarLinks }) => {

  // set state variables
  const [navOpen, setNavOpen] = useState(false)

  
  return (
    <React.Fragment>
      {/* render navbar and default page layout */}
      <Page title={title} full>
        <Container>
          {/* render sidebar with sticky wrapper inside */}
          <Sidebar>
            <StickyWrapper>
              <NavTitle>{sidebarTitle}
                <span id="nav-open-button" className={navOpen ? 'nav-open' : ''} onClick={() => setNavOpen(navOpen == false ? true : false)} tabIndex="1">
                  <ChevronDownOutline />
                </span>
              </NavTitle>
              <List className={navOpen ? 'nav-open' : ''}>
                {sidebarLinks.map((item, key) => (
                  <li key={key}>
                    <SidebarLink exact to={item.to}>{item.title}</SidebarLink>
                  </li>
                ))}
              </List>
            </StickyWrapper>
          </Sidebar>

          {/* render children in right section */}
          <Right>
            {children}
          </Right>
        </Container>
      </Page>
    </React.Fragment>
  )
}

const Container = styled.section`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  max-width: 1000px;
  margin: 0 auto;
  @media screen and (max-width: 750px) {
    display: block;
  }
`

const Sidebar = styled.nav`
  position: relative;
  z-index: 900;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  min-width: 250px;
  max-width: 33%;
  flex-direction: column;
  border-right: 1px solid #ddd;
  margin-right: 30px;
  padding: 50px 50px 50px 20px;

  @media screen and (max-width: 750px) {
    max-width: 100%;
    position: static;
    padding: 30px 20px 5px 20px;
    margin: 0;
    border-right: none;
    border-bottom: 1px solid #ddd;
  }
`

const StickyWrapper = styled.div`
  position: sticky;
  top: 30px;
  @media screen and (max-width: 750px) {
    position: static;
  }
`

const NavTitle = styled.h3`
  font-size: 1.8rem;
  margin: 0 0 40px;

  #nav-open-button {
    margin-left: 10px;
    cursor: pointer;
    display: none;
    width: 32px;
    justify-content: center;
    align-items: center;
    outline: none;
    transition: box-shadow .2s ease;
    border-radius: .5rem;
    svg {
      margin-bottom: -3px;
      transition: all .3s ease;
      transform: rotateX(0);
    }
    &:hover svg,
    &:focus svg {
      color: #666;
    }
    &:focus {
      box-shadow: 0 0 0 3px ${props => props.theme.outline};
    }
    &.nav-open svg {
      transform: rotateX(180deg);
    }
  }
  
  @media screen and (max-width: 750px) {
    font-size: 1.5rem;
    display: flex;
    #nav-open-button {
      display: flex;
    }
  }
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 750px) {
    max-height: 0;
    overflow: hidden;
    margin-top: -20px;
    transition: max-height 300ms ease;

    &.nav-open {
      max-height: 100px;
    }
    
    li {
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 30px;
      }
    }
  }
`

const SidebarLink = styled(NavLink)`
  font-weight: 400;
  font-size: 18px;
  color: #333;
  &.active {
    font-weight: 700;
    color: ${props => props.theme.primary_blue};
  }
  @media screen and (max-width: 750px) {
    font-size: 1rem;
  }
`

const Right = styled.section`
  width: 100%;
  max-width: 67%;
  margin: 50px auto;
  padding: 0 40px;

  @media screen and (max-width: 750px) {
    max-width: 100%;
    padding: 0 20px;
  }
`

export default SidebarPage