import { useEffect } from 'react';
import logo from './logo.svg';
import { useAppSelector, useAppDispatch } from './hooks/useRTK';
import { selectUser, login, logout } from './features/userSlice';
import { auth, googleLogin } from './lib/firebase';
import './App.css';

function App() {
  const user = useAppSelector(selectUser);
  console.log('🚀 ~ file: App.tsx ~ line 10 ~ App ~ user', user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photoUrl: authUser.photoURL,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unSub();
    };
  }, [dispatch]);
  const signIn = async () => {
    await googleLogin();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={signIn}>line login</button>
      </header>
    </div>
  );
}

export default App;
