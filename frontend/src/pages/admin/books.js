import React, { useState, useEffect } from "react"
import FetchBooks from "components/books/fetch"
import Page from "components/layout/sidebarPage"
import Navbar from "components/layout/navbar/navbarLarge"
import {
  CardsSection,
  Card,
  CardTitle,
  CardSubtitle,
  CardList,
  CardLink
} from "components/elements/cards"

export default function Books() {

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
    <React.Fragment>
      <Navbar />
      <Page title="Administrator paneel" sidebarTitle="Beheer alle boeken" sidebarType="admin">
        <CardsSection>
          {books.map(item => (
            <Card key={item.id} two>
              <div>
                <CardTitle dangerouslySetInnerHTML={{ __html: item.title }} />
                <CardSubtitle dangerouslySetInnerHTML={{ __html: item.author }} />
              </div>
              <CardList>
                <li dangerouslySetInnerHTML={{ __html: `Uitgever: ${item.publisher}` }} />
                <li>Uitgegeven: {item.year_published}</li>
                <li>ISBN: {item.isbn}</li>
                <li>Type: {item.type == 'papier' ? 'Papieren boek' : item.type == 'audio' ? 'Audioboek' : 'E-book'}</li>
              </CardList>
              <CardLink to={`/boeken/boek-${item.id}`}>Wijzig boek</CardLink>
            </Card>
          ))}
        </CardsSection>
      </Page>
    </React.Fragment>
  )
}