declare const arrayMove: {
	/**
	Clones the given `array`, moves the item to a new position in the new array, and then returns the new array. The given `array` is not mutated.

	@param array - The array with the item to move.
	@param from - Index of item to move. If negative, it will begin that many elements from the end.
	@param to - Index of where to move the item. If negative, it will begin that many elements from the end.
	@returns A new array with the item moved to the new position.

	@example
	```
	import arrayMove = require('array-move');

	const input = ['a', 'b', 'c'];

	const array1 = arrayMove(input, 1, 2);
	console.log(array1);
	//=> ['a', 'c', 'b']

	const array2 = arrayMove(input, -1, 0);
	console.log(array2);
	//=> ['c', 'a', 'b']

	const array3 = arrayMove(input, -2, -3);
	console.log(array3);
	//=> ['b', 'a', 'c']
	```
	*/
	<ValueType>(array: ReadonlyArray<ValueType>, from: number, to: number): ValueType[];

	/**
	Moves the item to the new position in the input array. Useful for huge arrays where absolute performance is needed.

	@param array - The array to modify.
	@param from - Index of item to move. If negative, it will begin that many elements from the end.
	@param to - Index of where to move the item. If negative, it will begin that many elements from the end.
	*/
	mutate(array: unknown[], from: number, to: number): void;
};

export = arrayMove;
