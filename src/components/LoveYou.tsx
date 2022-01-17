import '../styles/Card.css';
import { compatibilityCheckFunc } from '../lib/firebase';

const LoveYou = ({
  myname,
  yourname,
  uid,
}: {
  myname: string;
  yourname: string;
  uid: string;
}) => {
  const compatibilityCheck = async () => {
    console.log('好きな人と相性をチェック');
    await compatibilityCheckFunc(myname, yourname, uid);
  };
  return (
    <div className="cardWrapper">
      <h1>相性チェッカー</h1>
      <h2>あなたの名前</h2>
      <input type="text" />
      <h2>お相手の名前</h2>
      <input type="text" />
      <button onClick={compatibilityCheck}>相性をチェックする</button>
    </div>
  );
};

export default LoveYou;
