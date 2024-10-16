import Blog from "./Blog"

const NewsBlog=()=>{
    return(
        <div className='d-flex flex-column justify-content-center align-items-center py-5'>

    <span className='title2'>News and Blogs</span>
    <span className='card-title container text-center p-4'>Explore a variety of topics and gain knowledge from experienced professionals acros different industries.</span>

  <div className="d-flex flex-wrap justify-content-center">
  <Blog/>
  </div>
</div>
    )
}

export default NewsBlog