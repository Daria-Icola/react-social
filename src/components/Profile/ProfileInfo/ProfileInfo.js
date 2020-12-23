import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

    return (
      <div>
        {/* <div>
          <img 
            src="https://preview.redd.it/kv0w9c93t1751.png?width=926&format=png&auto=webp&s=e2736045ecb2c159c841f402cd2e42e5037d600e"></img>
        </div> */}
        <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large} />
          <div>{props.profile.aboutMe}</div>
          <ProfileStatus status={props.status} updateStatus ={props.updateStatus}/>
        </div>
      </div>
    )
}

export default ProfileInfo;