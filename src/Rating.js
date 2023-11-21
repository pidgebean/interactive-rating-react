import {ReactComponent as Star} from './images/icon-star.svg'
import {NavLink} from 'react-router-dom'

export default function Rating() {
  function whichRating(){
    let chosenRating = 0;
    if (document.getElementById("star-1").checked) {
        chosenRating = 1;
    }
    if (document.getElementById("star-2").checked) {
        chosenRating = 2;
    }
    if (document.getElementById("star-3").checked) {
        chosenRating = 3;
    }
    if (document.getElementById("star-4").checked) {
        chosenRating = 4;
    }
    if (document.getElementById("star-5").checked) {
        chosenRating = 5;
    }
    console.log(chosenRating);
  }
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

            <input className='radio' type='radio' name='rating' id='star-2'></input>
            <label for="star-2" id="label-2">2</label>

            <input className='radio' type='radio' name='rating' id='star-3'></input>
            <label for="star-3" id="label-3">3</label>

            <input className='radio' type='radio' name='rating' id='star-4'></input>
            <label for="star-4" id="label-4">4</label>

            <input className='radio' type='radio' name='rating' id='star-5'></input>
            <label for="star-5" id="label-5">5</label>
        </div>
        <NavLink to='/page-two'>
            <button className='btn' onClick={whichRating}>Submit</button>
        </NavLink>
        
    </div>
  )
}
