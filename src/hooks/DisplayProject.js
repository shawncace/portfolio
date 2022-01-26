import GithubTiny from '../pics/github.png'
import ComputerTiny from '../pics/computertiny.png'

const DisplayProject = ({
  title,
  subtitle,
  url,
  src,
  alt,
  id,
  features,
  github

}) => {
  return ( 
   <> 
    <div className="project-container">
        <a href={url}
        rel='noopener noreferrer' target='_blank'>
          <p        className='project-title'>
          {title}
          </p>
        </a>
        
        <p className='project-subtitle'>
          {subtitle}
        </p>
        
        <div className="project-img-container">
          <a href={url} rel='noopener noreferrer' target='_blank'>
            <img className='project-img'src={src} alt={alt}/>
          </a>
        </div>

        <div className='toggle-test-container'>
          <input 
            type="checkbox" 
            id={id} 
            className='toggle'/>
          <label 
            htmlFor={id} 
            className='lbl-toggle'>
              LEARN MORE
          </label>

          <div className="collapsible-content">
            <p className='learn-more-featuring-header'>
                Featuring 
            </p>  
          
            <ul className='learn-more-list'>
              {features.map((feature)=>{
                return(
                  <li key={feature.id}>{feature.text}</li>
                );
              })}
            </ul>

            <div  
              className="mini-icon-container">
              <a href={github} rel='noopener noreferrer' target='_blank'>
                <img src={GithubTiny} className='tiny-img one' alt='Github icon' />
              </a>
              
              <a href={url} rel='noopener noreferrer' target='_blank'>
                <img src={ComputerTiny} className='tiny-img two' alt='computer desktop icon'/>
              </a>
              
            </div>
            
          </div> 
          
          
        </div>
      </div>
    </>
   );
}
 
export default DisplayProject;