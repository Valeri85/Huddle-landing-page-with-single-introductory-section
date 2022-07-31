/* Importing the `FC` type from the `react` package. */
import { FC } from 'react';

/* Importing the `Ilustration` and `Content` components from the `Ilustration` and `Content` folders. */
import { Ilustration } from '../../Ilustration/Ilustration';
import { Content } from '../../Content/Content';

/* Importing the CSS file. */
import classes from './Main.module.scss';

/**
 * The Main function is a React component that returns a main element with the className of main, and
 * it contains the Ilustration and Content components.
 */
export const Main: FC = () => (
	<main className={classes.main}>
		<Ilustration />
		<Content />
	</main>
);
