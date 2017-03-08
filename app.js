// Feel free to use any library
// import _ from 'lodash';
// import R from 'ramda';

// i. Simply return your own name
export const Problem0 = () => {
	// Your code below this line;

};

// ii. Which of the following functions are pure?
const beforeNow = date => date < new Date();
const greaterThan = (a, b) => a > b;
const prepend = (array, element) => [element, ...array];
const append = (array, element) => array.push(element);
const save = (database, doc) => database.insert(doc);

// iii. Describe the similarities and differences between 'not defined', 'undefined', 'null', and 'NaN'

// iv. What will the following variables equal and why?
const a = '' == 0;
const b = '' === 0;

// v. What is asynchronous programming, and why is it important in JavaScript?

// 1. How can one add an instance method 'isWeekend' to Date that returns true if its the weekend, false otherwise?
export const Problem1 = () => {

	// Your code above this line
	return new Date().isWeekend();
};



// 2. How can one get the following code to log out the numbers 1 thru 10, while keeping the setTimeout?
export const Problem2 = () => {
	for (var i = 1; i <= 10; i++){
		setTimeout(() => console.log('i =', i), 10);
	}
};

// 3. Return the set of videos with a rating of 5.0, only include the title and the rating. e.g. [{ title: Something', rating: 5.0}]

export const Problem3 = () => {
	const newReleases = [
		{
			id: 70111470,
			title: 'Die Hard',
			boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
			uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
			rating: 4.0,
			bookmark: []
		},
		{
			id: 654356453,
			title: 'Bad Boys',
			boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
			uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
			rating: 5.0,
			bookmark: [{ id: 432534, time: 65876586 }]
		},
		{
			id: 65432445,
			title: 'The Chamber',
			boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
			uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
			rating: 4.0,
			bookmark: []
		},
		{
			id: 675465,
			title: 'Fracture',
			boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
			uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
			rating: 5.0,
			bookmark: [{ id: 432534, time: 65876586 }]
		}
	];

	// Your code below this line

};

// 4. Return the avg rating of each video including just the title and avg rating.

export const Problem4 = () => {
	const newReleases = [
		{
			id: 70111470,
			title: 'Die Hard',
			boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
			uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
			rating: [4.0, 3.0, 4.0, 5.0],
			bookmark: []
		},
		{
			id: 654356453,
			title: 'Bad Boys',
			boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
			uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
			rating: [5.0, 4.0, 5.0, 5.0],
			bookmark: [{ id: 432534, time: 65876586 }]
		},
		{
			id: 65432445,
			title: 'The Chamber',
			boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
			uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
			rating: [4.0, 2.0, 2.0, 3.0, 2.0],
			bookmark: []
		},
		{
			id: 675465,
			title: 'Fracture',
			boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
			uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
			rating: [5.0, 5.0, 5.0],
			bookmark: [{ id: 432534, time: 65876586 }]
		}
	];

	// Your code below this line

};


/* 5.

 By starting at the top of the triangle below and moving to
 adjacent numbers on the row below, the maximum total from
 top to bottom is 23.

                3              3
               7 4           10 7
              2 4 6         12 14 13
             1 5 9 2      13 17 23 15

 That is, 3 + 7 + 4 + 9 = 23.

 Find the maximum total from top to bottom of the triangle below:
               75
              95 64
             17 47 82
            18 35 87 10
           20 04 82 47 65
          19 01 23 75 03 34
         88 02 77 73 07 63 67
        99 65 04 28 06 16 70 92
       41 41 26 56 83 40 80 70 33
      41 48 72 33 47 32 37 16 94 29
     53 71 44 65 25 43 91 52 97 51 14
    70 11 33 28 77 73 17 78 39 68 17 57
   91 71 52 38 17 14 91 43 58 50 27 29 48
  63 66 04 68 89 53 67 30 73 16 69 87 40 31
 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

 */

export const Problem5 = () => {
	const data = [
		[75],
		[95, 64],
		[17, 47, 82],
		[18, 35, 87, 10],
		[20, 4, 82, 47, 65],
		[19, 1, 23, 75, 3, 34],
		[88, 2, 77, 73, 7, 63, 67],
		[99, 65, 4, 28, 6, 16, 70, 92],
		[41, 41, 26, 56, 83, 40, 80, 70, 33],
		[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
		[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
		[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
		[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
		[63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
		[4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
	];

	// Your code below this line

};

