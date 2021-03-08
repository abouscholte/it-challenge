import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Footer from "./footer"
import HeroImage from "images/default-hero.png"
import { 
  Container,
  ContainerSm,
  MainContainer, 
  MainContainerSm,
  MainGridContainer 
} from "../elements/containers"
import { TopLoader } from "./pageLoader"

function DefaultPage(props) {

  // set up page loading
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 200)
  }, [setLoading])
  
  return (
    <React.Fragment>
      {loading && <TopLoader />}
      <PageHeroSection style={props.full && { marginBottom: 0 }}>
        {props.small ? (
          <ContainerSm>
            <PageHeroTitle className={loading && 'loading'}>{props.title}</PageHeroTitle>
          </ContainerSm>
        ) : (
          <Container>
            <PageHeroTitle className={loading && 'loading'}>{props.title}</PageHeroTitle>
          </Container>
        )}
      </PageHeroSection>
      {loading ? (
        <Block />
      ) : (
        props.grid ? (
          <MainGridContainer>
            {props.children}
          </MainGridContainer>
        ) : (
          props.small ? (
            <MainContainerSm>
              {props.children}
            </MainContainerSm>
          ) : (
            props.full ? props.children : (
              <MainContainer>
                {props.children}
              </MainContainer>
            )
          )
        )
      )}
      <Footer />
    </React.Fragment>
  )
}

const PageHeroSection = styled.section`
  padding-top: 188px;
  padding-bottom: 50px;
  margin-bottom: 20px;
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
    padding-top: 130px;
    padding-bottom: 20px;
  }
`

const PageHeroTitle = styled.h1`
  margin: 0;
  font-size: 2.3rem;
  line-height: 1.3;
  position: relative;
  z-index: 1;
  transition: opacity .1s ease;
  @media screen and (max-width: 1000px) {
    font-size: 1.8rem;
  }
  &.loading {
    opacity: 0;
  }
`

const Block = styled.section`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.background};
`

export default DefaultPage