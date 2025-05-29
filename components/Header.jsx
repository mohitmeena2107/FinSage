import React from 'react'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


const Header = () => {
  return (
    <><SignedOut>
          <SignInButton />
          <SignUpButton />
      </SignedOut><SignedIn>
              <UserButton />
          </SignedIn></>
  )
}

export default Header