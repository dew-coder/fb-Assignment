import React, { useState } from 'react'
import Popup from '../Cards/Popup'
import { useAuth } from '../../Context/AuthContext';

const Suggestion = ({ setCardOpen,setfeedbackOpen,setSelectedCard}) => {
    const [textContent,setTextContent]=useState('')
    const [popupOpen, setPopupOpen] = useState(false);
    const { auth } = useAuth();

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
            <Popup message={`Thanks for your valuable Suggestion!`}/>
          </div>
        )
    }

    
  return (
<div className='report-issue suggestion box'>
         <h4>Share your <span>Suggestions</span> with us for a chance to earn rewards!</h4>

         <div className="line"></div>

         <form action="" className='flex-col' onSubmit={handleSubmit}>
            <label htmlFor="">Choose a Section</label>
            <select name="section" id="section" className='section'>
                <option value="">Select</option>
            </select>

            <label htmlFor="" >Describe the suggestion in detail<sub>*</sub></label>
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

export default Suggestion
