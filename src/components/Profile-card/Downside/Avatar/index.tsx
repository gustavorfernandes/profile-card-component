import style from './Avatar.module.scss';
import profilePhoto from '../../../../assets/images/image-victor.jpg'

export default function Avatar() {
  return (
    <img className={style.Avatar} src={profilePhoto} alt="Profile"/>    
  )
}