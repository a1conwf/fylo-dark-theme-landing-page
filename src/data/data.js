import iconAccess from "../assets/svg/icon-access-anywhere.svg";
import iconSecurity from "../assets/svg/icon-security.svg";
import iconCollaboration from "../assets/svg/icon-collaboration.svg";
import iconFile from "../assets/svg/icon-any-file.svg";
import satishImg from "../assets/img/profile-1.jpg";
import bruceImg from "../assets/img/profile-2.jpg";
import ivaImg from "../assets/img/profile-3.jpg";
import bgQuotes from "../assets/img/bg-quotes.png";

export const features = [
	{
		id: "1",
		icon: iconAccess,
		title: "Access your files, anywhere",
		text: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
	},
	{
		id: "2",
		icon: iconSecurity,
		title: "Security you can trust",
		text: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
	},
	{
		id: "3",
		icon: iconCollaboration,
		title: "Real-time collaboration",
		text: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
	},
	{
		id: "4",
		icon: iconFile,
		title: "Store any type of file",
		text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
	},
];

export const testimonials = [
	{
		id: "1",
		bgImg: bgQuotes,
		text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
		img: satishImg,
		name: "Satish Patel",
		pos: "Founder & CEO, Huddle",
	},
	{
		id: "2",
		text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
		img: bruceImg,
		name: "Bruce McKenzie",
		pos: "Founder & CEO, Huddle",
	},
	{
		id: "3",
		text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
		img: ivaImg,
		name: "Iva Boyd",
		pos: "Founder & CEO, Huddle",
	},
];
