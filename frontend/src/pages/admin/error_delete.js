import { useEffect, useState } from "react"
import { Redirect, useParams } from "react-router-dom"

export default function ErrorDelete() {
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  const deleteError = () => {
    const body = {
      id: id,
      token: localStorage.getItem('jwt-token'),
    }

    fetch(`${process.env.REACT_APP_API_BASEURL}/errors/delete.php`, {
      method: 'POST', body: JSON.stringify(body)
    })
      .then(async response => {
        const data = await response.json()
        const alert = {
          visible: true,
          alert: data.error ? data.error : data.success
        }
        return alert
      })
  }

  useEffect(() => {
    setLoading(false)
    deleteError()
  }, [])

  return loading && (
    <Redirect to={{
      pathname: '/admin/fouten',
      state: {
        visible: true,
        alert: 'De fout is succesvol verwijderd!',
      }
    }} />
  )
}