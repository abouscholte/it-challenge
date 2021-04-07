import { useEffect, useState } from "react"
import { Redirect, useParams } from "react-router-dom"

export default function ErrorUpdate() {
  const [loading, setLoading] = useState(true)
  const { status, id } = useParams()
  
  const updateStatus = () => {
    const body = {
      id: id,
      status: status == 0 ? 1 : 0,
      token: localStorage.getItem('jwt-token'),
    }

    fetch(`${process.env.REACT_APP_API_BASEURL}/errors/update.php`, {
      method: 'POST', body: JSON.stringify(body)
    })
      .then(async response => {
        const data = await response.json()
        const alert = {
          visible: true,
          alert: data.error ? data.error : data.success,
        }
        return alert
      })
  }
  
  useEffect(() => {
    setLoading(false)
    updateStatus()
  }, [])

  return loading && (
    <Redirect to={{
      pathname: '/admin/fouten',
      state: {
        visible: true,
        alert: 'De status van de foutmelding is succesvol aangepast.'
      }
    }} />
  )
}