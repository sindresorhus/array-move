'use strict';

function arrayMove(x, from, to) {
	x.splice((to < 0 ? x.length + to : to), 0, x.splice(from, 1)[0]);
}

module.exports = function (x, from, to) {
	x = x.slice();
	arrayMove(x, from, to);
	return x;
};

module.exports.mut = arrayMove;
