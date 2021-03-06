import htmlLogo from '../pics/html.png'
import cssLogo from '../pics/css.png'
import javascriptLogo from '../pics/js.png'
import reactLogo from '../pics/react.png'
import githubLogo from '../pics/github.png'



const Main = () => {
  return (  
    <main>
      <h1 className='main-header'>
        Hi, I'm Shawn! 🙋‍♂️
      </h1>
      <p className='about-content'>
        I'm a React Developer and I create websites. 
      </p>
      {/* <a href="/">
        More about me
      </a> */}

      <div className='work-content'>
        <p className='work-content-title'>
          work
        </p>
        <p className='work-content-paragraphs'>
          I have been a wok chef, a gym manager, and a barista, but my favorite role has been that of full-time father. 
        </p>
        <p className='work-content-paragraphs'>
          Currently I am seeking opportunities to be part of a team as a front-end developer.
        </p> 
      </div>

      <div className='skills-content'>
        
        <p className='skills-content-title'>
          skills
        </p>
        
        <div className='skills-logo-container'>
          
          <div className='img-logo-container'>
            <img className='javascript-logo' src={javascriptLogo} alt='logo'/>
            <p className='logo-title'>JAVASCRIPT</p>
          </div>
          
          <div className='img-logo-container'>
            <img className='react-logo' src={reactLogo} alt='logo'/>
            <p className='logo-title'>REACT</p>
          </div>

          <div className='img-logo-container'>
            <img className='html-logo' src={htmlLogo} alt='logo'/>
            <p className='logo-title'>HTML</p>
          </div>

          <div className='img-logo-container'>
            <img className='css-logo' src={cssLogo} alt='logo'/>
            <p className='logo-title'>CSS</p>
          </div>

          <div className='img-logo-container'>
            <img className='github-logo' src={githubLogo} alt='logo'/>
            <p className='logo-title'>GITHUB</p>
          </div>
        </div>
        
      </div>
      

      
    </main>
  );
}
 
export default Main;