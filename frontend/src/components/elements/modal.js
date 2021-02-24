import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

function Modal(props) {
  const showHideClassName = props.show ? "modal display-block" : "modal display-none"

  return (
    <OuterModal className={showHideClassName}>
      <ModalMain>
        {props.children}
        <Link className="button" onClick={props.handleClose} to="#">
          {props.actionButton ? 'Annuleer' : 'Sluit'}
        </Link>
        {props.actionButton && 
          <Link to="#" onClick={props.actionButtonOnClick} className={props.actionButtonClassName} style={{ marginLeft: 15 }}>
            {props.actionButtonText}
          </Link>
        }
      </ModalMain>
    </OuterModal>    
  )
}

const OuterModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(225,225,225,.4);
  z-index: 1001;
  &.display-block {
    display: block;
  }
  &.display-none {
    display: none;
  }
`

const ModalMain = styled.section`
  position: fixed;
  background: white;
  width: 80%;
  max-width: 500px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: .5rem;
  box-shadow: 5px 12px 20px rgba(0,0,0,.1);
`

export default Modal