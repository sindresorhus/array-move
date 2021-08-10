import test from 'ava';
import {arrayMoveImmutable, arrayMoveMutable} from './index.js';

const fixture = [1, 2, 3, 4, 5];

test('arrayMoveImmutable()', t => {
	t.deepEqual(arrayMoveImmutable(fixture, 3, 0), [4, 1, 2, 3, 5]);
	t.deepEqual(arrayMoveImmutable(fixture, -1, 0), [5, 1, 2, 3, 4]);
	t.deepEqual(arrayMoveImmutable(fixture, 1, -2), [1, 3, 4, 2, 5]);
	t.deepEqual(arrayMoveImmutable(fixture, -3, -4), [1, 3, 2, 4, 5]);
	t.deepEqual(arrayMoveImmutable(fixture, 5, 6), [1, 2, 3, 4, 5]);
	t.deepEqual(arrayMoveImmutable(fixture, -1000, 0), fixture);
	t.deepEqual(arrayMoveImmutable(fixture, 1000, 0), fixture);
});

test('arrayMoveMutable()', t => {
	const fixture2 = [...fixture];
	arrayMoveMutable(fixture2, 3, 0);
	t.deepEqual(fixture2, [4, 1, 2, 3, 5]);
});
