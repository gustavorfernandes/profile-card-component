import Avatar from './Avatar';
import style from './Downside.module.scss';
import Profile from './Profile';
import Social from './Social';

export default function CardInfo() {
  return (
    <div className={style.DownsideCard}>
      <Avatar />
      <Profile />
      <Social />      
    </div>
  )
}
