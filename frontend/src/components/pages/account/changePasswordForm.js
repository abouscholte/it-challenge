import React from "react"
import styled from "styled-components"
import {
  FormGroup,
  FormLabel,
  FormControl, 
  FormControlError,
  FormSubmit,
  FormLinks
} from "components/elements/forms"
import { Link } from "react-router-dom"

const ChangePasswordForm = props => (
  <section style={{ position: 'relative', height: 170 }}>
    {/* old password form */}
    {
      (props.formVisible == 0 || props.formVisible == 1 ) && (
        <OldPassForm className={(props.formVisible == 1) && 'hidden'} onSubmit={props.handleSubmit(props.submitOldPass)}>
          <FormGroup>
            <FormLabel htmlFor="oldPassword">Vul uw oude wachtwoord in</FormLabel>
            <FormControl name="oldPassword" id="oldPassword" type="password" className={props.errors.oldPassword && 'error'} ref={props.register({
              required: 'Dit veld is verplicht!'
            })} />
            {props.errors.oldPassword && <FormControlError>{props.errors.oldPassword.message}</FormControlError>}
          </FormGroup>
          <FormSubmit type="submit" value="Wijzig account" className="button" />
          <FormLinks>
            <Link to="/account/wachtwoord-vergeten">Wachtwoord vergeten?</Link>
          </FormLinks>
        </OldPassForm>
      )
    }

    {/* new password form */}
    {
      (props.formVisible == 1 || props.formVisible == 2) && (
        <NewPassForm className={(props.formVisible != 2) && 'hidden'} onSubmit={props.handleSubmit2(props.submitNewPass)}>
          <FormGroup>
            <FormLabel htmlFor="newPassword">Kies een nieuw wachtwoord</FormLabel>
            <FormControl name="newPassword" id="newPassword" type="password" className={props.errors2.newPassword && 'error'} ref={props.register2({
              required: 'Dit veld is verplicht!'
            })} />
            {props.errors2.newPassword && <FormControlError>{props.errors2.newPassword.message}</FormControlError>}
          </FormGroup>
          <FormSubmit type="submit" value="Wijzig account" className="button" />
        </NewPassForm>
      )
    }
  </section>
)

const OldPassForm = styled.form`
  opacity: 1;
  transition: all 200ms cubic-bezier(0,-1.12, 0.93, 0.93);
  &.hidden {
    opacity: 0;
    transform: translateX(50%) scale(0.7);
  }
`

const NewPassForm = styled.form`
  opacity: 1;
  transition: all 200ms cubic-bezier(0, 0, 0, 1.4);
  position: absolute;
  width: 100%;
  height: 130;
  z-index: 1;
  top: 0;
  &.hidden {
    opacity: 0;
    transform: translateX(-50%) scale(0.7);
  }
`

export default ChangePasswordForm