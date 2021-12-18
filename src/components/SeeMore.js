const SeeMore = ({
  url,
  title
}) => {
  return (  
    <a href={url} rel='noopener noreferrer' target='_blank'>
      <button className="more-btn">
        More {title}  
      </button>
    </a>


    );
}
 
export default SeeMore;