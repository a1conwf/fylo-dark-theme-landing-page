import React, {useState} from "react";

//Styles
import "./Cta.scss";

const Cta = () => {
	const [emailValue, setEmailValue] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const emailRegex = /\S+@\S+\.\S+/;

		if (emailValue === "" || !emailValue.match(emailRegex)) {
			setError("Error, please check your email");
		} else {
			setError(null);
		}
	};

	return (
		<section className="cta container">
			<h3 className="cta__title">Get early access today</h3>
			<p className="cta__text">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
			<form action="" className={error ? "form error" : "form"} onSubmit={handleSubmit}>
				<div className="form__input">
					<input type="text" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} placeholder="email@example.com" />
					<p className="error__text">Error, please check your email</p>
				</div>

				<button className="btn">Get Started For Free</button>
			</form>
		</section>
	);
};

export default Cta;
