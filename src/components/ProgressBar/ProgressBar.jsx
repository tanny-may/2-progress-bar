/* eslint-disable react/prop-types */
import s from './ProgressBar.module.css';
import { countProgress } from './countProgress';

export function ProgressBar({ thresholds, value }) {
	let percent = countProgress(thresholds, value);

	console.log('percent', percent);

	const background = `linear-gradient(to right, blue ${percent}%, lightgray ${percent}%)`;

	return (
		<div className={s.wrapper} style={{ background }}>
			{thresholds.map((threshold, i) => (
				<div
					key={threshold}
					className={threshold > value ? s.threshold : `${s.threshold} ${s.thresholdPassed}`}
				>
					<span className={s.thresholdValue}>
						{value <= threshold && value > thresholds[i - 1] ? `${value} / ${threshold}` : threshold}
					</span>
				</div>
			))}
		</div>
	);
}
