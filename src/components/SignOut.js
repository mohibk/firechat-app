import React from 'react';
import { firebaseApp } from '../firebase';

const auth = firebaseApp.auth();

function SignOut() {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}

export default SignOut;
