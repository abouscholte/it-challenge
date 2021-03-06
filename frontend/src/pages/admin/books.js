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
  const [filteredBooks, setFilteredBooks] = useState([])
  const [filter, setFilter] = useState('all')
  
  useEffect(() => {
    // set document title
    document.title = 'Bekijk boeken - Notenboom'

    // fetch books
    setBooks(fetchBooks)
    setFilteredBooks(fetchBooks.filter((item) => item.status == 0))
  }, [fetchBooks, setBooks, setFilteredBooks])

  // create book card
  const BookCard = item => {
    
    const book = item.item

    return (
      <Card key={book.id} two>
        <div>
          <CardTitle>{book.title}</CardTitle>
          <CardSubtitle>{book.author}</CardSubtitle>
        </div>
        <CardList>
          <li>Uitgever: {book.publisher}</li>
          <li>Uitgegeven: {book.year_published}</li>
          <li>ISBN: {book.isbn}</li>
          <li>Type: {book.type == 'papier' ? 'Papieren boek' : book.type == 'audio' ? 'Audioboek' : 'E-book'}</li>
        </CardList>
        <CardLink to={`/boeken/boek-${book.id}`}>Wijzig boek</CardLink>
      </Card>
    )
  }

  return (
    <React.Fragment>
      <Navbar />
      <Page title="Administrator paneel" sidebarTitle="Beheer alle boeken" sidebarType="admin">

        {/* top information */}
        <h1>Beheer alle boeken</h1>
        <p className="large">Om alleen nieuwe, nog niet goedgekeurde boeken te zien, gebruik de filter hieronder.</p>

        {/* filter button */}
        <div className="small" style={{ marginBottom: 30 }} onClick={() => setFilter(filter == 'all' ? 'new' : 'all')}>
          {(filter == 'all') ? 'Laat alleen nieuwe boeken zien' : 'Laat alle boeken zien'}
        </div>
        
        {/* cards section */}
        <CardsSection>
          {
            filter == 'all'  
              ? books.map((item) => <BookCard key={item.id} item={item} />)
              : filteredBooks.map((item) => <BookCard key={item.id} item={item} />)
          }
        </CardsSection>
      </Page>
    </React.Fragment>
  )
}