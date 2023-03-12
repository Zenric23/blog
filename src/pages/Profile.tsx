import React, {useContext} from 'react'
import Navbar from '../components/Navbar'
import HomeNavbar from '../components/pages/Home/Navbar'
import Body from '../components/pages/Profile/Body'
import Side from '../components/pages/Profile/Side'
import { Container } from '../components/ui/util/container.styled'
import { BodyFlex } from '../components/ui/util/flex.styled'
import { UserContext } from '../context/userContext'

const Profile = () => {
  const {state} = useContext(UserContext)

  return (
    <>
    {
      state.user ? (
        <Navbar />
      ) : (
        <HomeNavbar isRead={true} />
      )
    }
      <Container>
        <BodyFlex>
          <Body />
          <Side />
        </BodyFlex>
      </Container>
    </>
  )
}

export default Profile