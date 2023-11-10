'use client'
import { useState } from "react";
export default function Login() {

    const [title,setTitle] = useState("")
    const [section,setSection] = useState("")
    const [body,setBody] = useState("")
    const [err,setErr] = useState([])
    const [success,setSuccess] = useState(false)

    const handleSubmit=async(e:any)=>{
        e.preventDefault()
        const res = await fetch('api/blogs',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({title,section,body})
        })

        const {msg,success} = await res.json()
        setErr(msg)
        setSuccess(success)
        if(success){
            setTitle("")
            setSection("")
            setBody("")
        }
    }

  return <form>
    <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Blog Title" className="mb-5 border-2 outline-none p-1 w-full rounded-md"/>
    <input value={section} onChange={(e)=>setSection(e.target.value)} placeholder="Blog Section" className="mb-5 border-2 outline-none p-1 w-full rounded-md"/>
    <textarea value={body} onChange={(e)=>setBody(e.target.value)} placeholder="Blog Body" className="mb-5 border-2 outline-none p-1 w-full rounded-md"/>
    <button onClick={handleSubmit} className="bg-green-300 w-full p-2 rounded-lg text-white hover:bg-green-400">Submit</button>
    
        {
        err && err.map((error,index)=>(
            <h1 key={index}>{error}</h1>
        ))
        }
    
  </form>;
}
