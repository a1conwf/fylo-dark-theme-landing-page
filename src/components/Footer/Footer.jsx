import React from "react";

//Styles
import "./Footer.scss";

//Icons
import Logo from "../../assets/brand/logo.svg";
import iconLocation from "../../assets/svg/icon-location.svg";
import iconPhone from "../../assets/svg/icon-phone.svg";
import iconEmail from "../../assets/svg/icon-email.svg";
import iconFacebook from "../../assets/svg/facebook-icon.svg";
import iconTwitter from "../../assets/svg/twitter-icon.svg";
import iconInstagram from "../../assets/svg/instagram-icon.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<img src={Logo} alt="logo-img" className="footer__logo" />

				<div className="footer__info">
					<ul className="footer__contacts">
						<li className="footer__contacts-item">
							<img src={iconLocation} alt="icon-location" />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
						</li>
					</ul>

					<ul className="footer__contacts">
						<li className="footer__contacts-item">
							<a href="tel:+15431234567">
								<img src={iconPhone} alt="icon-phone" />
								+1-543-123-4567
							</a>
						</li>
						<li className="footer__contacts-item">
							<a href="mailto:example@fylo.com">
								<img src={iconEmail} alt="icon-email" />
								example@fylo.com
							</a>
						</li>
					</ul>

					<ul className="footer__links">
						<li className="footer__links-item">
							<a href="#!">About Us</a>
						</li>
						<li className="footer__links-item">
							<a href="#!">Jobs</a>
						</li>
						<li className="footer__links-item">
							<a href="#!">Press</a>
						</li>
						<li className="footer__links-item">
							<a href="#!">Blog</a>
						</li>
					</ul>

					<ul className="footer__links">
						<li className="footer__links-item">
							<a href="#!">Contact Us</a>
						</li>
						<li className="footer__links-item">
							<a href="#!">Terms</a>
						</li>
						<li className="footer__links-item">
							<a href="#!">Privacy</a>
						</li>
					</ul>

					<ul className="footer__socials">
						<li className="footer__socials-item">
							<a href="#!">
								<img src={iconFacebook} alt="icon-facebook" />
							</a>
						</li>
						<li className="footer__socials-item">
							<a href="#!">
								<img src={iconTwitter} alt="icon-twitter" />
							</a>
						</li>
						<li className="footer__socials-item">
							<a href="#!">
								<img src={iconInstagram} alt="icon-instagram" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
