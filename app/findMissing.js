'use strict';

var exports = module.exports = {};

exports.findMissing = function(arr1, arr2)
{
  if (arr1 && arr1.length === 0 || arr2 && arr2.length === 0) return 0;
  
  let equal = arr1.every(function(item, index, array){
    return (array[index] === arr2[index]);
  });
  
  if (equal) return 0;
   
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
