import {ReactComponent as Star} from './images/icon-star.svg'
import {NavLink} from 'react-router-dom'

export default function Rating() {
  return (
    <div className='page-1'>
      <Star className='image'/>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support
        request. All feedback is appreciated to help us 
        improve our offering!
        </p>
        <div className='options'>
            <input className='radio' type='radio' name='rating' id='star-1'></input>
            <label for="star-1" id="label-1">1</label>

            <input className='radio' type='radio' name='rating' id='star-1'></input>
            <label for="star-1" id="label-1">2</label>

            <input className='radio' type='radio' name='rating' id='star-1'></input>
            <label for="star-1" id="label-1">3</label>

            <input className='radio' type='radio' name='rating' id='star-1'></input>
            <label for="star-1" id="label-1">4</label>

            <input className='radio' type='radio' name='rating' id='star-1'></input>
            <label for="star-1" id="label-1">5</label>
        </div>
        <NavLink>
            <button className='btn'>Submit</button>
        </NavLink>
        
    </div>
  )
}
