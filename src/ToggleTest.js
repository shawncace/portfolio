const ToggleTest = () => {
  return (  
    <div className='toggle-test-container'>
      <input type="checkbox" id='switch' className='toggle'/>
      <label htmlFor="switch" className='lbl-toggle'>
        LEARN MORE
      </label>

      <div className="collapsible-content">
        <p>yo</p>
        <p>yo</p>
        <p>yo</p>
        <p>yo</p>
      </div>
    </div>
  );
}
 
export default ToggleTest;