import React from 'react'
import {Flight} from '../types/launch'
import moment from 'moment';

interface MyComponentProps {
  flight: Flight;
  title:String
}

const DashboardCard:React.FC<MyComponentProps> = ({flight,title}) => {
  console.log(flight)
  return (
   <>
     <div className="dashboard-card p-4 mb-4">
     <h1 className='text-white font-18 mb-3 fw-600'>{title}</h1>
          <div className="d-flex gap-4">
            <div>
                <h2 className='text-small mb-0 fade-white uppercase'>mission name</h2>
                <p className='font-17 text-white fw-600 lh-16'>{flight.mission_name}</p>
                <h2 className='text-small mb-0 fade-white uppercase'>Rocket</h2>
                <p className='font-17 text-white fw-600 lh-16'>{flight.rocket.rocket_name}</p>
                <h2 className='text-small mb-0 fade-white uppercase'>flight number</h2>
                <p className='font-17 text-white fw-600 lh-16'>{flight.flight_number}</p>
                <h2 className='text-small mb-0 fade-white uppercase'>TIME (UTC)</h2>
                <p className='font-17 text-white fw-600 lh-16'>{moment(flight.launch_date_utc).format('MMM DD, hh:mm A')}</p>
                <h2 className='text-small mb-0 fade-white uppercase'>Links</h2>
            </div>
            <div>
            <h2 className='text-small fade-white uppercase'>Rocket logo</h2>
              <div className="rocket-img p-3">
                <img src={flight.links.mission_patch} className='img-fluid ' alt="" />
              </div>
              <h2 className='text-small fade-white uppercase mt-4'>Launch Pad</h2>
              <p className='font-17 text-white fw-600 lh-16'>{flight.launch_site.site_name}</p>
            </div>
          </div>
     </div>
   </>
  )
}

export default DashboardCard
