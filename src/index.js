module.exports = function longestConsecutiveLength(array) {
		array = array.sort((a, b) => a - b);
	  var count = 1;
	  var sequense = 0;
  	for (var i = 0; i < array.length; i++) {
		    if (array[i] + 1 === array[i + 1]) {
			      count++;
        }
        else if (array[i] === array[i + 1]) {
			      continue;
        }
        else {
				    if (count > sequense) {
                sequense = count;
			      }
			      count = 1;
		    }
	  }
	  return sequense;
}
