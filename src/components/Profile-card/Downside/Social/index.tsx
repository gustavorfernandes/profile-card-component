import style from './Social.module.scss';

export default function Social() {
  return (
    <div className={style.Social}>
      <div className={style.Followers}>
        <h2>80K</h2>
        <h3>Followers</h3>
      </div>
      <div>
        <h2>803K</h2>
        <h3>Likes</h3>
      </div>
      <div className={style.Photos}>
        <h2>1.4K</h2>
        <h3>Photos</h3>
      </div>
    </div>
  )
}