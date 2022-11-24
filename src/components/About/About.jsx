import React, {useState} from "react";

//Styles
import "./About.scss";

//Imgs and icons
import productiveImg from "../../assets/img/illustration-stay-productive.png";
import iconArrowCyan from "../../assets/svg/icon-arrow-cyan.svg";
import iconArrowWhite from "../../assets/svg/icon-arrow-white.svg";

const About = () => {
	const [ctaHovered, isCtaHovered] = useState(false);

	return (
		<section className="about">
			<div className="container">
				<img src={productiveImg} alt="about-img" className="about__img" />
				<div className="about__content">
					<h2 className="about__content-title">Stay productive, wherever you are</h2>
					<p className="about__content-text">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
					<p className="about__content-text">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
					<a href="#!" className="about__content-cta" onMouseEnter={() => isCtaHovered(!ctaHovered)} onMouseLeave={() => isCtaHovered(!ctaHovered)}>
						See how Fylo works
						{ctaHovered ? <img src={iconArrowWhite} alt="icon-arrow" /> : <img src={iconArrowCyan} alt="icon-arrow" />}
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
