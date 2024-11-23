import './App.css'
import Users from './component/Users'
import UserDetail from './component/UserDetail'
import { useEffect, useState } from 'react'
import { fetchUsers } from './helper/axiosHelper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {

  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)

  useEffect(() => {
    const getUsers = async() => {
      try {
        const userData = await fetchUsers();
        setUsers(userData);
      } catch (error) {
        console.error('Failed to load users:', error)
      }
    }
    getUsers()
  }, [])

  return (
    <>
      <h1 className='text-4xl font-medium text-white bg-blue-400  flex justify-center items-center py-5'><FontAwesomeIcon icon="fa-solid fa-circle-user" style={{marginRight: '1.25vh', fontSize: '5vh'}} />Contact App</h1>
      <hr className="border-t-2 border-blue-400" />
      <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 md:gap-5 px-8 py-3 h-[100svh]'>
        {/* User List */}
          <div className='w-full border-r-0 md:col-span-2 lg:col-span-1 border-s-0 border-t-0 border-b-0 md:border-r-4 md:pr-8 py-8'>
            <Users users={users} setSelectedUser={setSelectedUser} selectedUser={selectedUser} />
          </div>
          {/* User Detail - Hidden in Mobile View */}
        <div className='md:col-span-3 hidden md:block'>
          <UserDetail user={selectedUser} />
        </div>

      </div>
    </>
  )
}

export default App
