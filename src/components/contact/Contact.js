import Email from "./Email";
import Resume from "./Resume";
import PortfolioDetails from "./PortfolioDetails";
import Socials from "./Socials";

const Contact = () => {
  return (  
    <section className="contact-section">
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

      <p className='projects-content-title'>
           socials
      </p>

      <Socials />
      
      
    </section>
  );
}
 
export default Contact;