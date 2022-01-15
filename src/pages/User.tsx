import { useEffect } from 'react';
import { useAppSelector } from '../hooks/useRTK';
import { selectUser } from '../features/userSlice';
import { useLoginCheck } from '../hooks/useLoginCheck';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Layout from '../components/Layout';

const User = () => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const isLogin = useLoginCheck(user);
  console.log('🚀 ~ file: Main.tsx ~ line 5 ~ Main ~ user', user);
  useEffect(() => {
    if (!isLogin) {
      window.alert('ログイン画面に戻ります。');
      navigate('/');
    }
  }, [isLogin, navigate]);
  return isLogin ? (
    <Layout>
      <Avatar alt="Remy Sharp" src={user.photoUrl} />
      <h2>{user.displayName}</h2>
      <h3>予約情報</h3>
      <h2>loading...</h2>
    </Layout>
  ) : (
    <Layout>ユーザー認証中...</Layout>
  );
};

export default User;
