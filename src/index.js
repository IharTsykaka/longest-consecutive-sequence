module.exports = function longestConsecutiveLength(array) {
	array.sort(compareNumeric);
	let currentSum = 1;
	let maxSum = 0
	if (array.length === 0) return 0;
	if (array.length === 1) return 1;
	
	for (let i = 1, len = array.length; i < len; i++) {
	  if (array[i] === array[i-1]+1)  currentSum++;       
	  else {
		if(currentSum > maxSum) maxSum = currentSum;
		currentSum = 1;
	  }
	}
	return maxSum;
  }
  
  function compareNumeric(a, b) {
	return a - b;
  }
