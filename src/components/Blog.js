import DisplayBlog from "../hooks/DisplayBlog";
import SeeMore from "./SeeMore";

const Blog = () => {
  return ( 
    <section className="blogs-section" id='blogs'>
      <p className='projects-content-title'>
           featured blogs
      </p>

      <DisplayBlog
        
      />

      <SeeMore 
        url='https://github.com/shawncace'
        title='Posts'
      />
    </section>
   );
}
 
export default Blog;