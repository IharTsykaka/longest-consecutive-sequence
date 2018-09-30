module.exports = function longestConsecutiveLength(array) {
	array.sort(compareNumeric);
	
	let currentSum = 1;
	let maxSum = 0
	let step = 0;
	if (array.length === 0) return 0;
	if (array.length === 1) return 1;
	
	for (let i = 1, len = array.length; i < len; i++) {
		if (array[i] === array[i-1]) continue;
		if (array[i] === array[i-1]+1)  currentSum++;		
		if (array[i] === array[i-1]+1 && i === len-1 && currentSum > maxSum) {
			return maxSum = currentSum;
		}   
	  if (array[i] !== array[i-1]+1) {
			if(currentSum > maxSum) maxSum = currentSum;
			currentSum = 1;
		}
		
	}
	return maxSum;
  }
  
  function compareNumeric(a, b) {
	return a - b;
  }
