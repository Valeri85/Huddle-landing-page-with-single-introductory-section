/* Importing the `FC` type from the `react` package. */
import { FC } from 'react';

/* Importing the CSS module. */
import classes from './Ilustration.module.scss';
/* Importing the image from the assets folder. */
import Illustration from '../../assets/images/illustration-mockups.svg';

/* Exporting the `Ilustration` component. */
export const Ilustration: FC = () => (
	<img
		className={classes.illustration}
		src={Illustration}
		alt="Illustration Mockups"
	/>
);
