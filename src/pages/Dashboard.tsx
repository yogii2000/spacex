import React, { useEffect, useState } from 'react'
import { CommonLayout } from '../layouts/CommonLayout'
import DashboardCard from '../components/DashboardCard'
import api from '../utils/api'
import { Flight } from '../types/launch'
import { LaunchFacilities } from '../components/LaunchFacilities'
import Starlink from '../components/Starlink'

const Dashboard: React.FC = () => {
  const [upcomingLaunch, setUpcomingLaunch] = useState<Flight | null>(null);
  const [previousLaunch, setPreviousLaunch] = useState<Flight | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchupcomingLaunch = () => {
      api.get('/launches/next').then((response) => {
        console.log(response.data)
        setUpcomingLaunch(response.data)
        // setLoading(false);
      }).catch((error) => {
        console.error('Error fetching flight data:', error);
        // setLoading(false);
      })
    }
    const fetchPreviousLaunch = () => {
      api.get('/launches/109').then((response) => {
        console.log(response.data)
        setPreviousLaunch(response.data)
        // setLoading(false);
      }).catch((error) => {
        console.error('Error fetching flight data:', error);
        // setLoading(false);
      })
    }

    fetchupcomingLaunch()
    fetchPreviousLaunch()
  }, [])
  return (
    <>
      <CommonLayout>
        <div className="container-fluid  w-100 ">
          <div className="row mx-lg-3  justify-content-center">
            <div className="col-lg-11">
              <div className="row ">
                <div className="col-lg-6 col-md-6">
                  {upcomingLaunch && <> <DashboardCard title="Upcoming launches" flight={upcomingLaunch} /></>}
                  {previousLaunch && <> <DashboardCard title="Previous launches" flight={previousLaunch} /></>}
                </div>
                <div className="col-lg-6 col-md-6">
                  <LaunchFacilities />
                  <Starlink />
                </div>
              </div>
            </div>
          </div>


        </div>
      </CommonLayout>
    </>
  )
}

export default Dashboard
