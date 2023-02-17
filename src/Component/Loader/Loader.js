import React from 'react'
import './Loader.css'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
function Loader() {
  return (
    <div className='Loader'>
 <ClimbingBoxLoader
        color={'#4db5ff'}
        size={30}
      />
    </div>
  )
}

export default Loader