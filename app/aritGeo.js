'use strict'

var file = {}


file.aritGeo= function(arr){
  
  if (arr.length===0){
    return 0;
  };
  var firstTerm = arr[0];
  var lastTerm = arr[arr.length-1];
  var comRatio=(arr[1]/arr[0]);
  var comDiff=arr[1]-arr[0];
  var numOfTerms= arr.length;
  var arrSum=0;
 
 // get sum of arithemetic progression using the nth term sumation formula (n/2)(2a+(n-1)d). 
 
 var sumAp= (numOfTerms/2)*((2*firstTerm)+((numOfTerms-1)*comDiff));

 
//get the sum of the input array elements for comparison purpose
 for (var i=0;i<numOfTerms;i++){
   arrSum+=arr[i];
   
 }
 
// logic if the sum of AP is equal to the sum of array, then its an arithemic progression    
 if (arrSum===sumAp){
   return "Arithmetic";

// logic to test for Geometric progression
 }else{
     //    for a geometric projection  A, A[i+1]^2= A[i]*A[i+2] must always be true
    var isGP=true;
    for(var i=0; i<(numOfTerms-2); i++){
        if(Math.pow(arr[i+1],2) != arr[i]*arr[i+2]){
            isGP=false;
            break;
        }
    }
    if (isGP == true){
        return "Geometric";
    }
     // should return -1 for non AP or GP
    else{
        return -1;
    }
 }
}

module.exports=file;