import React, { useState, useEffect } from "react"
import styled from "styled-components"
import shortid from "shortid"
import Page from "components/layout/sidebarPage"
import Navbar from "components/layout/navbar/navbarLarge"
import FetchErrors from "components/errors/fetchPublisher"
import ErrorCard from "components/errors/errorCard"
import { CardsSection } from "components/elements/cards"
import { Link } from "react-router-dom"
import { ArrowBackOutline } from "react-ionicons"

export default function ErrorsPublisher() {
  // set state
  const [publishers, setPublishers] = useState([])

  // set constants
  const fetchErrors = FetchErrors()

  useEffect(() => {
    // set title
    document.title = 'Beheer foutrapportages - Notenboom'

    // set publishers
    setPublishers(fetchErrors)
  }, [fetchErrors, setPublishers])
  
  return (
    <>
      <Navbar />
      <Page title="Administrator paneel" sidebarTitle="Beheer alle foutenrapportages" sidebarType="admin">
        {/* top section with back link */}
        <Link to={'/admin/fouten'} className="button button-back" style={{ marginBottom: 20 }}>
          <ArrowBackOutline color={'#ffffff'} height="16px" />
          &nbsp;Ga terug
        </Link>
        <h1>Beheer alle foutenrapportages per uitgever</h1>
        <p className="large" style={{ marginBottom: 40 }}>U ziet hieronder goedgekeurde foutenrapportages, gesorteerd per uitgever. U kunt voor elke uitgever een PDF bestand printen met daarin alle informatie per foutrapportage.</p>

        {/* publishers section */}
        {Object.entries(publishers).map(([publisher, errors]) => (
          <Section key={shortid.generate()}>
            <SectionTitle>{publisher}</SectionTitle>
            <CardsSection>
              {errors.map((error) => <ErrorCard key={shortid.generate()} item={error} />)}
            </CardsSection>
          </Section>
        ))}
      </Page>
    </>
  )
}

const Section = styled.div`
  margin-bottom: 30px;
`

const SectionTitle = styled.h2`
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
`