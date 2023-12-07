import React from 'react'
import './Content1.css'
import Notifications from '@mui/icons-material/Notifications';
import Message from '@mui/icons-material/Message';
function Content1() {
  return (
    <div className='container'>
        <div className='left'>
            <img id='dragon' src='https://cdn.dribbble.com/users/2248943/screenshots/9176243/logo-background-black.png'></img>
            <input type='text' placeholder='Search'>
            </input>   
            <div className='icons'>
               <Notifications className='icons1'/>
               <Message  className='icons2'/>
               <img src='https://img.icons8.com/?size=64&id=tZuAOUGm9AuS&format=png'></img>
                </div>       
        </div>
    </div>
  )
}

export default Content1