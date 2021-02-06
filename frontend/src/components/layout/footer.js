import React from "react"
import styled from "styled-components"

function Footer() {
  return (
    <OuterFooter>
      <FooterContainer className="clearfix">
        <FooterCopyright>&copy; 2020 Business School Notenboom. Alle rechten voorbehouden.</FooterCopyright>
        <FooterNavigation>
          <FooterNavItem>
            <FooterLink href="https://www.notenboom.nl/disclaimer">Disclaimer</FooterLink>
          </FooterNavItem>
          <FooterNavItem>
            <FooterLink href="https://www.notenboom.nl/privacy-statement">Privacy Statement</FooterLink>
          </FooterNavItem>
          <FooterNavItem>
            <FooterLink href="https://www.notenboom.nl/cookieverklaring">Cookieverklaring</FooterLink>
          </FooterNavItem>
          <FooterNavItem>
            <FooterLink href="https://www.notenboom.nl/algemene-voorwaarden">Algemene Voorwaarden</FooterLink>
          </FooterNavItem>
        </FooterNavigation>
      </FooterContainer>
    </OuterFooter>
  )
}

const OuterFooter = styled.footer`
  background: #003162;
  padding: 15px 20px;
  color: white;
`

const FooterContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const FooterCopyright = styled.p`
  line-height: 1.5;
  margin: 5px 0;
  font-size: 14px;
  display: inline-block;
`

const FooterNavigation = styled.ul`
  padding: 0;
  margin: 5px 0;
  display: block;
  list-style-type: none;
  float: right;
  text-align: left;
  @media screen and (max-width: 600px) {
    padding: 0;
    float: none;
  }
`

const FooterNavItem = styled.li`
  display: inline-block;
  margin-left: 10px;
  line-height: 1.5;
  &:first-child {
    margin-left: 0;
  }
  @media screen and (max-width: 600px) {
    display: block;
    margin: 0;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const FooterLink = styled.a`
  color: #eee;
  text-decoration: underline;
  font-size: 14px;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`

export default Footer