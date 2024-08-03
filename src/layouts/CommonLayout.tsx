import React, { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

interface LayoutProps {
  children: ReactNode;
}

export const CommonLayout:React.FC<LayoutProps> = ({children}) => {
  return (
     <>
     <div className="bg-grey h-screen">
        <div className="d-flex h-100 py-xxl-5 justify-content-center">
            <div className="main-content">
                <div className="d-flex h-100">
                <Sidebar/>
                <div className='bg-night overflow-auto w-100 h-100'>
                <Header/>
                {children}
                </div>
                </div>
            </div>
        </div>
     </div>
     </>
  )
}
