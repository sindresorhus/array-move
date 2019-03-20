import {expectType} from 'tsd-check';
import arrayMove from '.';

expectType<string[]>(arrayMove(['a', 'b', 'c'], 1, 2));
expectType<number[]>(arrayMove([1, 2, 3], 1, 2));
expectType<void>(arrayMove.mutate(['a', 'b', 'c'], 1, 2));
