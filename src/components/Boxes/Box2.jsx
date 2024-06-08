import React from 'react'
const profileImage = '/images/profileImage.png'; 

const Box2 = () => {
    return (
        <div className="box1 box2 ">
            <div className='flex-row '>
               <div className='box-userprofile flex-row'>
                  <div className='box-profileImage'><img src={profileImage} alt="" /></div>
                  <div className='box-userInfo '>
                     <div className='box-username'> Neha Bhatt (You)</div>
                     <div>27 Jun,2023</div>
                  </div>
               </div>
               <div className='flex-row'>
               <i class='bx bxs-edit-alt' ></i>Edit
               </div>
            </div>
            <div>
                <p className='p'>
                Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum enim ornare feugi vitae. Eget proin aliquam blandit eget vitae erat fermentum lacus. Dignissim done mi vel fermentum. Id ultrices risus sit pel sit elit morbi. Mi sed mauris aenean odio egestas ullamcorper. Dignissim in vel fusce id. Sit blandit diam ridiculus ipsum interdum ut velit quam. Bibendum amet mi.... Show more  </p>

            </div>
          


            <div className="comment-box ">
                <div><i class='bx bx-like'></i>Like</div>
                <div><i class='bx bx-comment-dots'></i></div>
                <div> <input type="text" placeholder='Add a comment'  /></div> 
                <button type='submit'>Post</button>
            </div>

        </div>
    )
}

export default Box2
