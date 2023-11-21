import React from 'react'
import {ReactComponent as Image} from './images/illustration-thank-you.svg'

export default function PageTwo({rating}) {
  // let chosenRating = document.getElementById('chosen-rating');
  console.log();
  return (
    <div className='page-2'>
        <Image className='image-2'/>
        <h4>You have selected 4 out of 5</h4>
        <h2>Thank you!</h2>
        <p>
            We appreciate you taking the time to give a rating.
            If you ever need more support, don't hesitate to
            get in touch!
        </p>
    </div>
  )
}
