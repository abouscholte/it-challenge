import React, { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import _ from "lodash"
import { Link } from "react-router-dom"
import { TableStyle } from "components/layout/globalStyle"
import NavbarLarge from "components/layout/navbar/navbarLarge"
import DefaultPage from "components/layout/defaultPage"
import FetchUsers from "components/users/fetch"
import { ArrowBackOutline } from "react-ionicons"

function UsersTable(props) {

  // set state and other constants from hooks
  const [sorted, setSorted] = useState('old_to_new')
  const history = useHistory()
  const location = useLocation()

  // set page title
  useEffect(() => document.title = 'Administrator Paneel - Notenboom')

  // set users (depending on prop)
  const users = FetchUsers()
  const filtered_users = users.filter((obj) => obj.status == 0)
  const tableUsers = props.new_users ? filtered_users : users

  // function for clicking on table row
  // redirect to that users control view
  function selectUser(id) {
    history.push({
      pathname: `/admin/gebruikers/gebruiker-${id}`,
      state: {
        from: location.pathname
      }
    })
  }

  // function for filtering table
  function handleClick() {
    setSorted((sorted == 'old_to_new') ? 'new_to_old' : 'old_to_new')
    _.reverse(users)
  }
  
  return (
    <>
      {/* render styles for table and default navbar */}
      <TableStyle />
      <NavbarLarge />

      {/* render default page */}
      <DefaultPage title={props.new_users ? 'Nieuwe gebruikers' : 'Alle gebruikers'}>
        {/* top section of page with back button and title */}
        <p><Link to="/admin" className="button button-back">
          <ArrowBackOutline color={'#ffffff'} height="16px" />
          &nbsp;Ga terug
        </Link></p>
        <h1>{props.new_users ? 'Nieuwe gebruikers' : 'Alle gebruikers'}
          <div className="small" onClick={() => handleClick()}>{(sorted == 'old_to_new') ? 'Sorteer van nieuw naar oud' : 'Sorteer van oud naar nieuw'}</div>
        </h1>

        {/* table */}
        {
          (tableUsers.length > 0) ? (
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
                  {
                    tableUsers.map((user, i) => {
                      return (
                        <tr key={i} onClick={() => selectUser(user.id)} tabIndex={i}>
                          <th scope="col">{user.id}</th>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>{user.name}</td>
                          <td>{user.status == 1 ? 'Goedgekeurd' : 'Niet goedgekeurd'}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          ) : (
            <p className="large">{props.new_users ? 'Geen nieuwe gebruikers gevonden' : 'Geen gebruikers gevonden'}</p>
          )
        }
      </DefaultPage>
    </>
  )
}

export default UsersTable