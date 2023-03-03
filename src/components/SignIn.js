//rfce
import { Button } from '@mui/material'
import React from 'react'
import firebase from 'firebase/compat';
import { auth } from "../firebase.js";//firebase.jsにてexportしたauth
function SignIn() {
  function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();//providerにGoogleが提供している認証機能を使いますよ
    auth.signInWithPopup(provider);//上記で設定したproviderでもってポップアップの認証機能を出しますよ
  }
  return (
    <div>
      <Button onClick={signInWithGoogle}>Googleでログイン</Button>
    </div>
  )
}

export default SignIn