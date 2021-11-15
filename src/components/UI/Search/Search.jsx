import React from 'react'

import s from './Search.module.scss'
const Search = () => {
   return (
      <div className={s.search}>
         <div>
            <i className='bx bx-search-alt'></i>
            <input type="text" placeholder='I`m searching for...'/>
         </div>
         <i className='bx bx-customize'></i>
      </div>
   )
}

export default Search
