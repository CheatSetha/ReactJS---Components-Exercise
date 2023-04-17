import React from "react"

const FeedbackCard = () => {
	return (
		
			<div className='card-fb flex space-x-3 shadow-2xl p-3 w-[47%]'>
				<img
					className='w-[100px] rounded-[50%]'
					src='https://i.pinimg.com/736x/1d/81/e0/1d81e065de302045e5d8709bef235ac4.jpg'
					alt='customer-pic'
				/>
				<div className='text'>
					<h1 className='title font-bold text-2xl text-green-700'>
						me bro rock huh
					</h1>
					<p className='text-[14px] opacity-80'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
						odit corrupti facere dolorum quasi, quibusdam iste nobis explicabo
						aut accusantium quos soluta nam quam et inventore, mollitia autem
						maiores tenetur.
					</p>
				</div>
			</div>
	
	)
}

export default FeedbackCard
