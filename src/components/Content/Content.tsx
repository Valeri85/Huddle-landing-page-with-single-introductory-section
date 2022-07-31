/* Importing the `FC` type from the `react` package. */
import { FC } from 'react';

/* Importing the CSS file. */
import classes from './Content.module.scss';

/**
 * The Content function is a React component returns a div with a h1, p, and button inside of it.
 */
export const Content: FC = () => (
	<div className={classes.content}>
		<h1 className={classes.mainTitle}>
			Build The Community Your Fans Will Love
		</h1>
		<p className={classes.text}>
			Huddle re-imagines the way we build communities. You have a voice,
			but so does your audience. Create connections with your users as you
			engage in genuine discussion.
		</p>
		<button className={classes.btn}>Register</button>
	</div>
);
