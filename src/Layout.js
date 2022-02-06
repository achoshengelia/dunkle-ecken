import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';

const Layout = ({ handleToggleShowMenu, showMenu, showFooter, children }) => {
	return (
		<>
			<Navbar handleToggleShowMenu={handleToggleShowMenu} showMenu={showMenu} />
			{children}
			<Outlet />
			{showFooter ? <Footer /> : null}
		</>
	);
};

export default Layout;
