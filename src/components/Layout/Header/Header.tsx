/* Importing the CSS file. */
import classes from './Header.module.scss';
/* Importing the logo.svg file from the assets/images folder. */
import logo from '../../../assets/images/logo.svg';

/**
 * This is a function that returns a header element with a link to the home page and logo.
 */
export const Header = () => (
	<header className={classes.header}>
		<nav>
			<a href="#" aria-label="Huddle - Home">
				<img className={classes.logoImg} src={logo} alt="Huddle" width="120" height="49pt" />
			</a>
		</nav>
	</header>
);
