import React from "react"
import styled from "styled-components"
import Navbar from "components/layout/navbar/navbar"
import LinearProgress from "@material-ui/core/LinearProgress"
import HeroImage from "images/default-hero.png"

const PageLoader = () => (
  <React.Fragment>
    <TopLoaderContainer>
      <LinearProgress id="progress" />
    </TopLoaderContainer>
    <LoaderNavbar />
    <PageHero />
  </React.Fragment>
)

export const TopLoader = () => (
  <TopLoaderContainer>
    <LinearProgress id="progress" />
  </TopLoaderContainer>
)

const PageHero = styled.section`
  height: 285px;
  color: white;
  background-image: url("${HeroImage}"); 
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(266.01deg,#d2aa71 10%,#003162 50%);
    display: block;
    opacity: .5;
  }
  @media screen and (max-width: 1000px) {
    height: 187px;
  }
`

const LoaderNavbar = styled(Navbar)`
  height: 75px;
`

const TopLoaderContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1002;
`

export default PageLoader