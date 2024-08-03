import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const list = [
        {name:'Dashboard',path:'/'},
        {name:'Rockets',path:'/rockets'},
    ]
  return (
   <>
   <div className=" pb-5 pt-4 px-md-5 px-sm-3 px-3 align-items-center justify-content-between d-lg-none d-flex">
      <img src="/assets/logo-white.JPG" alt="" className='img-fluid' />
      <i className="bi bi-list icon-bold font-40 text-white cursor-pointer" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>
   </div>
   {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}

<div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <img src="/assets/logo-black.JPG" alt="" />
    <button type="button" className="btn-close text-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  <div>
            <ul className='list_style_none ps-0 pt-5'>
              {list.map((val,index)=>{
                return <>
                  <li className='' key={index}><NavLink className="py-2 font-25" to={val.path}>{val.name}</NavLink></li>
                </>
              })}
            </ul>
        </div>
  </div>
</div>
   </>
  )
}

export default Header
