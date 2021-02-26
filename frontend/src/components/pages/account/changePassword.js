import React from "react"
import { Link } from "react-router-dom"
import { ArrowBackOutline } from "react-ionicons"
import NavbarLarge from "components/layout/navbar/navbarLarge"
import DefaultPage from "components/layout/defaultPage"
import Alert from "components/elements/alert"
import ChangePasswordForm from "components/pages/account/changePasswordForm"

const ChangePasswordPage = props => (
  <>
    {/* render navbar and default smaller page container */}
    <NavbarLarge />
    <DefaultPage title="Wijzig wachtwoord" small>
      {/* top part of page */}
      <section id="top">
        <Link to="/account" className="button button-back">
          <ArrowBackOutline color={'#ffffff'} height="16px" />
          &nbsp;Ga terug
        </Link>
        <Alert 
          visible={props.alert.visible} 
          text={props.alert.alert}
          style={{ width: '100%', minWidth: '100%', margin: '30px 0' }}
        />
      </section>

      {/* render text section */}
      <section id="text">
        {
          (props.formVisible == 2) ? (
            <>
              <h1 style={{ marginTop: 20 }}>Kies een nieuw wachtwoord</h1>
              <p className="large" style={{ marginTop: -10 }}>Kies nu een nieuw wachtwoord voor uw account. Gebruik geen wachtwoorden die u op andere sites gebruikt.</p>
            </>
          ) : (
            <>
              <h1 style={{ marginTop: 20 }}>Wijzig uw wachtwoord</h1>
              <p className="large" style={{ marginTop: -10 }}>Om een nieuw wachtwoord aan te maken, moet u voor veiligheidsredenen eerst uw oude wachtwoord invullen.</p>
            </>
          )
        }
      </section>

      {/* password forms */}
      <ChangePasswordForm
        handleSubmit={props.handleSubmit}
        register={props.register}
        errors={props.errors}
        submitOldPass={props.submitOldPass}
        handleSubmit2={props.handleSubmit2}
        register2={props.register2}
        errors2={props.errors2}
        submitNewPass={props.submitNewPass}
        formVisible={props.formVisible}
        newPasswordCurrent={props.newPasswordCurrent}
      />
    </DefaultPage>
  </>
)

export default ChangePasswordPage