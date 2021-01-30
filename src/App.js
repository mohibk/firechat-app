import React from 'react';
import './App.css';
import { firebaseApp } from './firebase';

import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import { RiFireFill } from 'react-icons/ri';

const auth = firebaseApp.auth();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>
          Firechat <RiFireFill className="header__Icon" />
        </h1>
        <SignOut />
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
