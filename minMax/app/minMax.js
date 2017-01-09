'use strict'

var file = {}
file.findMinMax= function(num){
    var min=num[0];
    var max=num[0];
    var newArray=[];
    
    if(typeof(num)!== "object"){
        //returns undefined for non object type of argument
        return undefined;
    }
    
    // iterating to get the minimum and maximum value
    for (var i=0; i<=(num.length-1); i++){
        if(num[i]<min){
            min=num[i];
        }
    
        if(num[i]>max){
            max=num[i];
    }
    
  }
  
    // push an identical min value to the newArray
   if   (max===min){
         newArray.push(min);
   }
    // push minimum value first followed by max
   else {
        newArray.push(min);
        newArray.push(max);
    }
   
    return newArray;
    };
module.exports= file;
