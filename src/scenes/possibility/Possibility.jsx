import React from "react"
import "./possibility.css"
import possibility from "../../assets/possibility.webp"

const Possibility = () => {
	return (
		<div className='possibility section__padding' id='possibility'>
			<div className='possibility-image'>
				<img src={possibility} alt='possibility' />
			</div>
			<div className='possibility-content'>
				<h4>Request Early Access to Get Started</h4>
				<h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aperiam.
					Accusantium quo perspiciatis aperiam eos quos ex quasi quaerat libero culpa.
					Neque optio autem ullam ducimus unde. Commodi, quidem ipsum.
				</p>
				<h4>Request Early Access to Get Started</h4>
			</div>
		</div>
	)
}

export default Possibility
