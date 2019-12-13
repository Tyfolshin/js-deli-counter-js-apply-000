var x = 1;
function takeANumber(array1){
    array1.push(x)
    return "You are ticket number " + array1.length + " in line.";
    x++;
}

function nowServing(array1){
  if(array1.length === 0){
    return "There is nobody waiting to be served!";
  }
    return `Currently serving ${array1.shift()}.`;
}
var line =[];
function currentLine(array1){
  if(array1.length === 0){
    return "The line is currently empty."
  }
  for(var i=0;i <array1.length;i++){
  line.push(" "+(i+1) +". "+array1[i])
  }
  return "The line is currently:" + line;
}