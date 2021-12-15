import GithubTiny from '../pics/github.png'
import ComputerTiny from '../pics/computertiny.png'

const DisplayProject = ({
  title,
  subtitle,
  url,
  src,
  alt,
  id,
  features

}) => {
  return ( 
   <> 
    <div className="project-container">
        <p className='project-title'>
          {title}
        </p>
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
          </div> 
          
          <img src={GithubTiny} className='tiny-img' />
          <img src={ComputerTiny} className='tiny-img'/>
        </div>
      </div>
    </>
   );
}
 
export default DisplayProject;