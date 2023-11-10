import ConnectDB from "@/app/lib/mongodb"
import BlogModel from "@/app/models/blog"
import { NextResponse } from "next/server"
export async function DELETE(req:Request,{params}:{params:{id:String}}){
    const {id} = params
    
    try {
        await ConnectDB()
        await BlogModel.findByIdAndDelete({_id:id})
        return NextResponse.json({mg:'success'})
    } catch (error) {
        return NextResponse.json({msg:'Error'})
    }
}