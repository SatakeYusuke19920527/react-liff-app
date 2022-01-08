import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './hooks/useRTK';
import { selectUser, login, logout } from './features/userSlice';
import { auth, googleLogin } from './lib/firebase';
import { Link } from 'react-router-dom';
import './App.css';
import liff from '@line/liff';

function App() {
  const user = useAppSelector(selectUser);
  console.log('🚀 ~ file: App.tsx ~ line 10 ~ App ~ user', user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    liff
      .init({ liffId: process.env.REACT_APP_LIFF_ID as string })
      .then(async () => {
        if (liff.isLoggedIn()) {
          console.log('login status : [', true, ']');
          console.log('liff check == 1 in useEffect');
          const profile = await liff.getProfile();
          console.log(
            '🚀 ~ file: Login.tsx ~ line 15 ~ liff.init ~ profile',
            profile
          );
          dispatch(
            login({
              uid: profile.userId,
              photoUrl: profile.pictureUrl,
              displayName: profile.displayName,
            })
          );
        } else {
          console.log('login status : [', false, ']');
        }
      });
  }, []);

  const lineLogin = () => {
    liff
      .init({ liffId: process.env.REACT_APP_LIFF_ID as string })
      .then(async () => {
        console.log(
          '🚀 ~ file: Login.tsx ~ line 27 ~ liff.init ~ liff.isLoggedIn()',
          liff.isLoggedIn()
        );

        if (liff.isLoggedIn()) {
          console.log('liff check == 1');
          const profile = await liff.getProfile();
          console.log(
            '🚀 ~ file: Login.tsx ~ line 15 ~ liff.init ~ profile',
            profile
          );
          dispatch(
            login({
              uid: profile.userId,
              photoUrl: profile.pictureUrl,
              displayName: profile.displayName,
            })
          );
        } else {
          console.log('liff check == 2');
          liff.login();
        }
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={lineLogin}>line login</button>
      </header>
    </div>
  );
}

export default App;
