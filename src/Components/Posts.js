import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './post.css'
function Posts() {
   const [posts,setPosts] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
    setIsLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      setIsLoading(false)
      setPosts(res.data)
      Aos.init({duration:1000})
    }).catch((err) => {
        console.log(err.message)
    });
   }, [])
   
  return (
    <div className='Pages'>
    <h1 className='PageHeading'>Posts</h1>
   {isLoading && <div class="loader"></div>}
    <div className='AllPosts'>
    {
        posts.map(post=>{
         return(
            <div className='cardPost' key={post.id} data-aos="fade-up">
           <h2 className='PostTitle'>{post.title}</h2>
           <p className='PostBody'>{post.body}</p>
            </div>
         )
        })
    }
    </div>
    </div>
  )
}

export default Posts