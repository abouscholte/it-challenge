import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

export const CardsSection = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media screen and (max-width: 750px) {
    display: block;
  }
`

export const Card = styled.div`
  padding: 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: .5rem;
  margin: 0 20px 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${props => props.two ? css`
    width: calc(50% - 10px);
    &:nth-child(2n + 2) {
      margin: 0 0 20px 0;
    }
  ` : css`
    width: calc((100% / 3) - (40px / 3));
    &:nth-child(3n + 3) {
      margin: 0 0 20px 0;
    }
  `}
  
  @media screen and (max-width: 750px) {
    width: 100%;
    margin: 0 0 20px 0;
  }
`

export const CardTitle = styled.h3`
  margin: 0 0 5px;
  font-size: 1.4rem;
`

export const CardSubtitle = styled.h4`
  margin: 0 0 10px;
  line-height: 1;
  font-weight: 400;
  font-size: 1rem;
  color: #555;
`

export const CardList = styled.ul`
  padding: 0;
  margin: 0 0 10px 0;
  list-style: none;
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  
  li {
    margin-bottom: 3px;
  }
`

export const CardLink = styled(Link)`
  margin: 0;
  padding: 0;
`