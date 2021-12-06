import logo from './pics/react.png'

const Main = () => {
  return (  
    <main>
      <h1>
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
          I have been a wok chef, a gym manager, and a barista, but my favorite role has been that of a full-time father. 
        </p>
        <p className='work-content-paragraphs'>
          Currently I am seeking opportunities to be part of a team as a front-end developer.
        </p> 
      </div>

      <div className='skills-content'>
        
        <p className='skills-content-title'>
          skills
        </p>
        <p className='work-content-paragraphs'>
          I have been a wok chef, a gym manager, and a barista, but my favorite role has been that of a full-time father. 
        </p>
        <p className='work-content-paragraphs'>
          Currently I am seeking opportunities to be part of a team as a front-end developer.
        </p> 
        
      </div>
<img src={logo}/>

      
    </main>
  );
}
 
export default Main;