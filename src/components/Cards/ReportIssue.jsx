import React, { useState } from 'react'
import Popup from '../Cards/Popup'
import { useAuth } from '../../Context/AuthContext';

const ReportIssue = ({ setCardOpen,setfeedbackOpen,setSelectedCard}) => {
  const { auth } = useAuth();


    const [textContent,setTextContent]=useState('')
    const [popupOpen, setPopupOpen] = useState(false);
    const handleSubmit=(e)=>{

      setPopupOpen(true);
      setTimeout(() => {
          setPopupOpen(false)
          setCardOpen(false)
          setfeedbackOpen(false)
          setSelectedCard('')
      }, 100000);
  }
  

  if(popupOpen){
    return (
        <div className='notification-box'>
        <Popup message={`Thanks for bringing the issue to our attention.We'll review it shortly and provide an update soon!`}/>
      </div>
    )
}

   
  return (
    <div className='report-issue'>
         <h4>Let us know about the <span>Issue</span> you are facing right now!</h4>

           <div className="line"></div>

         <form action="" className='flex-col' onSubmit={handleSubmit}>
            <label htmlFor="">Choose a Section</label>
            <select name="section" id="section" className='section'>
                <option value="">Interview Questions</option>
            </select>

            <label htmlFor="">Describe the issue in detail <sub>*</sub></label>
            <textarea name="issue" id="issue" cols="30" rows="5" required placeholder='Write here...' onChange={(e)=>setTextContent(e.target.value)}></textarea>


            <label htmlFor="file-input" className="attach-button">
                <span>Attach</span>
                <input
                    type="file"
                    id="file-input"
                    name="file"
                  
                />
            </label>

            {auth ? (null):(
            <div className=' loggedout'>
              <label htmlFor="">Enter your email to receive an update<sub>*</sub></label>
              <input type="email"  placeholder='Enter your Email' required/>
            </div>
            )}
            <div><button type='submit' className={`${textContent.length>0?'button-enabled':'button-disabled'}`} >Submit</button></div>
         </form>
    </div>
  )
}

export default ReportIssue
