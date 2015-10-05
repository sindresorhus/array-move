import test from 'ava';
import fn from './';
const fixture = [1, 2, 3, 4, 5];

test(t => {
	t.same(fn(fixture, 3, 0), [4, 1, 2, 3, 5]);
	t.same(fn(fixture, -1, 0), [5, 1, 2, 3, 4]);
	t.same(fn(fixture, 1, -2), [1, 3, 4, 2, 5]);
	t.same(fn(fixture, -3, -4), [1, 3, 2, 4, 5]);

	const fixture2 = fixture.slice();
	fn.mut(fixture2, 3, 0);
	t.same(fixture2, [4, 1, 2, 3, 5]);

	t.end();
});
