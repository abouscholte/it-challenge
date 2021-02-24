import React from "react"
import { GridColOneThird, GridColTwoThirds } from "components/elements/containers"
import { Link } from "react-router-dom"
import NavbarLarge from "components/layout/navbar/navbarLarge"
import DefaultPage from "components/layout/defaultPage"
import UserForm from "components/users/userForm"
import Alert from "components/elements/alert"
import Modal from "components/elements/modal"

const AccountIndex = props => (
  <>
    {/* navbar and page wrapper */}
    <NavbarLarge />
    <DefaultPage grid title="Uw account">

      {/* left grid col with form and alert */}
      <GridColTwoThirds>
        <Alert visible={props.alert.visible} text={props.alert.alert} />
        <h1>Wijzig account gegevens</h1>

        {props.user && (
          <UserForm 
            handleSubmit={props.handleSubmit} 
            onSubmit={props.onSubmit} 
            user={props.user} 
            register={props.register} 
            errors={props.errors} 
            modalVisible={props.modalVisible} />
        )}
      </GridColTwoThirds>

      {/* right grid col with admin link and your changes */}
      <GridColOneThird>
        {props.user.admin === '1' && (
          <div id="admin">
            <h1>Administrator</h1>
            <p>U bent een administrator. Hierdoor heeft u bevoegdheid om gebruikers te bekijken en beheren en suggesties voor aanpassingen in lesboeken te accepteren. Gebruik de knop hieronder om naar het administrator paneel te gaan.</p>
            <Link className="button" to="/admin" style={{ marginBottom: '30px' }}>Administrator paneel</Link>
          </div>
        )}
        <h1>Uw aanpassingen</h1>
        <p>U heeft nog geen aanpassingen aan lesboeken gemaakt.</p>
      </GridColOneThird>
    </DefaultPage>

    {/* modal for account deletion */}
    <Modal 
        show={props.showModal}
        handleClose={props.modalInvisible}
        actionButton={true}
        actionButtonText="Verwijder"
        actionButtonClassName="danger"
        actionButtonOnClick={() => props.deleteUser()}
      >
        <h2 style={{ margin: 0, marginBottom: 10 }}>Weet u zeker dat u uw account wilt verwijderen?</h2>
        <p>U kunt hierna niet meer terug. Al uw gegevens worden verwijderd. Weet u dit zeker?</p>
      </Modal>
  </>
)

export default AccountIndex