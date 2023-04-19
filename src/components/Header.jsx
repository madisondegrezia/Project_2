import Container from './Container';
import { NavLink as RouterLink } from 'react-router-dom';
import React from 'react';
import '../index.css';
import TechTalkLogo from '../Images/TechTalkLogo.png';

const Header = () => {
	const getClassName = (props) => {
		return `${
			// eslint-disable-next-line react/prop-types
			props.isActive ? 'font-bold' : ''
		} hover:underline text-2xl hover:text-sky-300 hover:scale-150 transition duration-300`;
	};

	return (
		<Container className="bg-cyan-600">
			<nav className="flex gap-10">
				{/* <RouterLink to="/">
					<img src={TechTalkLogo}></img>
				</RouterLink> */}
				<img className="logo" src={TechTalkLogo}></img>
				<RouterLink className={getClassName} to="/">
					Home
				</RouterLink>
				<RouterLink className={getClassName} to="/Create">
					Create
				</RouterLink>
			</nav>
		</Container>
	);
};

export default Header;
