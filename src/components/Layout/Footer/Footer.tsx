/* Importing the `FC` type from the `react` package. */
import { FC } from 'react';

/* Importing the SocialIcons component from the SocialIcons folder. */
import { SocialIcons } from '../../SocialIcons/SocialIcons';

/* Importing the CSS file. */
import classes from './Footer.module.scss';

/**
 * It's a React functional component that returns a footer element with
 * 1) React functional component that returns a div element with a list of links of social media profiles,
 * 2) Link to the Frontend Mentor website,
 * 3) Link to my profile on the Frontend Mentor website.
 */
export const Footer: FC = () => (
	<footer className={classes.footer}>
		<SocialIcons />
		<p className={classes.text}>
			Challenge by{' '}
			<a
				className={classes.frontEndMentorLink}
				href="https://www.frontendmentor.io?ref=challenge"
				target="_blank"
				rel="noopener"
			>
				Frontend Mentor
			</a>
			.
		</p>
		<p className={classes.text}>
			Coded by{' '}
			<a
				className={classes.frontEndMentorLink}
				href="https://www.frontendmentor.io/profile/Valeri85"
				target="_blank"
				rel="noopener"
			>
				Valeri
			</a>
			.
		</p>
	</footer>
);
