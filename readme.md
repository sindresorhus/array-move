# array-move [![Build Status](https://travis-ci.com/sindresorhus/array-move.svg?branch=master)](https://travis-ci.com/github/sindresorhus/array-move)

> Move an array item to a different position

## Install

```
$ npm install array-move
```

## Usage

```js
const arrayMove = require('array-move');

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

## API

### arrayMove(array, from, to)

Clones the given `array`, moves the item to a new position in the new array, and then returns the new array. The given `array` is not mutated.

### arrayMove.mutate(array, from, to)

Moves the item to the new position in the `array` array. Useful for huge arrays where absolute performance is needed.

#### array

Type: `Array`

#### from

Type: `number`

Index of item to move. If negative, it will begin that many elements from the end.

#### to

Type: `number`

Index of where to move the item. If negative, it will begin that many elements from the end.
