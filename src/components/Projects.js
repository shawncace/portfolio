
import DisplayProject from '../hooks/DisplayProject';
import thedrinktionary from '../pics/thedrinktionary.png'
import kidsactivityzone from '../pics/bigkidsactivityzone.png'
import KidsActivityZoneFeatures from '../data/kidsActivityZone.json'
import TheDrinktionaryFeatures from '../data/theDrinktionary.json'

import SeeMore from './SeeMore';

const Projects = () => {
  
  
  return (  
    <section className="projects-section" id='projects'>
      <p className='projects-content-title'>
           projects
      </p>

      <DisplayProject 
        title="Kid's Activity Zone"
        subtitle='Fun ideas for kids'
        url='https://kidsactivityzone.netlify.app/'
        src={kidsactivityzone}
        alt='Screenshot of The Drinktionary app'
        id='collapsible-kidsactivityzone'
        features={KidsActivityZoneFeatures}
        github='https://github.com/shawncace/parental-assitant-react'
      />
      
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

      <SeeMore 
        url='https://github.com/shawncace'
        title='Projects'
      />
      
      

      
    </section>
  );
}
 
export default Projects;