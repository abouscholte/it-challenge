import React from "react"
import { Link } from "react-router-dom"
import {
  FormGroup,
  FormControl,
  FormControlError,
  FormLabel,
  FormSubmit,
  FormLinks
} from "components/elements/forms"

const UserForm = ({ handleSubmit, onSubmit, user, register, errors, modalVisible }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <FormGroup>
      <FormLabel htmlFor="email">Wijzig uw e-mailadres</FormLabel>
      <FormControl name="email" type="email" id="email" defaultValue={user.email} className={errors.email && "error"} ref={register({
        required: "Dit veld is verplicht!",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Ongeldig e-mailadres, probeer een andere!"
        }
      })} />
      {errors.email && <FormControlError>{errors.email.message}</FormControlError>}
    </FormGroup>
    <FormGroup>
      <FormLabel htmlFor="username">Wijzig uw gebruikersnaam</FormLabel>
      <FormControl name="username" type="username" id="username" defaultValue={user.username} className={errors.username && "error"} ref={register({
        required: "Dit veld is verplicht!",
        minLength: {
          value: 3,
          message: "Gebruikersnaam moet bestaan uit minimaal 3 tekens!"
        },
        maxLength: {
          value: 20,
          message: "Gebruikersnaam moet bestaan uit maximaal 20 tekens!"
        }
      })} />
      {errors.username && <FormControlError>{errors.username.message}</FormControlError>}
    </FormGroup>
    <FormGroup>
      <FormLabel htmlFor="name">Wijzig uw naam</FormLabel>
      <FormControl name="name" type="name" id="name" defaultValue={user.name} ref={register({ required: "Dit veld is verplicht!" })} className={errors.name && "error"} />
      {errors.name && <FormControlError>{errors.name.message}</FormControlError>}
    </FormGroup>
    <FormSubmit type="submit" value="Wijzig account" tabIndex="4" className="button" />
    <FormLinks>
      <Link className="danger" to="#" onClick={() => modalVisible()}>Verwijder account</Link>
    </FormLinks>
  </form>
)

export default UserForm