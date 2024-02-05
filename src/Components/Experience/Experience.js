import './Experience.css';

function Experience({data}) {
  return (
    <div className='experience'>
      <div className='experience-container'>
        <img className='experience-image' src={data.image} alt={data.title + " Image"}></img>
        <div className='experience-info-container'>
          <div className='experience-header-container'>
            <span className='experience-date'>
              {data.startDate.getMonth() + 1}/{data.startDate.getFullYear()} - 
              {data.current ? ' Current' : ` ${data.endDate.getMonth() + 1}/${data.endDate.getFullYear()}`}
            </span>
            <header className='experience-title'>{data.title} • {data.company}</header>
          </div>
          <p className='experience-paragraph'>{data.description}</p>
          <ul className='experience-list'>
              {data.listItems.map((listItem, index) => (
                <li className='experience-list-item' key={index}>{listItem}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
