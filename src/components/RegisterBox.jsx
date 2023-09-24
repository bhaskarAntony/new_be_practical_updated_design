import React, { useState } from 'react'
import '../styles/register_card.css'

function RegisterBox() {
    const [isopen, setIsopen] = useState(true)

  return (
    <div className='register-card'>
        <div className="reagister-card-header">
            <p>Drop a Querry here..</p>
        </div>
        <div className="register-card-body">

        </div>
    </div>
  )
}

export default RegisterBox
