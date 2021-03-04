import React from "react"
import styled from "styled-components"
import Page from "components/layout/defaultPage"
import { NavLink } from "react-router-dom"

const SidebarPage = ({ children, title, sidebarTitle, sidebarLinks }) => (
  <React.Fragment>
    {/* render navbar and default page layout */}
    <Page title={title} full>
      <Container>
        {/* render sidebar with sticky wrapper inside */}
        <Sidebar>
          <StickyWrapper>
            <NavTitle>{sidebarTitle}</NavTitle>
            <List>
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

const Container = styled.section`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  max-width: 1000px;
  margin: 0 auto;
`

const Sidebar = styled.nav`
  position: relative;
  z-index: 900;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  min-width: 250px;
  flex-direction: column;
  align-items: right;
  border-right: 1px solid #ddd;
  margin-right: 30px;
  padding: 50px 50px 50px 20px;
`

const StickyWrapper = styled.div`
  position: sticky;
  top: 30px;
`

const NavTitle = styled.h3`
  font-size: 1.8rem;
  margin: 0 0 40px;
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
`

const SidebarLink = styled(NavLink)`
  font-weight: 400;
  font-size: 18px;
  color: #333;
  &.active {
    font-weight: 700;
    color: ${props => props.theme.primary_blue};
  }
`

const Right = styled.section`
  width: 100%;
  margin: 50px auto;
  padding: 0 40px;
`

export default SidebarPage