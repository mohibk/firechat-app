import React from 'react';

import { firebaseApp, googleProvider } from '../firebase';
import { FcGoogle } from 'react-icons/fc';

const auth = firebaseApp.auth();

function SignIn() {
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider);
  };
  return (
    <div className="signIn__Page">
      <p className="signIn__Welcome">Welcome to Firechat</p>
      <button onClick={signInWithGoogle} className="signIn">
        <FcGoogle className="google-button" /> Sign in with Google
      </button>
    </div>
  );
}

export default SignIn;
