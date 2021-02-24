import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { ArrowBackOutline } from "react-ionicons"
import NotFound from "pages/notFound"
import DefaultPage from "components/layout/defaultPage"
import NavbarLarge from "components/layout/navbar/navbarLarge"
import { GridColOneThird, GridColTwoThirds, GridColFull } from "components/elements/containers"
import UserForm from "components/users/userForm"
import Alert from "components/elements/alert"
import Modal from "components/elements/modal"

const UserControlPage = ({ user, back, alert, updateStatus, updateAdmin, handleSubmit, onSubmit, register, errors, modalVisible, modalInvisible, showModal, deleteUser }) => (
  <>
    {
      user ? (
        <>
          {/* render navbar and default page wrapper */}
          <NavbarLarge />
          <DefaultPage title={`Beheer het account van ${user.name}`} grid>
            {/* top section with back button and alert */}
            <GridColFull>
              <Link to={back ? back : '/admin'} className="button button-back">
                <ArrowBackOutline color={'#ffffff'} height="16px" />
                &nbsp;Ga terug
              </Link>
              <Alert 
                visible={alert.visible} 
                text={alert.alert}
                style={{ width: '100%', minWidth: '100%', margin: '30px 0' }}
              />
            </GridColFull>

            {/* left grid column with account permissions */}
            <GridColOneThird>
              <SectionTitle>Beheer gebruikerstoegang</SectionTitle>
              <p className="large">
                Deze gebruiker is <u>{(user.status == 1) ? 'goedgekeurd' : 'nog niet goedgekeurd'}</u> en <u>{(user.admin == 1) ? 'een' : 'geen'} administratorgebruiker</u>. Pas dit hier aan.
              </p>

              <ButtonGroup>
                <Link to="#" onClick={() => updateStatus()}>{(user.status == 1) ? 'Keur gebruiker niet meer goed' : 'Keur gebruiker goed'}</Link>
                <Link to="#" onClick={() => updateAdmin()}>{(user.admin == 1) ? 'Maak niet meer administrator' : 'Maak administrator'}</Link>
              </ButtonGroup>

              {/* important info for account permissions */}
              <SmallText>
                <h3>Belangrijke informatie over gebruikersstatus en administratorgebruikers</h3>
                <p>
                  Een gebruiker die niet is goedgekeurd, heeft geen toegang tot het hele systeem. Deze gebruiker zal aleen een pagina zien waarop staat dat er nog geen goedkeuring is verleend. Administratorgebruikers hebben toegang tot alle functies van het systeem en kunnen boeken, foutrapportages en gebruikers beheren.
                </p>
              </SmallText>
            </GridColOneThird>

            {/* right grid col with form */}
            <GridColTwoThirds>
              <SectionTitle>Beheer gebruiker</SectionTitle>
              <p className="large">Beheer gebruikersinformatie in onderstaand formulier. Als dit wordt aangepast, ontvangt de gebruiker een e-mail notificatie.</p>
              <UserForm 
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                register={register}
                errors={errors}
                user={user}
                modalVisible={modalVisible}
              />
            </GridColTwoThirds>
          </DefaultPage>

          {/* screen modal for deleting account */}
          <Modal 
            show={showModal}
            handleClose={modalInvisible}
            actionButton={true}
            actionButtonText="Verwijder"
            actionButtonClassName="danger"
            actionButtonOnClick={() => deleteUser()}
          >
            <h2 style={{ margin: 0, marginBottom: 10 }}>Weet u zeker dat u uw account wilt verwijderen?</h2>
            <p>U kunt hierna niet meer terug. Al uw gegevens worden verwijderd. Weet u dit zeker?</p>
          </Modal>
        </>
      ) : (
        <NotFound />
      )
    }
  </>
)

const SectionTitle = styled.h2`
  border-bottom: 2px solid #eee;
  margin-bottom: 30px;
  padding-bottom: 10px;
`

const ButtonGroup = styled.div`
  margin-top: -10px;
  a {
    display: block;
    margin-bottom: 5px;
  }
`

const SmallText = styled.div`
  color: #999999;
  font-size: 13px;
  margin-top: 30px;
  h3 {
    color: #777;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
    padding-bottom: 5px;
    border-bottom: 1px solid ${props => props.theme.darker_grey};
  }
  p {
    line-height: 1.9;
  }
`

export default UserControlPage