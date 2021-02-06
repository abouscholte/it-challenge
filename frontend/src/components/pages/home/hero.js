import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import HomeHeroImg from "images/home-hero-students.jpg"

function Hero() {
  return (
    <HomeHero>
      <HomeHeroBackground />
      <HomeHeroContent>
        <HomeHeroTitle>Help met het verbeteren van onze studieboeken</HomeHeroTitle>
        {localStorage.getItem("currentUser") ? (
          <Link className="button" to="/fouten">Start met helpen</Link>
        ) : (
          <div className="button-group">
            <Link className="button" to="/account/inloggen">Log in</Link>
            <Link className="button" to="/account/aanmelden">Meld aan</Link>
          </div>
        )}
      </HomeHeroContent>
    </HomeHero>
  )
}

const HomeHero = styled.section`
  height: 100vh;
  min-height: 500px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  @media screen and (max-width: 550px) {
    height: 70vh;
  }
`

const HomeHeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-height: 500px;
  z-index: -2;
  background: url(${HomeHeroImg});
  background-size: cover;
  background-position: center bottom;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: block;
    opacity: 0.59;
    background: linear-gradient(266.01deg, #d2aa71 10%, #003162 50%);
  }
`

const HomeHeroContent = styled.div`
  max-width: 700px;
  padding: 0 40px;
  box-sizing: border-box;
  margin-top: 98px;
`

const HomeHeroTitle = styled.h1`
  font-size: 3.5rem;
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  line-height: 1.15;
  margin: 0 0 20px;
  @media screen and (max-width: 700px) {
    font-size: 2.7rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 1.7rem;
  }
`

export default Hero