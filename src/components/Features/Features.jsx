import React from "react";
import Feature from "./Feature/Feature";

//data
import {features} from "../../data/data";

//styles
import "./Features.scss";

const Features = () => {
	return (
		<section className="features">
			<div className="container">
				<div className="features__inner">
					{features.map((feature) => (
						<Feature key={feature.id} icon={feature.icon} title={feature.title} text={feature.text} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
