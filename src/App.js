import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { Menu } from './components/Menu/Menu';
import { HomePage } from './pages/HomePage';
import { AudiosPage } from './pages/AudiosPage';
import { AudioPage } from './pages/AudioPage';
import { AboutPage } from './pages/AboutPage';
import { ArtistsPage } from './pages/ArtistsPage';
import { ImprintPage } from './pages/ImprintPage';
import ExhibitionPage from './pages/ExhibitionPage';
import ExhibitPage from './pages/ExhibitPage';
import Cursor from './components/Cursor/Cursor';
import Loader from './components/Loader/Loader';
import ScrollToTop from './components/helper/ScrollToTop';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './Layout';

const App = () => {
	const [showMenu, setShowMenu] = useState(false);
	const { i18n } = useTranslation();
	const currLang = i18n.language;
	const savedLang = localStorage.getItem('language');

	const handleToggleShowMenu = () => {
		setShowMenu(prevState => !prevState);
		document.body.style.overflow = !showMenu ? 'hidden' : '';
	};

	useEffect(() => {
		if (!savedLang) localStorage.setItem('language', currLang);
		if (savedLang && savedLang !== currLang) i18n.changeLanguage(savedLang);
	}, [currLang, savedLang]);

	return (
		<>
			<ScrollToTop />
			<Loader />
			{!isMobile ? <Cursor /> : null}
			{showMenu ? <Menu handleToggleShowMenu={handleToggleShowMenu} /> : null}
			<Routes>
				<Route
					element={
						<Layout
							showFooter
							handleToggleShowMenu={handleToggleShowMenu}
							showMenu={showMenu}
						/>
					}>
					<Route index element={<HomePage />} />
					<Route path='/exhibition' element={<ExhibitionPage />} />
					<Route path='/exhibition/:artName' element={<ExhibitPage />} />
					<Route path='/messages' element={<AudiosPage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/artists' element={<ArtistsPage />} />
					<Route path='/imprint' element={<ImprintPage />} />
				</Route>
				<Route
					element={
						<Layout
							handleToggleShowMenu={handleToggleShowMenu}
							showMenu={showMenu}
						/>
					}>
					<Route path='/messages/:messageId' element={<AudioPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
