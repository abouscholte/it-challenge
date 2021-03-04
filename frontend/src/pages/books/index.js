import React, { useEffect, useState } from "react"
import styled from "styled-components"
import FetchBooks from "components/books/fetch"
import Page from "components/layout/defaultPage"
import NavbarLarge from "components/layout/navbar/navbarLarge"

import { Link } from "react-router-dom"

function Boeken() {
  
  // set constants and such
  const fetchBooks = FetchBooks()
  const [books, setBooks] = useState([])
  
  useEffect(() => {
    // set document title
    document.title = 'Bekijk boeken - Notenboom'

    // fetch books
    setBooks(fetchBooks)
  }, [fetchBooks, setBooks])
  
  return (
    <>
      <NavbarLarge />
      <Page title="Notenboom Boekenplank">
        <p className="large">Kunt u niet vinden wat u zoekt?&nbsp;
          <Link to="/boeken/nieuw-boek">Voeg dan een nieuw boek toe</Link>.
        </p>

        <BooksSection>
          {books.map(item => (
            <BookContainer key={item.id}>
              <BookTitle dangerouslySetInnerHTML={{ __html: item.title }} />
              <BookMeta>
                <li dangerouslySetInnerHTML={{ __html: `Uitgever: ${item.publisher}` }} />
                <li>Uitgegeven: {item.year_published}</li>
                <li>ISBN: {item.isbn}</li>
                <li>Type: {item.type == 'papier' ? 'Papieren boek' : 'E-book'}</li>
              </BookMeta>
              <BookAction to={`/fouten/rapporteer/boek-${item.id}`}>Rapporteer fout</BookAction>
            </BookContainer>
          ))}
        </BooksSection>
      </Page>
    </>
  )
}

const BooksSection = styled.section`
  display: flex;
  justify-content: flex-start;
  // align-items: flex-start;
  flex-wrap: wrap;
  @media screen and (max-width: 750px) {
    display: block;
  }
`

const BookContainer = styled.div`
  padding: 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: .5rem;
  width: calc((100% / 3) - (40px / 3));
  margin: 0 20px 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:nth-child(3n + 3) {
    margin: 0 0 20px 0;
  }
  
  @media screen and (max-width: 750px) {
    width: 100%;
    margin: 0 0 20px 0;
  }
`

const BookTitle = styled.h3`
  margin: 0 0 5px;
  font-size: 1.4rem;
`

const BookMeta = styled.ul`
  padding: 0;
  margin: 0 0 10px 0;
  list-style: none;
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  
  li {
    margin-bottom: 3px;
  }
`

const BookAction = styled(Link)`

`

export default Boeken