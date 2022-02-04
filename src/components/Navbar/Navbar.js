import React from 'react';
import {
	Header,
	Hamburger,
	LogoContainer,
	HamburgerContainer,
} from './NavbarStyles';
import { Center } from '../../styles';
import { Mainlogo } from '../../assets/icons';
import { Link } from 'react-router-dom';

export const Navbar = ({ handleToggleShowMenu, showMenu }) => {
	return (
		<Header>
			<Center>
				{!showMenu && (
					<LogoContainer>
						<Link to='/' className='pointer'>
							<Mainlogo width='4.8rem' height='4.8rem' />
						</Link>
					</LogoContainer>
				)}
				<HamburgerContainer onClick={handleToggleShowMenu} className='pointer'>
					<Hamburger showMenu={showMenu} className='pointer' />
				</HamburgerContainer>
			</Center>
		</Header>
	);
};
