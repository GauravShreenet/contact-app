import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserDetail = ({ user }) => {
  if (!user) {
    return <div className='text-blue-400 flex justify-center items-center text-2xl h-full'>
      <span className='mr-5 text-5xl'><FontAwesomeIcon icon="fa-regular fa-address-card" /></span>
        Select a user to view details.
      </div>
  }

  return (
    <div className='bg-white p-6 rounded-lg shadow-md'>
      <div className='flex justify-center items-center mb-5'>
        <div>
          <div className='flex justify-center items-center'>
            <div className="w-24 h-24 bg-slate-400 rounded-full flex items-center justify-center text-white font-bold text-4xl">
              {user.name
                .split(' ')
                .map((n) => n[0])
                .join('')
              }
            </div>
          </div>
          <h2 className='text-3xl text-center font-semibold mt-2'>{user.name}</h2>
          <div className='text-sm font-normal text-zinc-400'>{user.company.name}, {user.company.bs}</div>
        </div>
      </div>

      <hr className="border-t-2 border-gray-300 mb-5" />

      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5'>
        <div className='text-md 2xl:text-2xl mb-8 flex'>
          <span className='mr-5 text-blue-400'><FontAwesomeIcon icon="fa-solid fa-at" /></span>
          <div>
            <p className='mb-[-1vh]'>{user.username}</p>
            <p><span className='text-xs font-normal text-neutral-400 uppercase'>username</span></p>
          </div>
        </div>
        <div className='text-md 2xl:text-2xl mb-8 flex'>
          <span className='mr-5 text-blue-400'><FontAwesomeIcon icon="fa-solid fa-envelope" /></span>
          <div>
            <p className='mb-[-1vh]'>{user.email}</p>
            <p><span className='text-xs font-normal text-neutral-400 uppercase'>work</span></p>
          </div>
        </div>
        <div className='text-md 2xl:text-2xl mb-8 flex'>
          <span className='mr-5 text-blue-400'><FontAwesomeIcon icon="fa-solid fa-phone" /></span>
          <div>
            <p className='mb-[-1vh]'>{user.phone}</p>
            <p><span className='text-xs font-normal text-neutral-400 uppercase ms-1'>work</span></p>
          </div>
        </div>
        <div className='text-md 2xl:text-2xl mb-8 flex'>
          <span className='mr-6 text-blue-400'><FontAwesomeIcon icon="fa-solid fa-globe" /></span>
          <a href={`http://${user.website}`} target='_blank' rel="noopner noreferrer">
            <div>
              <p className='mb-[-1vh] text-blue-500 hover:underline'>{user.website}</p>
              <p><span className='text-xs font-normal text-neutral-400 uppercase'>portfolio</span></p>
            </div>
          </a>
        </div>
        <div className='text-md 2xl:text-2xl mb-8 flex'>
          <span className='mr-5 text-blue-400'><FontAwesomeIcon icon="fa-solid fa-building" /></span>
          <div>
            <p className='mb-[-1vh]'>{user.company.name}</p>
            <p><span className='text-xs font-normal text-neutral-400 uppercase ms-1'>company</span></p>
          </div>
        </div>
        <div className='text-md 2xl:text-2xl mb-8 flex'>
          <span className='mr-5 text-blue-400'><FontAwesomeIcon icon="fa-solid fa-map-pin" /></span>
          <div>
            <p className='mb-[-1vh]'>{`${user.address.suite} ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
            <p><span className='text-xs font-normal text-neutral-400 uppercase'>home</span></p>
          </div>
        </div>

        <div className='flex items-center text-md 2xl:text-2xl'>
          <span className='mr-[1.5vh] text-blue-400'><FontAwesomeIcon icon="fa-solid fa-user-group"/></span>
          <div>
            <div>Workspace</div>
            <div className='text-sm font-normal text-zinc-400'>Not currently shared with any workspaces</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetail