import { useEffect } from 'react';
import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import { auth } from './lib/firebase';
import './App.css';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button>line login</button>
      </header>
    </div>
  );
}

export default App;
