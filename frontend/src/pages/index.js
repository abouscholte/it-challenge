import React, { useEffect } from "react"
import styled from "styled-components"
import NavbarSmall from "components/layout/navbar/navbarSmall"
import NavbarLarge from "components/layout/navbar/navbarLarge"
import Footer from "components/layout/footer"
import Hero from "components/pages/home/hero"
import { MainGridContainer, GridColOneThird, GridColTwoThirds } from "components/elements/containers"
import { Link } from "react-router-dom"
import Login from "images/log_in.png"
import Meldaan from "images/meld_aan.png"

export default function Home() {

  useEffect(() => document.title = 'Notenboom')

  return (
    <>
      {localStorage.getItem('currentUser') ? 
        (<NavbarLarge />) : (<NavbarSmall />)
      }
      <Hero />
        <MainGridContainer>
          <GridColTwoThirds>
            <SectionTitle>Foutmeldingen</SectionTitle>
            <p className="large">We kennen het fenomeen allemaal. Fouten in studieboeken. Je irriteert je er mateloos aan, en tot nu toe kon je er nooit wat aan doen. Gelukkig hebben wij hier een oplossing voor!</p>
            <p className="large">Heb je een fout aangetroffen in een studieboek? Meld het dan <Link to="/account/aanmelden">hier</Link> bij ons! Nadat je een account hebt aangemaakt, of hebt ingelogd, kun je de gevonden fout melden door het invoeren van een aantal gegevens over het betreffende boek. Super simpel. Super handig.</p>
            <p className="large">Het Notenboom foutenregister is geschikt voor papieren boeken, E-books en audioboeken.</p>
            <p className="large">Met uw hulp kunnen we de inhoud van studieboeken kwalitatief verbeteren en zo weer iets dichter bij een perfecte leeromgeving komen. Samen staan we sterker!</p>
          </GridColTwoThirds>
          <ImagesContainer>
            {
              !localStorage.getItem('currentUser') ? (
                <React.Fragment>
                  <ImageContainer to="/account/inloggen">
                    <React.Fragment>
                      <img src={Login} alt="login" />
                      <button className="button">Log in</button>
                    </React.Fragment>
                  </ImageContainer>
                  <ImageContainer to="/account/aanmelden">
                    <React.Fragment>
                      <img src={Meldaan} alt="meldaan" />
                      <button className="button">Meld aan</button>
                    </React.Fragment>
                  </ImageContainer>
                </React.Fragment>
              ) : (
                <ImageContainer to="/fouten">
                  <React.Fragment>
                    <img src={Login} alt="fouten" />
                    <button className="button">Rapporteer fout</button>
                  </React.Fragment>
                </ImageContainer>
              )
            }
          </ImagesContainer>
        </MainGridContainer>
      <Footer />
    </>
  )
}

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin: 0 0 10px;
`

const ImagesContainer = styled(GridColOneThird)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    display: block;
  }
`

const ImageContainer = styled(Link)`
  display: inline-block;
  margin: 0 auto;
  padding: 20px;
  width: 200px;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px 5px rgba(0,0,0,.1);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 25px;
  transition: box-shadow 0.2s ease-out, transform 0.2s ease-in-out, border .2s ease-in-out;
  &:last-child {
    margin-bottom: 0;
  }
  img {
    display: block;
    max-width: 100%;
    margin: 0 auto 10px auto;
  }
  .button {
    font-size: 14px;
    padding: 7px 15px;
    display: inline-block;
    margin: 0 auto;
    transition: background .2s ease;
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
    text-decoration: none;
    box-shadow: 0 0 14px 8px rgba(0,0,0,.1);
    .button {
      background: ${props => props.theme.lighter_blue};
      border: 2px solid ${props => props.theme.primary_blue};
    }
  }
  &:focus {
    border-color: transparent;
    box-shadow: 0 0 0 3px ${props => props.theme.outline}, 0 0 14px 8px rgba(0,0,0,.1);
  }

  @media screen and (max-width: 800px) {
    margin: 0;
  }

  @media screen and (max-width: 500px) {
    margin: 0 auto 25px auto;
    &:last-child {
      margin-bottom: 0;
    }
  }
`