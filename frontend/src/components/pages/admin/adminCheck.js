import { Redirect } from "react-router-dom"

export const AdminCheck = () => {
  if (JSON.parse(localStorage.getItem('currentUser')).adm != 1) {
    return <Redirect to={{ pathname: '/fouten', state: {alert: "U heeft geen toestemming om deze pagina te bezoeken!"} }} />
  }
  
  return null
}