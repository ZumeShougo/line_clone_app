
import './App.css';
import Line from "./components/Line";
import SignIn from './components/SignIn';
import { useAuthState } from "react-firebase-hooks/auth";//firebaseのhooks
import { auth } from "./firebase.js";

function App() {
  const [user] = useAuthState(auth);//userの認証状態 userは角括弧で括らなければならない
  return (
    <div className="App">
      {user ? <Line /> : <SignIn />}
    </div>//userが存在すれば<Line />存在しなければ<SignIn />
  );
}

export default App;
