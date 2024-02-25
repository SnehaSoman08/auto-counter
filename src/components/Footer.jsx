import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div className='fixed-bottom'>
      <MDBFooter className='bg-dark text-center text-white'>
    

      <div className='text-center p-3' style={{backgroundColor:"rgb(114, 80, 114)"}} >
        © 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          Counterapp2.0.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer