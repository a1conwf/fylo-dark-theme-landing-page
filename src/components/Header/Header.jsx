import React from "react";

//Styles
import "./Header.scss";

//Logo and imgs
import Logo from "../../assets/brand/logo.svg";
import heroImg from "../../assets/img/illustration-intro.png";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__nav">
					<img src={Logo} alt="logo-img" className="header__nav-logo" />

					<nav className="nav">
						<ul className="nav__list">
							<li className="nav__list-item">
								<a href="#!">Features</a>
							</li>
							<li className="nav__list-item">
								<a href="#!">Team</a>
							</li>
							<li className="nav__list-item">
								<a href="#!">Sign In</a>
							</li>
						</ul>
					</nav>
				</div>

				<section className="hero">
					<img src={heroImg} alt="hero-img" className="hero__img" />
					<div className="hero__content">
						<h1 className="hero__content-title">All your files in one secure location, accessible anywhere.</h1>
						<p className="hero__content-text">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
						<a href="#!" className="hero__content-cta btn">
							Get Started
						</a>
					</div>
				</section>
			</div>
		</header>
	);
};

export default Header;
