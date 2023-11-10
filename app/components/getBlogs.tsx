async function getBlogsData(){
    const res = await fetch('api/blogs',{
        next:{
            revalidate: 1000
        }
    })
    const data = await res.json()
    return data
}
export default getBlogsData