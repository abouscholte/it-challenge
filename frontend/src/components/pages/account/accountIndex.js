import React from "react"
import { Link } from "react-router-dom"
import NavbarLarge from "components/layout/navbar/navbarLarge"
import Page from "components/layout/sidebarPage"
import UserForm from "components/users/userForm"
import Alert from "components/elements/alert"
import Modal from "components/elements/modal"

const AccountIndex = props => (
  <>
    {/* navbar and page wrapper */}
    <NavbarLarge />
    <Page title="Uw account" sidebarTitle="Beheer uw account" sidebarLinks={props.sidebarLinks}>

      {/* left grid col with form and alert */}
      <Alert visible={props.alert.visible} text={props.alert.alert} />
      <h1>Uw persoonlijk Notenboom account.</h1>
      <p className="large">Beheer hier uw persoonlijke Notenboom account. U kunt uw informatie (e-mailadres, gebruikersnaam en naam) veranderen en uw wachtwoord aanpassen. Ook kunt u er voor kiezen uw account permanent te verwijderen.</p>

      {/* admin things */}
      {props.user.admin === '1' && (
        <div id="admin">
          <h2 style={{ margin: '50px 0 10px 0', fontSize: '1.7rem' }}>Administrator</h2>
          <p>U bent een administrator. Hierdoor heeft u bevoegdheid om gebruikers te bekijken en beheren en suggesties voor aanpassingen in lesboeken te accepteren. Gebruik de knop hieronder om naar het administrator paneel te gaan.</p>
          <Link className="button" to="/admin" style={{ marginBottom: '50px', fontSize: 14 }}> Ga naar administrator paneel</Link>
        </div>
      )}

      {/* form for users */}
      {props.user && (
        <UserForm 
          handleSubmit={props.handleSubmit} 
          onSubmit={props.onSubmit} 
          user={props.user} 
          register={props.register} 
          errors={props.errors} 
          modalVisible={props.modalVisible} />
      )}
    </Page>

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