import React from 'react';
import '../../css/rentalworks.css';
import divBg from '../../media/rentalworks.mp4';

const Rentalworks = () => {
  return (
    <div className='mainwrks'>
      <div className='overlaywrks'></div>
      <div>
      <div className='bannerwrks'><video className='vidwrks' src={divBg} autoPlay loop muted /></div>
        <div className='contentwrks'>
          <div className='titlewrks'><h2>HOW DOES THE<br/>RENTCAR RENTAL WORKS</h2></div>
          <div className='contentawrks'>
              <div className='contentimgwrks'>
                <div><img src='https://autostar.templines.org/wp-content/uploads/2018/12/steps01.png' alt=''/></div>
              </div>
              <div className='contentpwrks'>
                <div><p className='pwrks'>Once selected, Book<br/>our auto and set a<br/>pickup date / time</p></div>
              </div>
          </div>
          <div className='contentawrks'>
              <div className='contentimgwrks'>
                <div><img src='https://autostar.templines.org/wp-content/uploads/2018/12/steps02.png' alt=''/></div>
              </div>
              <div className='contentpwrks'>
                <div><p className='pwrks'>Once selected, Book<br/>our auto and set a<br/>pickup date / time</p></div>
              </div>
          </div>
          <div className='contentawrks'>
              <div className='contentimgwrks'>
                <div><img src='https://autostar.templines.org/wp-content/uploads/2018/12/steps03.png' alt=''/></div>
              </div>
              <div className='contentpwrks'>
                <div><p className='pwrks'>Once selected, Book<br/>our auto and set a<br/>pickup date / time</p></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rentalworks