'use strict';

const arrayMoveMutating = (array, from, to) => {
	array.splice((to < 0 ? array.length + to : to), 0, array.splice(from, 1)[0]);
};

const arrayMove = (array, from, to) => {
	array = array.slice();
	arrayMoveMutating(array, from, to);
	return array;
};

module.exports = arrayMove;
module.exports.default = arrayMove;

module.exports.mut = arrayMoveMutating;
