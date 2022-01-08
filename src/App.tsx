import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './hooks/useRTK';
import { selectUser, login } from './features/userSlice';
import { useNavigate } from 'react-router-dom';
import './App.css';
import liff from '@line/liff';

function App() {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
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
          navigate('/main');
        } else {
          console.log('login status : [', false, ']');
        }
      });
  }, [dispatch]);

  const lineLogin = () => {
    liff
      .init({ liffId: process.env.REACT_APP_LIFF_ID as string })
      .then(async () => {
        console.log(
          '🚀 ~ file: Login.tsx ~ line 27 ~ liff.init ~ liff.isLoggedIn()',
          liff.isLoggedIn()
        );

        if (!liff.isLoggedIn()) {
          console.log('liff check == 2');
          liff.login();
        }
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my site✋</h1>
        <section onClick={lineLogin}>
          <a href="#" className="btn_03">
            BUTTON
          </a>
        </section>
      </header>
    </div>
  );
}

export default App;
