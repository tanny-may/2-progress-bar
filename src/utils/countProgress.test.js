import { expect, test } from 'vitest';
import { countProgress } from './countProgress';

test('value достигло значения первого порога', () => {
	const threshold = [0, 5, 10, 20, 30, 100];

	expect(countProgress(threshold, 5)).toBeCloseTo(20);
});
	

test('value достигло значения пятого порога', () => {
	const threshold = [0, 5, 10, 20, 30, 100];

	expect(countProgress(threshold, 30)).toBeCloseTo(80);
})

// https://maxcode.dev/problems/expect-to-be
// npm run test
