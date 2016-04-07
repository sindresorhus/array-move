import test from 'ava';
import m from './';

const f = [1, 2, 3, 4, 5];

test(t => {
	t.deepEqual(m(f, 3, 0), [4, 1, 2, 3, 5]);
	t.deepEqual(m(f, -1, 0), [5, 1, 2, 3, 4]);
	t.deepEqual(m(f, 1, -2), [1, 3, 4, 2, 5]);
	t.deepEqual(m(f, -3, -4), [1, 3, 2, 4, 5]);

	const f2 = f.slice();
	m.mut(f2, 3, 0);
	t.deepEqual(f2, [4, 1, 2, 3, 5]);
});
