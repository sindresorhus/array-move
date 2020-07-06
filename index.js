'use strict';

const arrayMoveMutate = (array, from, to) => {
	const startIndex = to < 0 ? array.length + to : to;

	if (startIndex >= 0 && startIndex < array.length) {
		const item = array.splice(from, 1)[0];
		array.splice(startIndex, 0, item);
	}
};

const arrayMove = (array, from, to) => {
	array = [...array];
	arrayMoveMutate(array, from, to);
	return array;
};

module.exports = arrayMove;
module.exports.mutate = arrayMoveMutate;
