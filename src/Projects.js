
import thedrinktionary from './pics/thedrinktionary.png'

const Projects = () => {
  
  
  return (  
    <section className="projects-section">
      <p className='projects-content-title'>
           projects
      </p>

      <div className="project-container">
        <p className='project-title'>
          The Drinktionary
        </p>
        <p className='project-mini-explanation'>
          Discover and save recipes
        </p>
        
        <div className="project-img-container">
          <a href="http://thedrinktionary.netlify.app" rel='noopener noreferrer' target='_blank'>
            <img className='project-img'src={thedrinktionary} alt='project'/>
          </a>
        </div>

        <div className="learn-more-title-container">
          <p className="learn-more-title">
            LEARN MORE
          </p>
        </div> 
          
        <p className='learn-more-featuring-header'>
            Featuring
         </p>  
        
        <ul className='learn-more-list'>
          <li>React front-end</li>
          <li>Redux to manage state</li>
          <li>Material UI components and styles</li>
          <li>Custom resuable Hook called ImageLoad to lazy load images</li>
        </ul>
          
          
        
          
        
        
      </div>
    </section>
  );
}
 
export default Projects;