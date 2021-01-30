import React, { useRef, useState } from 'react';
import firebase from 'firebase/app';
import { firebaseApp } from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { RiSendPlaneFill } from 'react-icons/ri';
import { AiOutlineSend } from 'react-icons/ai';

import ChatMessage from './ChatMessage';

const auth = firebase.auth();
const firestore = firebaseApp.firestore();

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(50);

  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue('');

    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          type="text"
        />

        <button type="submit" className="button__Send">
          <RiSendPlaneFill />
        </button>
      </form>
    </>
  );
}

export default ChatRoom;
