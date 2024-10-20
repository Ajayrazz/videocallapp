import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const HomePage = () => {

    //usestate for taking input
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = () => {
        navigate('/room/${input}');
    }

  return (
    <div>
        <div>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter your name..' />
            <button onClick={submitHandler}>Join</button>
        </div>
    </div>
  )
}
