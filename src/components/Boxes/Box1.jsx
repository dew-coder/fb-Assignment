import React from 'react';
const companytype = '/images/companytype.png';
const eye = '/images/eye.png'; // Import the eye image

const Box1 = () => {
  return (
    <div className="box1">
      <div className='flex-row'>
        <div className='flex-row'>
          <div className='design'>Design</div>
          <div className='design'> Technology</div>
        </div>
        <div className='companytype'>
          <img src={companytype} alt="company type" />
        </div>
      </div>
      <div>
        <p className='p1'>
          A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup? 
        </p>
        <p className='p2'>
          Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec viverra tincidunt? Amet ullamcorper velit tristique scelerisque donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna cursus se? 
        </p>
      </div>
      <div className='flex-row box1-low mt-3 '>
        <p className='flex-row items-center'>
          <img src={eye} alt="eye" className=' w-5 h-3 ' />
          100 views
        </p>
        <p className='flex-row'>
          <i className='bx bx-info-circle'></i> How should you word your answer?
        </p>
      </div>
    </div>
  );
}

export default Box1;
