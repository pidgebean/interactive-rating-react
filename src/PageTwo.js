import React from 'react'
import {ReactComponent as Image} from './images/illustration-thank-you.svg'

export default function PageTwo() {
  return (
    <div className='page-two'>
        <Image/>
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
