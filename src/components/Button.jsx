// import { Link } from 'react-router-dom';
import { data } from '../utils/constants';


function Button() {
  return (
    <div>
      {data.links.map((link) => (
        <button className='button'>{link.name}</button>))}    
    </div>
  )
}

export default Button;