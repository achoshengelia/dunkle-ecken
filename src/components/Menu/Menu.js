import React from 'react';
import { Center } from '../../styles';
import { MenuPoints, Language, Container } from './MenuStyles';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Menu = ({ handleToggleShowMenu }) => {
	const { t, i18n } = useTranslation();

	const handleOnClick = lang => {
		handleToggleShowMenu();
		localStorage.removeItem('language');
		if (lang === 'en') i18n.changeLanguage('en');
		if (lang === 'de') i18n.changeLanguage('de');
		if (lang === 'it') i18n.changeLanguage('it');
	};

	return (
		<Container>
			<Center>
				<MenuPoints>
					<li onClick={handleToggleShowMenu}>
						<Link to='/' className='pointer'>
							{t('menu.home')}{' '}
						</Link>
					</li>
					<li onClick={handleToggleShowMenu}>
						<Link to='/exhibition' className='pointer'>
							{t('menu.exhibition')}
						</Link>
					</li>
					{i18n.language === 'it' || i18n.language === 'de' ? (
						<li onClick={handleToggleShowMenu}>
							<Link to='/messages' className='pointer'>
								{t('menu.audio')}
							</Link>
						</li>
					) : null}

					<li onClick={handleToggleShowMenu}>
						<Link to='/about' className='pointer'>
							{t('menu.about')}
						</Link>
					</li>
					<li onClick={handleToggleShowMenu}>
						<Link to='/artists' className='pointer'>
							{t('menu.artists')}
						</Link>
					</li>
				</MenuPoints>

				<Language>
					{i18n.language !== 'en' && (
						<li onClick={() => handleOnClick('en')} className='pointer'>
							english
						</li>
					)}
					{i18n.language !== 'de' && (
						<li onClick={() => handleOnClick('de')} className='pointer'>
							deutsch
						</li>
					)}
					{i18n.language !== 'it' && (
						<li onClick={() => handleOnClick('it')} className='pointer'>
							italiano
						</li>
					)}
				</Language>
			</Center>
		</Container>
	);
};
