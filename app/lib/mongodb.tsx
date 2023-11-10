import mongoose from "mongoose";

  const DBURI = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.l8jmmvi.mongodb.net/blogs?retryWrites=true&w=majority`

 const ConnectDB=async()=>{
    try {
        if(mongoose.connection.readyState === 0){
            mongoose.connect(DBURI)
             .then(()=>{
                console.log("connection Established")
             })
             .catch((err)=>{
                console.log("An Error occured")
             })
        }
    } catch (error) {
        console.log(error)
    }
}

export default ConnectDB;