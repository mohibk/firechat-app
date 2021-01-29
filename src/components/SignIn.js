import React from 'react';

import { firebaseApp, googleProvider } from '../firebase';
import { FcGoogle } from 'react-icons/fc';

const auth = firebaseApp.auth();

function SignIn() {
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider);
  };
  return (
    <button onClick={signInWithGoogle} className="sign-in">
      <FcGoogle className="google-button" /> Sign in with Google
    </button>
  );
}

export default SignIn;
