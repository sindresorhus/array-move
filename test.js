import test from 'ava';
import arrayMove from '.';

const fixture = [1, 2, 3, 4, 5];

test('main', t => {
	t.deepEqual(arrayMove(fixture, 3, 0), [4, 1, 2, 3, 5]);
	t.deepEqual(arrayMove(fixture, -1, 0), [5, 1, 2, 3, 4]);
	t.deepEqual(arrayMove(fixture, 1, -2), [1, 3, 4, 2, 5]);
	t.deepEqual(arrayMove(fixture, -3, -4), [1, 3, 2, 4, 5]);

	const fixture2 = fixture.slice();
	arrayMove.mut(fixture2, 3, 0);
	t.deepEqual(fixture2, [4, 1, 2, 3, 5]);
});
