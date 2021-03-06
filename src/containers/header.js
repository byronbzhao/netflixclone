import React from 'react'
import Header from '../components/Header/Header'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'


const HeaderContainer = ({ children }) => {
  return (
      <Header >
        <Header.Frame>
          <Header.Logo src={logo} to={ROUTES.HOME} alt="Netflix" />
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        </Header.Frame>
        {children}
      </Header>
  )
}

export default HeaderContainer;
