import React, { useState } from 'react'
import { useAuth } from '../../Context/AuthContext';
import Popup from '../Cards/Popup'
import Rating from '../Cards/Rating'

const Sharefeedback = ({ setCardOpen,setfeedbackOpen,setSelectedCard}) => {
  const { auth } = useAuth();
  const [textContent, setTextContent] = useState('')
  const [popupOpen, setPopupOpen] = useState(false);
  const handleSubmit=(e)=>{

    setPopupOpen(true);
    setTimeout(() => {
        setPopupOpen(false)
        setCardOpen(false)
        setfeedbackOpen(false)
        setSelectedCard('')
    }, 4000);
}


if(popupOpen){
  return (
      <div className='notification-box'>
      <Popup message={`Thanks for your valuable feedback!`}/>
      <Rating/>
    </div>
  )
}


  return (
    <div className='feedbackbox'>


      <h4>Let us know your <span>Feedback</span> about us!</h4>
      <div className="line"></div>
      <form action="" onSubmit={handleSubmit}>

        <textarea name="issue" id="issue" cols="30" rows="8" required placeholder='Write here...' onChange={(e) => setTextContent(e.target.value)}></textarea>
        <label htmlFor="file-input" className="attach-button">
          <span>Attach</span>
          <input
            type="file"
            id="file-input"
            name="file"

          />
        </label>
        <div>
          <input type="checkbox" value='' />
          <label for="demoCheckbox">Send feedback anonymously </label>
        </div>

        {auth ? (null):(
            <div className=' loggedout'>
              <label htmlFor="">Enter your email to receive an update<sub>*</sub></label>
              <input type='email'  placeholder='Enter your Email' required/>
            </div>
            )}
        <div className='button-at-end'><button type='submit' className={`${textContent.length > 0 ? 'button-enabled' : 'button-disabled'}`} >Submit</button></div>


      </form>
    </div>
  )
}

export default Sharefeedback
