import '../styles/Card.css';
import { appointmentFunc } from '../lib/firebase';

const Card = ({
  name,
  date,
  uid,
}: {
  name: string;
  date: string;
  uid: string;
}) => {
  const appointDate = async () => {
    console.log('予約開始');
    await appointmentFunc(name, date, uid);
  };
  return (
    <div className="cardWrapper">
      <h1>Card</h1>
      <button onClick={appointDate}>予約</button>
    </div>
  );
};

export default Card;
