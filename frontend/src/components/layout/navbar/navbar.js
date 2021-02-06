import styled from "styled-components"

function Navbar(props) {
  return (
    <OuterNav>
      <NavContainer {...props}>
        {props.children}
      </NavContainer>
    </OuterNav>
  )
}

const OuterNav = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 900;

  background: ${props => props.theme.background};
  border-bottom: 3px solid ${props => props.theme.primary_blue};
  box-shadow: 0 10px 20px -5px ${props => props.theme.shadow};
  padding: 10px;

  width: 100%;
  max-width: 1000px;
  left: 50%;
  transform: translateX(-50%);
  top: 30px;

  @media screen and (max-width: 1000px) {
    top: 0;
    left: 0;
    right: 0;
    transform: none;
  }
`

const NavContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: ${props => props.center ? "center" : "space-between"};
  align-items: center;
`

export default Navbar