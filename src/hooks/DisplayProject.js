const DisplayProject = ({
  title,
  subtitle,
  url,
  src,
  alt,
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
          <div className="learn-more-title-container">
          <p className="learn-more-title">
            LEARN MORE
          </p>
          </div> 
          
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
      </div>
    </>
   );
}
 
export default DisplayProject;