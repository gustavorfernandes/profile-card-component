import React from 'react';
import ProfileCard from '../components/Profile-card';
import style from './App.module.scss';

export default function App() {
  return (
    <div className={style.AppStyle}>
      <div className={style.BgTop}></div>
      <ProfileCard />
      <div className={style.BgBottom}></div>   
    </div>
  );
}
