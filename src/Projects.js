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
          <img className='project-img'src={thedrinktionary}/>
        </div>
        
      </div>
    </section>
  );
}
 
export default Projects;