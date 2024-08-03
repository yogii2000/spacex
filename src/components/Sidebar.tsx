
import React from 'react'

import { NavLink } from 'react-router-dom'
const Sidebar = () => {
    const list = [
        {name:'Dashboard',path:'/'},
        {name:'Rockets',path:'/rockets'},
    ]
  return (
    <div className='bg-white sidebar d-none d-lg-block p-4'>
        <div className='pt-5'>
        <img src="/assets/logo-black.JPG" alt="" />
        </div>
        <div>
            <ul className='list_style_none ps-0 pt-5'>
              {list.map((val,index)=>{
                return <>
                  <li className=''><NavLink className="py-2 font-25" to={val.path}>{val.name}</NavLink></li>
                </>
              })}
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
