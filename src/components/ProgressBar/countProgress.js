export function countProgress(thresholds, value) {
	let segments = thresholds.length - 1;
	let percentPerSegment = 100 / segments;

	let fullfilled;
	for (let i = 0; i < segments; i++) {
		if (value < thresholds[i]) {
			break;
		}
		fullfilled = i;
	}
	let percent = fullfilled * percentPerSegment;
	percent +=
		((value - thresholds[fullfilled]) / (thresholds[fullfilled + 1] - thresholds[fullfilled])) * percentPerSegment;

	return percent;
}
