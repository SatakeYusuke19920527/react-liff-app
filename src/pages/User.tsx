import { useEffect } from 'react';
import { useAppSelector } from '../hooks/useRTK';
import { selectUser } from '../features/userSlice';
import { useLoginCheck } from '../hooks/useLoginCheck';
import { useNavigate } from 'react-router-dom';
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
      <h1>User</h1>
    </Layout>
  ) : (
    <Layout>ユーザー認証中...</Layout>
  );
};

export default User;
