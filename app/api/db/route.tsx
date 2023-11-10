import ConnectDB from "@/app/lib/mongodb"
import BlogModel from "@/app/models/blog"
import mongoose from "mongoose"
import { NextResponse } from "next/server"
type BodyProps = {
    title:String,
    section: String,
    body: String
}

export async function POST(request:Request){
    const formData:BodyProps = await request.json()
    const {title,section,body} = formData
    try {
        await ConnectDB()
        await BlogModel.create({
            title,
            section,
            body
        })
        return NextResponse.json({
            msg:['Blog Saved'],
            success: true
        })
    } catch (error) {
        if(error instanceof mongoose.Error.ValidationError){
            let errorList = []
            for(let e in error.errors){
                errorList.push(error.errors[e].message)
            }
            console.log(errorList)
            return NextResponse.json({
                msg: errorList
            })
        }else{
            return NextResponse.json(error)
        }
    }
}