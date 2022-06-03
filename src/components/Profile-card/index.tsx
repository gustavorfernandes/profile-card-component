import CardInfo from './Downside';
import style from './ProfileCard.module.scss';
import BackgroundCard from './Upside';

export default function ProfileCard() {
  return (
    <div className={style.Card}>
      <BackgroundCard />
      <CardInfo />
    </div>
  );
}
