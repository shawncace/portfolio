const ToggleTest = () => {
  return (  
    <div className='toggle-test-container'>
      <input type="checkbox" id='switch' className='toggle'/>
      <label htmlFor="switch" className='lbl-toggle'>
        LEARN MORE
      </label>

      <div className="collapsible-content">
      <p className='learn-more-featuring-header'>
            Featuring
            </p>  
        
            <ul className='learn-more-list'>
              <li>React front-end</li>
              <li>Redux to manage state</li>
              <li>Material UI components and styles</li>
              <li>Custom resuable Hook called ImageLoad to lazy load images</li>
            </ul>
      </div>
    </div>
  );
}
 
export default ToggleTest;