import React, { useState } from 'react'

export const LaunchFacilities = () => {
    const [viewmore,setviewMore] = useState(false)
    const cards = [1,2,3]
  return (
   <>
   <div className="dashboard-card p-4 mb-4">
   <h1 className='text-white font-18 mb-3 fw-600'>Launch facilities</h1>
   {cards.map((val,index)=>{
    return <> 
    {
      (index < 2 || viewmore) ?    <div className='facilities-card mb-3 p-3' key={index}>
        <div className="fade-facility"></div>
        <div className="d-flex justify-content-between pos-relative z-max">
            <div>
            <h2 className='font-17 text-white fw-600 mb-0'>Cape Canaveral</h2>
            <p className='text-small  fade-white lh-16 fw-600 mb-1'>LC-39A & SLC-40</p>
            </div>
            <div className='text-end'>
            <h2 className=' uppercase text-small fw-600 mb-0 fade-white'>Region</h2>
            <p className='font-17 text-white fw-600 lh-16 mb-1'>Florida</p>
            </div>
        </div>
        <div className="d-flex justify-content-between pos-relative z-max">
            <div>
            <h2 className=' uppercase text-small mb-0 fade-white fw-600'>Temp</h2>
            <p className='font-17 text-white fw-600 lh-16 '>25°C</p>
            </div>
            <div className='text-center'>
            <h2 className=' uppercase text-small mb-0 fw-600 fade-white'>Weather</h2>
            <p className='font-17 text-white fw-600 lh-16 '>Mist</p>
            </div>
            <div className='text-end'>
            <h2 className=' uppercase text-small fw-600 mb-0 fade-white'>Wind</h2>
            <p className='font-17 text-white fw-600 lh-16 '>3 m/s</p>
            </div>
        </div>
    </div> : ''
    }
      
    </>
   })}
      <div className='text-white cursor-pointer d-flex fw-600' onClick={()=>{setviewMore(!viewmore)}}> <span className="bg-white rounded-circle text-center  me-1 icon-bg"><i className={`bi bi-chevron-${!viewmore ? 'down' : 'up'} icon-bold font-14  text-black`}> </i></span> <span>{viewmore ? 'Less' : 'More'}</span></div>
   </div>

   </>
  )
}
