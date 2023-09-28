import React, { useContext, useState } from 'react'
import './Write.css'
import './Responsive.css'
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const newPost = {
            username: user.username,
            title,
            desc,
        };

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
              await axios.post("http://localhost:5000/api/upload", data);
            } catch (err) {}
          }
          try {
            const res = await axios.post("http://localhost:5000/api/posts", newPost);
            window.location.replace("/Blog-Website/post/" + res.data._id);
          } catch (err) {}
    }

  return (
    <div className='write'>
        { file && (
            <img className='writeImg'
                 src={ URL.createObjectURL(file) } 
                 alt="" />
            )
        }
        <form action="" className="writeForm" onSubmit={handleSubmit} >
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i class="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:'none'}} onChange={ (e) => setFile(e.target.files[0]) } />
                <input type="text" 
                    className='writeInput'
                    placeholder='Titel'
                    autoFocus={true}
                    onChange={ e => setTitle(e.target.value) }
                />
            </div>

            <div className="writeFormGroup">
                <textarea 
                    className='writeText writeInput'
                    type='text'
                    placeholder='Tell your story'
                    onChange={ e => setDesc(e.target.value) }
                ></textarea>
            </div>

            <button type="submit" className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}
