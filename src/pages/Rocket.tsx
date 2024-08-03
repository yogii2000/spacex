import React, { useState } from 'react'
import { CommonLayout } from '../layouts/CommonLayout'
import { Carousel } from '../components/Carousel'

export const Rocket = () => {
  const [activeTab,setActiveTab] = useState(true)
  const count = [1,2,3]
  return (
    <>
    <CommonLayout>
    <div className="container-fluid  w-100 ">
      <div className="row mx-lg-3  justify-content-center">
      <div className="col-lg-11">
      <div className="row ">
        <div className="col-lg-12">
          <div className="dashboard-card p-4">
            <div className="row ">
              {
                count.map((val,index)=>{
                  return <>
                          <div className="col-lg-4 mb-3 col-md-4" key={index}>
               <div>
                <h1 className='font-18 text-white fw-600'>Falcon 9</h1>
                <div className='rocket-section pos-relative' data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="fade-rocket"></div>
                <img src="https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg" height={335} className='w-100 object-cover' alt="" />
                <div className='status-card'>
                  <h3 className='fade-white mb-0 text-small uppercase fw-600'>Status</h3>
                  <p className='font-17 mb-0 text-white fw-600 lh-16'>Active</p>
                </div>
                </div>
               </div>
              </div>
                  </>
                })
              }
            </div>
          </div>
        </div>
        </div>
</div>
      </div>
 
      
     </div>

<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content br-20">
      <div className="modal-header d-none">
      </div>
      <div className="modal-body br-20 bg-grey p-md-5 p-4">
        <div className="d-flex mb-4 justify-content-between">
          <div className='d-flex gap-3 align-items-center'>
           <h1 className='font-25 mb-0 fw-600'>Falcon 9</h1>
           <span className={`font-25 ${activeTab ? 'fw-600' : ''} cursor-pointer font-sm-16`} onClick={()=>setActiveTab(true)}>Overview</span>
           <span className={`font-25 ${!activeTab ? 'fw-600' : ''} cursor-pointer font-sm-16`}  onClick={()=>setActiveTab(false)}>Photos</span>
          </div>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        {
          activeTab ?    <div className="row">
          <div className="col-lg-3 col-md-3">
           <div className='modal-image'>
            <img src="https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg" height={335} className='w-100 object-cover' alt="" />
           </div>
          </div>
          <div className="col-lg-9 col-md-9">
              <div className="bg-white box-shadow h-100 p-4 br-10 ">
                  <h2 className='text-grey uppercase text-small fw-600'>description</h2>
  <p className='font-14'>Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.</p>
              </div>
            </div>
        </div> : <Carousel/>
        }
     
      </div>
      <div className="modal-footer d-none">
      </div>
    </div>
  </div>
</div>
    </CommonLayout>
    </>
  )
}
