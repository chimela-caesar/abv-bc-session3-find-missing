'use strict';

var exports = module.exports = {};

exports.findMissing = function(arr1, arr2)
{
  if ((arr1 === [] || arr2 === []) || arr1 === arr2) return 0;
   
  let largeArr, smallArr;
  
  if (arr1.length > arr2.length) {
	  largeArr = arr1;
	  smallArr = arr2;
  } else {
	  largeArr = arr2;
	  smallArr = arr1;
  }
  
  let diffArr = largeArr.filter((item) => {
    return !smallArr.includes(item);
  })

  return diffArr[0];
};
