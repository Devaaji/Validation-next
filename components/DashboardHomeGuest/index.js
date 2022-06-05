import { useRouter } from 'next/router';
import React from 'react'


const DashboardHomeGuest = () => {
  const router = useRouter();

  const handleButton = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem('user');
      router.push('/login');
    }
  }


  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="card py-4">
        <div className="text-center">
          <div className="px-5">
            <p className="content">Silahkan Login Terlebih dahulu</p>
            <button className="btn btn-success follow" onClick={handleButton}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHomeGuest