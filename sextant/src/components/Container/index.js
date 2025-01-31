import React from 'react';
import Ip from '../IP';


function Container () {
  return (
    <div className='d-flex flex-column'>
      <h2>Network Information</h2>
      <div className='d-flex justify-content-around m-3'>
        <Ip></Ip>

        <div className='pylon-card p-3 bg-info bg-opacity-10 border border-info border rounded shadow'>
          <div className='card-body'>
            This is a sample of the latency information for Pylon
          </div>
        </div>
      </div>
    </div>
  )
}
export default Container;