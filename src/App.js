import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Cta from "./components/Cta/Cta";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Features />
				<About />
				<Testimonials />
				<Cta />
			</main>
			<Footer />
		</>
	);
};

export default App;
