'use strict';

const arrayMoveMutate = (array, from, to) => {
	const item = array.splice(from, 1)[0];
	const startIndex = to < 0 ? array.length + to : to;
	array.splice(startIndex, 0, item);
};

const arrayMove = (array, from, to) => {
	array = array.slice();
	arrayMoveMutate(array, from, to);
	return array;
};

module.exports = arrayMove;
// TODO: Remove this for the next major release
module.exports.default = arrayMove;

module.exports.mutate = arrayMoveMutate;
