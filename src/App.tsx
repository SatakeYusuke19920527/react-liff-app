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
  // const lineSignIn = () => {};

  const sendMessage = () => {
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

        // console.log('liff check == 1');
        // if (!liff.isLoggedIn()) {
        //   liff.login({}); // ログインしていなければ最初にログインする
        // } else if (liff.isInClient()) {
        //   console.log('liff check == 2');
        //   liff
        //     .getProfile()
        //     .then((profile) => {
        //       const name = profile.displayName;
        //       console.log('🚀 ~ file: App.tsx ~ line 60 ~ .then ~ name', name);
        //     })
        //     .catch((err) => {
        //       console.log('error', err);
        //     });
        // } else {
        //   console.log('liff check == 3 : ', liff.isInClient());
        // }
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={signIn}>google login</button> */}
        <button onClick={sendMessage}>line login</button>
        <Link to="/login">login</Link>
      </header>
    </div>
  );
}

export default App;
