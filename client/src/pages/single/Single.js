import React from 'react'
import './Single.css'
import './Responsive.css'
import SideBar from '../../components/sidebar/SideBar'
import SinglePost from '../../components/singlepost/SinglePost'

export default function Single() {
  return (
    <div className='single'>
        {/* post */}
        <SinglePost/>
        {/* sidebar */}
        <SideBar/>
    </div>
  )
}
