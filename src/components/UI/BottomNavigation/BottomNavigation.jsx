import React from 'react'
import s from './BottomNavigation.module.scss'

const tabs = [
   {
      _id: 1,
      name: 'Overview'
   },
   {
      _id: 2,
      name: 'Episodes'
   },
   {
      _id: 3,
      name: 'Details'
   }
]

const BottomNavigation = ({ activeTab, setActiveTab }) => {
   return (
      <nav className={s.nav}>
         {tabs.map(tab =>
            <button
               key={tab._id}
               onClick={setActiveTab(tab._id)}
               className={activeTab === tab._id ? s.active : ''}
            >
               {tab.name}
            </button>
         )}
      </nav>
   )
}

export default BottomNavigation
