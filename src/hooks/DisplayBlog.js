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
          <p className='project-title'>
            {title}
          </p>
          
          
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