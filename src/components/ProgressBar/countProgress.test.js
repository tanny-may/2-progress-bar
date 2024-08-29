import { countProgress } from './countProgress';
import { expect, test } from 'vitest'

test('value достигло значения первого порога', () => {
	const threshold = [0, 5, 10, 20, 30, 100];

	expect(countProgress(threshold, 5)).toBeCloseTo(20);
});