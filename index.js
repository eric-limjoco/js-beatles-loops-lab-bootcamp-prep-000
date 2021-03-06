// + Create a function `johnLennonFacts`. This function will accept one argument, an array of facts about John Lennon (note that it might not be exactly the following facts):

// ```js
// const facts = [
//   "He was the last Beatle to learn to drive",
//   "He was never a vegetarian",
//   "He was a choir boy and boy scout",
//   "He hated the sound of his own voice"
// ];
// ```

// Use a while loop to loop over the facts array and add `"!!!"` to the end of every fact. The function should return an array of strings with exclamation points.

// + Create a function `iLoveTheBeatles` which accepts a number as a parameter. The body of the function should create a variable that stores an empty array. Then, implement a do-while loop inside the function that adds `"I love the Beatles!"` to the empty array. Then the loop should increment the number passed in as a parameter. The condition of the loop should check to see that the parameter number is less than `15`. The function should return the array with the strings `"I love the Beatles!"`.

function theBeatlesPlay(musicians, instruments){
  var arr = []
  for(var i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts(facts){
  var arr = []
  while(facts.length > 0){
    arr.push(facts.shift()+"!!!")
  }
  return arr
}

function iLoveTheBeatles(n){
  var arr = []
  do{
    arr.push("I love the Beatles!")
    n++
  }while(n < 15)
  return arr;
}



