import React from 'react'
import FeedbackCard from './FeedbackCard'

const Feedback = () => {
  return (
    <div className='w-9/12 mx-auto'>
      <h1 className='text-center font-bold my-5 text-2xl'>Customer Feedback</h1>
     
     <div className="flex flex-wrap gap-3">
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
      
     </div>

    </div>
  )
}

export default Feedback