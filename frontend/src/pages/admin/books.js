import React, { useState, useEffect } from "react"
import styled from "styled-components"
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
import { SearchBar } from "components/elements/forms"
import { Book } from "react-ionicons"

export default function Books() {

  // set constants and such
  const fetchBooks = FetchBooks()
  const [books, setBooks] = useState([])
  const [booksDefault, setBooksDefaullt] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])
  const [filter, setFilter] = useState('all')
  
  useEffect(() => {
    // set document title
    document.title = 'Bekijk boeken - Notenboom'

    // fetch books
    setBooks(fetchBooks.sort((a, b) => (a.author > b.author) ? 1 : -1))
    setBooksDefaullt(fetchBooks.filter((item) => item.status == 1))
    setFilteredBooks(fetchBooks.filter((item) => item.status == 0))
  }, [fetchBooks, setBooks, setFilteredBooks])

  const updateInput = (input) => {
    const filtered = booksDefault.filter(book => {
      return book.title.toLowerCase().includes(input.target.value.toString().toLowerCase())
    })
    setBooks(filtered.sort((a, b) => (a.author > b.author) ? 1 : -1));
  }

  // create book card
  const BookCard = item => {
    
    const book = item.item
    const [user, setUser] = useState({})

    const fetchUser = user_id => {
      const body = { token: localStorage.getItem('jwt-token'), id: user_id }
      fetch(`${process.env.REACT_APP_API_BASEURL}/user/fetch_one.php`, {
        method: 'POST', body: JSON.stringify(body)
      })
        .then(async response => {
          const data = await response.json()
          setUser(data)
        })
        .catch((error) => console.error(error))
    }

    useEffect(() => {fetchUser(book.user_id)}, [book.user_id])

    return (
      <Card key={book.id} two>
        <div>
          <CardTitle>{book.title}</CardTitle>
          <CardSubtitle>{book.author}</CardSubtitle>
        </div>
        <CardList>
          <li>Toegevoegd door: {user.name}</li>
          <li>Uitgever: {book.publisher}</li>
          <li>Uitgegeven: {book.year_published}</li>
          <li>ISBN: {book.isbn}</li>
          <li>Type: {book.type == 'papier' ? 'Papieren boek' : book.type == 'audio' ? 'Audioboek' : 'E-book'}</li>
        </CardList>
        <CardLink to={`/fouten/boeken/boek-${book.id}`}>Wijzig boek</CardLink>
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

        {/* search bar */}
        <SearchBar
          placeholder={'Zoek naar titels van boeken'}
          onChange={updateInput}
        />
        
        {/* cards section */}
        <CardsSection>
          {books.length > 0 ? (
            filter == 'all'  
              ? books.map((item) => <BookCard key={item.id} item={item} />)
              : filteredBooks.map((item) => <BookCard key={item.id} item={item} />)
            ) : (
              <EmptySection>
                <Book />
                <p className="large">Er zijn geen boeken gevonden.</p>
              </EmptySection>
            )
          }
        </CardsSection>
      </Page>
    </React.Fragment>
  )
}

const EmptySection = styled.section`
  margin: 50px auto;
  text-align: center;
  svg {
    width: 70px;
    height: 70px;
    margin-bottom: 15px;
    fill: ${props => props.theme.primary_blue};
  }
  p.large {
    font-size: 20px;
    max-width: 250px;
    margin: 0 auto;
    color: ${props => props.theme.primary_blue};
  }
`
