import { useRouter } from 'next/router';
import DashboardHomeGuest from '../components/DashboardHomeGuest';
import useRemoteProfile from '../hooks/remote/useRemoteProfile'

export default function Home() {
  const router = useRouter();
  const { data: newProfile } = useRemoteProfile();

  const handleButton = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem('user');
      router.push('/login');
    }
  }

  const handelAdmin = () => {
    router.push('/admin');
  }

  return (
    <>
      {newProfile ? (
        <div className="container d-flex justify-content-center align-items-center mt-5 bg-">
          <div className="card py-4">
            <div className="d-flex justify-content-center align-items-center">
              <div className="round-image">
                <img src={newProfile?.data.photoProfile} className="rounded-circle" width={97} />
              </div>
            </div>
            <div className="text-center">
              <h4 className="mt-3">Selamat Datang {newProfile?.data.role === '1' ? 'Admin' : 'User'}</h4>
              <span>First Name : {newProfile?.data.firstname}</span>
              <br />
              <span>Last Name : {newProfile?.data.lastname}</span>
              <br />
              <span>Email Address: {newProfile?.data.email}</span>
              <div className="px-5 mt-3">
                <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <button className="btn btn-danger follow" onClick={handleButton}>Logout</button>
                {newProfile?.data.role === '1' && <button className="btn btn-success follow ms-3" onClick={handelAdmin}>Admin</button>}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <DashboardHomeGuest/>
      )}
    </>
  )
}
