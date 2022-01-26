const DisplayBlog = (
  {
    title,
    url,
    src,
    alt,
    description
  }
) => {
  return (  
    <>
      <div className="project-container">
          <div className="blog-header-container">
            <a href={url}
            rel='noopener noreferrer' target='_blank'
            className='title-link'>
              <p className='blog-title'>
                {title}
              </p>
            </a>
            
            
            <a href={url}
            className='arrow-icon'
            rel='noopener noreferrer'
            target="_blank">
            <i class="far fa-arrow-alt-circle-right"></i>
          </a>
          </div>
          
          
          <div className="project-img-container">
            <a href={url} rel='noopener noreferrer' target='_blank'>
              <img className='project-img'src={src} alt={alt}/>
            </a>
          </div>

          <p className='blog-description'>{description}</p>
      </div>
    </>
  );
}
 
export default DisplayBlog;