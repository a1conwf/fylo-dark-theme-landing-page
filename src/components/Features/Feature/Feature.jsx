import React from "react";

//Styles
import "./Feature.scss";

const Feature = ({icon, title, text}) => {
	return (
		<article className="feature">
			<img src={icon} alt="feature-icon" className="feature__img" />
			<span className="feature__title">{title}</span>
			<p className="feature__text">{text}</p>
		</article>
	);
};

export default Feature;
