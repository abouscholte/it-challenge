import React, { useEffect, useState } from "react"
import FetchBooks from "components/books/fetch"
import Page from "components/layout/defaultPage"
import NavbarLarge from "components/layout/navbar/navbarLarge"
import {
  CardsSection,
  Card,
  CardTitle,
  CardSubtitle,
  CardList,
  CardLink
} from "components/elements/cards"
import { SearchBar } from "components/elements/forms"
import { Link } from "react-router-dom"

function Boeken() {
  
  // set constants and such
  const fetchBooks = FetchBooks()
  const [books, setBooks] = useState([])
  const [booksDefault, setBooksDefaullt] = useState([])
  
  useEffect(() => {
    // set document title
    document.title = 'Rapporteer fout - Notenboom'

    // fetch books
    setBooks(fetchBooks.filter((item) => item.status == 1).sort((a, b) => (a.author > b.author) ? 1 : -1))
    setBooksDefaullt(fetchBooks.filter((item) => item.status == 1))
  }, [fetchBooks, setBooks, setBooksDefaullt])

  const updateInput = (input) => {
    const filtered = booksDefault.filter(book => {
      return book.title.toLowerCase().includes(input.target.value.toString().toLowerCase())
    })
    setBooks(filtered.sort((a, b) => (a.author > b.author) ? 1 : -1));
  }
  
  return (
    <>
      {/* render navbar and default page layout */}
      <NavbarLarge />
      <Page title="Rapporteer fout">
        {/* render top text and admin text */}
        <p className="large">Op deze pagina kunt u fouten rapporteren per boek. Kunt u niet vinden wat u zoekt?&nbsp;
          <Link to="/fouten/boeken/nieuw-boek">Voeg dan een nieuw boek toe</Link>.
        </p>

        {JSON.parse(localStorage.getItem('currentUser')).adm == 1 && (
          <p className="large" style={{ margin: '-10px 0 40px 0' }}>
            Alleen boeken die zijn goedgekeurd door een administrator worden hier weergegeven.
            Als administrator kunt u alle boeken <Link to="/admin/boeken">hier</Link> beheren.
          </p>
        )}

        {/* search bar */}
        <SearchBar
          placeholder={'Zoek naar titels van boeken'}
          onChange={updateInput}
        />

        {/* cards section (for books) */}
        <CardsSection>
          {books.map(item => (
            <Card key={item.id} data-book-id={item.id}>
              <div>
                <CardTitle>{item.title}</CardTitle>
                <CardSubtitle>{item.author}&nbsp;&#8211;&nbsp;{item.type == 'papier' ? 'Papieren boek' : item.type == 'audio' ? 'Audioboek' : 'E-book'}</CardSubtitle>
              </div>
              <CardList>
                <li>{`Uitgever: ${item.publisher}`}</li>
                <li>Uitgegeven: {item.year_published}</li>
                <li>ISBN: {item.isbn}</li>
              </CardList>

              <div className="card-links">
                <CardLink to={`/fouten/rapporteer-${item.id}`}>Rapporteer fout</CardLink>
                {(JSON.parse(localStorage.getItem('currentUser')).adm == 1) &&
                  <React.Fragment>
                    <br />
                    <CardLink to={`/fouten/boeken/boek-${item.id}`}>Wijzig boek</CardLink>
                  </React.Fragment>
                }
              </div>
            </Card>
          ))}
        </CardsSection>
      </Page>
    </>
  )
}

export default Boeken