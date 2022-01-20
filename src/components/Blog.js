import DisplayBlog from "../hooks/DisplayBlog";
import SeeMore from "./SeeMore";
import ZoolanderComputer from '../pics/zoolandercomputer.png'

const Blog = () => {
  return ( 
    <section className="blogs-section" id='blogs'>
      <p className='projects-content-title'>
           featured blogs
      </p>

      <DisplayBlog
        title={'A Little Bit About Me'}
        src={
          ZoolanderComputer}
        url={'https://shawncace.hashnode.dev/a-little-about-me'}
        alt='Two men dancing around a computer'
        description='My very first blog entry! An introduction into who I am and how my journey into coding began.'
      />

      <SeeMore 
        url='https://shawncace.hashnode.dev/'
        title='Posts'
      />
    </section>
   );
}
 
export default Blog;