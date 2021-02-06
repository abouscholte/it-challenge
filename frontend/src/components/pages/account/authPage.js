import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import LogoSimple from "images/logo-simple.png"

class AuthPage extends React.Component {
  render() {
    
    let FormInfoText
    if (this.props.formInfo === 'signup') {
      FormInfoText = <FormInfo>Nog geen account? <Link to="/account/aanmelden">Vraag er een aan.</Link></FormInfo>
    } else {
      FormInfoText = <FormInfo>Al een account? <Link to="/account/inloggen">Log dan in.</Link></FormInfo>
    }

    return (
      <AuthPageContainer>
        <Link to="/"><PageLogo src={LogoSimple} alt="logo-simple" /></Link>
        <PageTitle>{this.props.title}</PageTitle>
        <PageSubtitle>{this.props.subtitle}</PageSubtitle>

        {/* Waar het formulier komt */}
        {this.props.children}
        
        {FormInfoText}
        <FormPageFooter className="clearfix">
          <FooterCopyright>&copy; 2020 Business School Notenboom. Alle rechten voorbehouden.</FooterCopyright>
          <FooterNavigation>
            <FooterNavItem>
              <a href="https://www.notenboom.nl/disclaimer">Disclaimer</a>
            </FooterNavItem>
            <FooterNavItem>
              <a href="https://www.notenboom.nl/privacy-statement">Privacy Statement</a>
            </FooterNavItem>
            <FooterNavItem>
              <a href="https://www.notenboom.nl/cookieverklaring">Cookieverklaring</a>
            </FooterNavItem>
            <FooterNavItem>
              <a href="https://www.notenboom.nl/algemene-voorwaarden">Algemene Voorwaarden</a>
            </FooterNavItem>
          </FooterNavigation>
        </FormPageFooter>
      </AuthPageContainer>
    )
  }
}

const AuthPageContainer = styled.section`
  margin: 30px auto;
  max-width: 500px;
  padding: 0 40px;
  box-sizing: border-box;
  text-align: center; 
`

const PageLogo = styled.img`
  display: block;
  margin: 0 auto 30px auto;
  max-height: 70px;
`

const PageTitle = styled.h2`
  font-family: 'Barlow', sans-serif;
  font-size: 2rem;
  margin: 0 0 10px 0;
  line-height: 1.1;
  color: #003162;
`

const PageSubtitle = styled.p`
  font-size: 16px;
  color: #444;
  margin: 0 0 30px 0;
`

const FormInfo = styled.p`
  padding: 20px;
  box-sizing: border-box;
  margin: 0 0 30px;
  background: white;
  border: 1px solid #eaecef;
  border-radius: 5px;
`

const FormPageFooter = styled.footer`
  margin: 0 0 30px;
  font-family: 'Barlow', sans-serif;
`

const FooterCopyright = styled.p`
  font-size: 13px;
  color: #444;
  margin: 0 0 10px;
`

const FooterNavigation = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 13px;
`

const FooterNavItem = styled.li`
  display: inline;
  margin: 0 5px;
`

export default AuthPage