
import DisplayProject from '../hooks/DisplayProject';
import thedrinktionary from '../pics/thedrinktionary.png'
import TheDrinktionaryFeatures from '../data/theDrinktionary.json'


const Projects = () => {
  
  
  return (  
    <section className="projects-section">
      <p className='projects-content-title'>
           projects
      </p>

      <DisplayProject 
        title='The Drinktionary'
        subtitle='Discover and save recipes'
        url='https://thedrinktionary.netlify.app/'
        src={thedrinktionary}
        alt='Screenshot of The Drinktionary app'
        id='collapsible-drinktionary'
        features={TheDrinktionaryFeatures}
        github='https://github.com/shawncace/drink-recipe-react'
      />

      {/* <More /> */}
      <div className="more-projects">
        
      </div>

      
    </section>
  );
}
 
export default Projects;