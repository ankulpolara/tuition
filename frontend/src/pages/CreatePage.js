import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const CreatePage = () => {
    const [name, setname] = useState("");
    const [content, setcontent] = useState("");




    let navigate = useNavigate();

    let submitHandler = async () => {
        let data = { name, content }
        let response = await axios.post("http://127.0.0.1:4000/api/v1/create-page", data);
        console.log(response.data.response._id);
        navigate(`/pages/${response.data.response._id}`)
    }
    return (
        <div className='flex w-1/2 flex-col'>
            <label htmlFor="">
                <div>
                    Name
                </div>
                <input type="text" className='bg-white border-blue-400 border-2 '
                    value={name}
                    onChange={(e) => setname(e.target.value)} />
            </label>
            <label htmlFor="">
                <div>
                    content
                </div>
                <input type="text" className='bg-white border-blue-400 border-2'
                    value={content}
                    onChange={(e) => setcontent(e.target.value)} />
            </label>
            <button onClick={submitHandler}>
                submit
            </button>
        </div>
    )
}
