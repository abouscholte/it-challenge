import styled from "styled-components"

export const Container = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
`

export const MainContainer = styled(Container)`
  margin: 50px auto;
`

export const GridContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: block;
  }
`

export const MainGridContainer = styled(GridContainer)`
  margin: 50px auto;
`

// grid columns
export const GridCol = styled.div`
  @media screen and (max-width: 800px) {
    min-width: 100%;
    margin-bottom: 40px;
  }
`

export const GridColHalf = styled(GridCol)`
  width: 45%;
`

export const GridColOneThird = styled(GridCol)`
  width: 35%;
`

export const GridColTwoThirds = styled(GridCol)`
  width: 62%;
`

export const GridColFull = styled(GridCol)`
  width: 100%;
`