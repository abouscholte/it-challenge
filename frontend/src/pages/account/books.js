import React, { useEffect, useState } from "react"
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
    document.title = 'Uw boeken - Notenboom'

    // fetch books
    const user_id = JSON.parse(localStorage.getItem('currentUser')).uid
    const filtered_books = fetchBooks.filter((book) => book.user_id == user_id)
    setBooks(filtered_books)
  }, [setBooks, fetchBooks])
  
  return (
    <React.Fragment>
      <Navbar />
      <Page title="Uw account" sidebarTitle="Beheer uw boeken" sidebarType="account">
        <h1>Al uw geüploade boeken</h1>
        
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
              <CardLink to={`/fouten/rapporteer/boek-${item.id}`}>Rapporteer fout</CardLink>
            </Card>
          ))}
        </CardsSection>
      </Page>
    </React.Fragment>
  )
}