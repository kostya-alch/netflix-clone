import React from 'react'
import s from './Sidebar.module.scss'

const menu = [
   'Popular', 'TV Shows', 'Films', 'My list'
]
const Sidebar = ({ isSidebarShow, setIsSidebarShow }) => {
   return (
      <div className={s.sidebar} style={{ width: isSidebarShow ? `15%` : `10%` }}>
         <button>
            <i className={`bx bx-${isSidebarShow ? 'x' : 'border-left'}`}
               onClick={() => setIsSidebarShow(!isSidebarShow)} style={{ cursor: 'pointer' }}
            ></i>
         </button>
         <ul className={isSidebarShow ? s.show : ''}>
            {menu.map(title =>
               <li key={title}>
                  <a href={title}>{title}</a>
               </li>
            )}
         </ul>
      </div>
   )
}

export default Sidebar
