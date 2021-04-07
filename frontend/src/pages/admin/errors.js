import React, { useState, useEffect } from "react"
import styled from "styled-components"
import shortid from "shortid"
import FetchErrors from "components/errors/fetch"
import Page from "components/layout/sidebarPage"
import Navbar from "components/layout/navbar/navbarLarge"
import ErrorCard from "components/errors/errorCard"
import Alert from "components/elements/alert"
import { CardsSection } from "components/elements/cards"
import { Link, useLocation } from "react-router-dom"
import { Book } from "react-ionicons"

export default function Errors() {
  // set constants and such
  const fetchErrors = FetchErrors()
  const location = useLocation()
  const [errors, setErrors] = useState([])
  const [defaultErrors, setDefaultErrors] = useState([])
  const [filter, setFilter] = useState(false)
  const [alert, setAlert] = useState({ visible: false, text: null })
  
  useEffect(() => {
    // set document title
    document.title = 'Beheer foutenrapportages - Notenboom'

    // fetch errors
    setErrors(fetchErrors.filter((item) => item.status == 0))
    setDefaultErrors(fetchErrors)

    // set alert
    if (location.state) {
      setAlert({
        visible: location.state.visible,
        text: location.state.alert,
      })
    }
  }, [setErrors, fetchErrors, setDefaultErrors, location])

  return (
    <React.Fragment>
      <Navbar />
      <Page title="Administrator paneel" sidebarTitle="Beheer alle foutenrapportages" sidebarType="admin">
        {/* top info */}
        <h1>Beheer alle foutenrapportages</h1>
        <p className="large">U ziet hieronder alle nieuwe, nog niet goedgekeurde foutenrapportages. Om alle goedgekeurde te zien, gebruik de filters hieronder.</p>

        <Alert visible={alert.visible} text={alert.text} />

        {/* filter button group */}
        <div className="button-group filter-button-group">
          <a className={`button ${filter ? 'active' : 'inactive'}`} href="#" onClick={(e) => {
            e.preventDefault()
            setFilter(filter == true ? false : true)
            setErrors(filter == true
              ? defaultErrors.filter((item) => item.status == 0)
              : defaultErrors.filter((item) => item.status == 1)
            )
          }}>Bekijk goedgekeurde fouten</a>
          <Link to="/admin/fouten/uitgever" className="button">Bekijk fouten per uitgever</Link>
        </div>

        {/* cards section */}
        <CardsSection>
          {errors.length > 0 ? (
            errors.map((item) => (
              <ErrorCard key={shortid.generate()} item={item} />
            ))
          ) : (
            <EmptySection>
              <Book />
              <p className="large">Er zijn geen foutenregistraties gevonden.</p>
            </EmptySection>
          )}
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