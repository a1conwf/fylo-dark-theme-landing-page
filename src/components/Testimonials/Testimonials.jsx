import React from "react";
import Testimonial from "./Testimonial/Testimonial";

//data
import {testimonials} from "../../data/data";

//Styles
import "./Testimonials.scss";

const Testimonials = () => {
	return (
		<section className="testimonials">
			<div className="container">
				<div className="testimonials__inner">
					{testimonials.map((testimonial) => (
						<Testimonial key={testimonial.id} text={testimonial.text} bgImg={testimonial.bgImg} img={testimonial.img} name={testimonial.name} pos={testimonial.pos} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
