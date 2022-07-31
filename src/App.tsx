/* Importing the `FC` type from the `react` package. */
import { FC } from 'react';

/* Importing the Header, Main, and Footer components from the Layout folder. */
import { Header } from './components/Layout/Header/Header';
import { Main } from './components/Layout/Main/Main';
import { Footer } from './components/Layout/Footer/Footer';

/**
 * The App function is a React component that returns a Header, Main and Footer component
 * @returns A React element
 */
export const App: FC = () => (
	<>
		<Header />
		<Main />
		<Footer />
	</>
);
