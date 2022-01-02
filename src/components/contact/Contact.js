import Email from "./Email";
import Resume from "./Resume";

const Contact = () => {
  return (  
    <section className="projects-section">
      <p className='projects-content-title'>
           contact
      </p>
      
      <Email />

      <p className='projects-content-title'>
           resume
      </p>
      
      <Resume />
      
      
    </section>
  );
}
 
export default Contact;