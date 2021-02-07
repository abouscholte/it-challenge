import { useEffect } from "react"
import { Link } from "react-router-dom"
import FetchUsers from "components/users/fetchUsers"
import styled from "styled-components"
import NavbarLarge from "components/layout/navbar/navbarLarge"
import DefaultPage from "components/layout/defaultPage"
import { GridColHalf } from "components/elements/containers"

function Admin() {

  // fetch users
  const users = FetchUsers()
  // set document title
  useEffect(() => document.title = 'Administrator Paneel - Notenboom')

  // get the values for user statistics
  const countUsers = users.length
  const countValidUsers = users.filter((obj) => obj.status == 1).length
  const countInvalidUsers = countUsers - countValidUsers
  
  return (
    <>
      <NavbarLarge />
      <DefaultPage title="Administrator Paneel" grid>
        <GridColHalf>
          <SectionTitle>Beheer foutenrapportages</SectionTitle>
        </GridColHalf>
        <GridColHalf>
          <SectionTitle>Beheer gebruikers</SectionTitle>
          <section id="useradmin">
            <h2>Beheer en bekijk</h2>
            <ul>
              <li><Link to="/admin/gebruikers/alle-gebruikers">Beheer en bekijk alle gebruikers</Link></li>
              <li><Link to="/admin/gebruikers/nieuwe-gebruikers">Beheer en bekijk nieuwe gebruikers</Link></li>
            </ul>
          </section>
          <section id="userstats">
            <h2>Statistieken</h2>
            <ul>
              <li>Aantal gebruikers: <b>{countUsers} {countUsers == 1 ? 'gebruiker' : 'gebruikers'}</b></li>
              <li>Aantal goedgekeurde gebruikers: <b>{countValidUsers} {countValidUsers == 1 ? 'gebruiker' : 'gebruikers'}</b></li>
              <li>Aantal niet goedgekeurde gebruikers: <b>{countInvalidUsers} {countInvalidUsers == 1 ? 'gebruiker' : 'gebruikers'}</b></li>
            </ul>
          </section>
        </GridColHalf>
      </DefaultPage>
    </>
  )
}

const SectionTitle = styled.h1`
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 30px;
`

export default Admin