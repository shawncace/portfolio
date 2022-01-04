const Footer = () => {
  return ( 
    <div className="footer">
      <p>
        Made by 
        <a className='footer-link' href='https://github.com/shawncace/'>
        Shawn Caceres
        </a>
      </p>
      <p>
        {'Copyright © '}
        {new Date().getFullYear()}
      </p>
    </div>
   );
}
 
export default Footer;