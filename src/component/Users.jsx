import React from 'react'
import UserDetail from './UserDetail'

const Users = ({ users, setSelectedUser, selectedUser }) => {
  return (
    <div className='space-y-1'>
      {users.map((user) => (
        <div key={user.id} className='space-y-1'>
          <button
            onClick={() => setSelectedUser(selectedUser?.id === user.id ? null : user)}
            className={`flex w-full items-center p-3 rounded-lg ${selectedUser?.id === user.id ? 'border-2 border-blue-400' : 'hover:border-2 border-blue-200'
              }`}
          >
            <div className="w-10 h-10 bg-slate-400 rounded-full flex items-center justify-center text-white font-bold text-2xl">
              {user.name
                .split(' ')
                .map((n) => n[0])
                .join('')
              }
            </div>

            <div className='px-5 flex items-center justify-center'>
              <div>
                <div className='text-lg font-medium'>{user.name}</div>
                <div className='text-sm font-normal text-zinc-400'>{user.company.name}, {user.company.bs}</div>
              </div>
            </div>

          </button>

          {/* User Detail in Mobile View - Only Visible When a User is Selected */}
          {
            selectedUser?.id === user.id && (
              <div className='mt-3 md:hidden'>
              <UserDetail user={selectedUser} />
            </div>
            ) 
          }  
        </div>
      ))}
    </div>
  )
}

export default Users