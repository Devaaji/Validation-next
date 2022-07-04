import { useRouter } from 'next/router';
import React from 'react'
import DashboardHomeGuest from '../../components/DashboardHomeGuest';
import DahsboardTableRow from '../../components/DashboardTableRow';
import useRemoteAllUsers from '../../hooks/remote/useRemoteAllUser';
import useRemoteProfile from '../../hooks/remote/useRemoteProfile';
import useAuthAdmin from '../../hooks/useAuthAdmin'
import useUserStore from '../../store/useUserStore';

const AdminPage = () => {
  const router = useRouter();

  const { data } = useRemoteProfile();
  const { data: newData } = useRemoteAllUsers();

  const removeUser = useUserStore((state) => state.removeUser)

  const handleButton = () => {
    if (typeof window !== "undefined") {
      removeUser()
      router.push('/login');
    }
  }


  useAuthAdmin()
  return (
    <>
      {data ? (
        <div className="container d-flex justify-content-center">
          <div className="row col-md-10 col-md-offset-2 custyle">
            <div className="border border-2 mt-5 d-flex justify-content-between align-items-center">
              <div>
                <h4>Dashboard Admin</h4>
              </div>
              <button className="btn btn-danger follow m-3" onClick={handleButton}>Logout</button>
            </div>
            <table className="table table-striped custab mt-1">
              <thead>
                <tr>
                  <th>No</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Role</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {newData?.data.map((user, index) => (
                  <tr key={index}>
                    <td >{index + 1}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.isVerified === true ? <span className='fw-bold'>Sudah Approved</span> : 'Belum Approved'}</td>
                    <td>{user.role === '1' ? 'Admin' : 'User'}</td>
                    <td className="text-center">
                      <DahsboardTableRow
                        id={user._id}
                        role={user.role}
                        isVerified={user.isVerified}
                      />
                    </td>
                  </tr>
                ))}

              </tbody></table>
          </div>
        </div>
      ) :
        <DashboardHomeGuest />
      }
    </>
  )
}

export default AdminPage