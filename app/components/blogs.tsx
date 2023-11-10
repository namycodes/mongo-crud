
'use client'

import Link from "next/link"
import getBlogsData from "../components/getBlogs"
import {useState,useEffect} from 'react'
import {ImBin} from 'react-icons/im'
type BlogsType = {
   _id:String,
   title:String,
   body:String,
   section:String
}
export default function Blogs(){
    const [blogsData,setBlogsData] = useState<BlogsType | any>([])
    const getBlog=async()=>{
        const blogs = await getBlogsData()
        setBlogsData(blogs.data)
    }
    const handleDelete=async(id:String)=>{
        const res = await fetch(`api/blogs/` + id,{
            method:'DELETE'
        })
        console.log(id)
    }
    useEffect(()=>{
        getBlog()
    },[blogsData])

    

    return(
        <div className="w-full">

           <div className="px-5">
             <h1>Blogs</h1>
             {
                blogsData.length > 0 ? (<div>
                    {
                        blogsData.length > 0 && (
                            blogsData.map((blog:BlogsType)=>(
                                <div className="bg-white flex justify-between border-l-green-400 border-l-4 pl-5 py-3 w-full shadow-lg my-2 rounded-lg" key={blog._id.toString()}>
                                    <div>
                                    <h1>{blog.title}</h1>
                                   <h2>{blog.section}</h2>
                                   <p>{blog.body}</p>
                                   <Link href={`/blog/${blog._id}`}>View More..</Link>
                                    </div>
                                  
                                   <ImBin onClick={()=>handleDelete(blog._id)} size={24} className="text-red-400 hover:cursor-pointer hover:scale-[1.3]"/>
                                </div>
                            ))
                        )
                    }
                 </div>): (
                    <h1>Loading.....</h1>
                )
             }
             
            
           </div>
        </div>
    )
}