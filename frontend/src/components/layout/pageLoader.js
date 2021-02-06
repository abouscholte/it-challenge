import React from "react"
import { usePromiseTracker } from "react-promise-tracker"
import styled from "styled-components"
import LinearProgress from "@material-ui/core/LinearProgress"
import Logo from "images/logo-simple.png"

function PageLoader(props) {
  const { promiseInProgress } = usePromiseTracker()
  
  return (
    (props.promise && promiseInProgress === true) ? (
      <Loader>
        <LinearProgress id="progress" />
        <div>
          <img src={Logo} alt="notenboom-logo" />
          <h1>Aan het laden</h1>
        </div>
      </Loader>  
    ) : (
      <Loader>
        <LinearProgress id="progress" />
        <div>
          <img src={Logo} alt="notenboom-logo" />
          <h1>Aan het laden</h1>
        </div>
      </Loader>
    )
  )
}

const Loader = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1002;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: white;
  #progress {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  img {
    max-height: 100px;
    display: block;
    margin: 0 auto 30px auto;
  }
  h1 {
    color: #003162;
    font-weight: 200;
    opacity: .7;
  }
`

export default PageLoader