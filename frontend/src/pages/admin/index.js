import { useEffect } from "react"
import NavbarLarge from "components/layout/navbar/navbarLarge"
import DefaultPage from "components/layout/defaultPage"
import { AdminCheck } from "components/pages/admin/adminCheck"

function Admin() {

  // set document title
  useEffect(() => document.title = 'Administrator Paneel - Notenboom')
  
  return (
    <>
      <AdminCheck />
      <NavbarLarge />
      <DefaultPage title="Administrator Paneel"></DefaultPage>
    </>
  )
}

export default Admin