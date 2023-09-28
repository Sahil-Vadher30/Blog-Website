import React from 'react'
import './Write.css'
import './Responsive.css'

export default function Write() {
  return (
    <div className='write'>
        <img className='writeImg'
            src="https://source.unsplash.com/random/?latest-blog" 
            alt="" 
        />
        <form action="" className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i class="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:'none'}}/>
                <input type="text" 
                    className='writeInput'
                    placeholder='Titel'
                    autoFocus={true}
                />
            </div>

            <div className="writeFormGroup">
                <textarea 
                    className='writeText writeInput'
                    type='text'
                    placeholder='Tell your story'
                ></textarea>
            </div>

            <button type="submit" className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}
