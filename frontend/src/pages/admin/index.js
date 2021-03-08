import React, { useState, useEffect } from "react"
import _ from "lodash"
import Page from "components/layout/sidebarPage"
import Navbar from "components/layout/navbar/navbarLarge"
import FetchUsers from "components/users/fetch"
import { useHistory, useLocation } from "react-router-dom"

import { TableStyle } from "components/layout/globalStyle"

export default function Admin() {

  // set state and constants
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [order, setOrder] = useState('old_to_new')
  const [filter, setFilter] = useState('all')

  const fetchUsers = FetchUsers()
  const history = useHistory()
  const location = useLocation()
  
  useEffect(() => {
    // set page title
    document.title = 'Beheer gebruikers - Administrator - Notenboom'

    // set users
    setUsers(fetchUsers)
    setFilteredUsers(fetchUsers.filter((user) => user.status == 0))
  }, [setUsers, setFilteredUsers, fetchUsers]);
  
  // function for clicking on table row
  // redirect to that users control view
  function selectUser(id) {
    history.push({
      pathname: `/admin/gebruiker-${id}`,
      state: {
        from: location.pathname
      }
    })
  }

  // function for ordering table
  function handleOrder() {
    setOrder((order == 'old_to_new') ? 'new_to_old' : 'old_to_new')
    _.reverse(users)
  }
  
  // set sidebar links
  const sidebarLinks = [
    {title: 'Gebruikers', to: '/admin'},
    {title: 'Foutenrapportages', to: '/admin/fouten'},
    {title: 'Boeken', to: '/admin/boeken'}
  ]
  
  return (
    <React.Fragment>
      {/* render navbar, page layout and styles for table */}
      <TableStyle />
      <Navbar />
      <Page title="Administrator paneel" sidebarTitle="Beheer alle gebruikers" sidebarLinks={sidebarLinks}>
        <p className="large">Klik op een kolom om de gebruiker te beheren. U kunt als administrator een gebruikersaccount wijzigen en verwijderen.</p>

        {/* filter buttons */}
        <div id="filters" style={{ marginBottom: 30, marginTop: 10 }}>
          <div className="small" style={{ marginBottom: 5}} onClick={() => handleOrder()}>{(order == 'old_to_new') ? 'Sorteer van nieuw naar oud' : 'Sorteer van oud naar nieuw'}</div>
          <div className="small" onClick={() => setFilter(filter == 'all' ? 'new' : 'all')}>{(filter == 'all') ? 'Laat alleen nieuwe gebruikers zien' : 'Laat alle gebruikers zien'}</div>
        </div>

        {/* render table */}
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Gebruikersnaam</th>
                <th scope="col">E-mailadres</th>
                <th scope="col">Volledige naam</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {filter == 'all' ?
                users.map((user, i) => (
                  <tr key={i + 1} onClick={() => selectUser(user.id)} tabIndex={i + 1}>
                    <th scope="col">{user.id}</th>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.name}</td>
                    <td>{user.status == 1 ? 'Goedgekeurd' : 'Niet goedgekeurd'}</td>
                  </tr>
                ))
              : 
                filteredUsers.length >= 1 ? (
                  filteredUsers.map((user, i) => (
                    <tr key={i + 1} onClick={() => selectUser(user.id)} tabIndex={i + 1}>
                      <th scope="col">{user.id}</th>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.name}</td>
                      <td>{user.status == 1 ? 'Goedgekeurd' : 'Niet goedgekeurd'}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td /><td /><td /><td /><td />
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </Page>
    </React.Fragment>
  )
}