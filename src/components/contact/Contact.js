import Email from "./Email";
import Resume from "./Resume";
import PortfolioDetails from "./PortfolioDetails";

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

      <p className='projects-content-title'>
           portfolio details
      </p>

      <PortfolioDetails />
      
      
    </section>
  );
}
 
export default Contact;