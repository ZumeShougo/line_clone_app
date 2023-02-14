import React, { useEffect, useState } from 'react';
import SignOut from './SignOut.js';
import SendMessage from './SendMessage.js'
import { db, auth } from '../firebase.js';

function Line() {
  const [messages, setMessages] = useState([]);//配列にしておかないとmap関数が使えない
  useEffect(() => {
    db.collection("messages")//DBにあるmessages
    .orderBy("createdAt")//登録された順に取ってくる
    .limit(50)//50個まで取ってくる
    .onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));//snapshot・・・「状態を抜き取ったもの」
    })
  }, []);
  return (
    <div>
      {console.log(messages)}
      <SignOut />
      <div className='megs'>
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div key={id} className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  )
}

export default Line