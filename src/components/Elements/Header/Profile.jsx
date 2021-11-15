import React from 'react'
import s from './Header.module.scss'

const Profile = () => {
   return (
      <div className={s['profile-wrapper']}>
         <div className={s.notification}>
            <i className='bx bxs-bell'></i>
            <span></span>
         </div>
         <div className={s.profile}>
            <div>
               <img src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/28/14/avatar.jpg?width=50'
                  alt="" />
            </div>
            <i className='bx bx-caret-down'></i>
         </div>
      </div>
   )
}

export default Profile
