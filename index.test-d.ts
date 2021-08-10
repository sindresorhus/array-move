import {expectType} from 'tsd';
import {arrayMoveImmutable, arrayMoveMutable} from './index.js';

expectType<string[]>(arrayMoveImmutable(['a', 'b', 'c'], 1, 2));
expectType<number[]>(arrayMoveImmutable([1, 2, 3], 1, 2));
expectType<void>(arrayMoveMutable(['a', 'b', 'c'], 1, 2));

expectType<number[]>(arrayMoveImmutable([1, 2, 3] as readonly number[], 1, 2));
expectType<string[]>(arrayMoveImmutable(['a', 'b', 'c'] as readonly string[], 1, 2));
