import React from "react";

//Styles
import "./Testimonial.scss";

const Testimonial = ({text, bgImg, img, name, pos}) => {
	return (
		<article className="testimonial">
			{bgImg && <img src={bgImg} className="testimonial__bg" alt="quotes-img" />}
			<p className="testimonial__text">{text}</p>
			<div className="testimonial__person">
				<img src={img} alt="person-img" className="testimonial__person-img" />
				<div className="testimonial__person-info">
					<span className="testimonial__person-info-name">{name}</span>
					<span className="testimonial__person-info-pos">{pos}</span>
				</div>
			</div>
		</article>
	);
};

export default Testimonial;
