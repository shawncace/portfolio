import DisplayBlog from "../hooks/DisplayBlog";
import SeeMore from "./SeeMore";
import ZoolanderComputer from '../pics/zoolandercomputer.png'
import Success from '../pics/success.png'

const Blog = () => {
  return ( 
    <section className="blogs-section" id='blogs'>
      <p className='projects-content-title'>
           featured blogs
      </p>

      <DisplayBlog
        title={'100 Days of Code.. What\'s Next'}
        src={
          Success}
        url={'https://shawncace.hashnode.dev/100-days-of-code-whats-next'}
        alt='Triumphant kid holding up a clenched fist'
        description='How the 100 Days Of Code challenge changed the game in my web dev and personal life.'
      />
      
      <DisplayBlog
        title={'Get To Know Me'}
        src={
          ZoolanderComputer}
        url={'https://shawncace.hashnode.dev/get-to-know-me'}
        alt='Two men dancing around a computer'
        description='My very first blog entry! A brief introduction into my story and how my journey into coding began.'
      />

      <SeeMore 
        url='https://shawncace.hashnode.dev/'
        title='Posts'
      />
    </section>
   );
}
 
export default Blog;