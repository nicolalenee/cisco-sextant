import React from 'react';

const Ip = () => {
  async function getIP(){
    const response = await fetch('http://api64.ipify.org/?format=json');
    const info = await response.json();
    return info;
}
    getIP().then(info => console.log(info));

  return (
    <div className='ip-card p-3 bg-info bg-opacity-10 border border-info border rounded shadow'>
      <div className='card-body'>
      {getIP()}
      </div>
  </div>
  )
}
export default Ip;