const cards = ['queen of hearts', 'jack of clubs', 'ten of diamonds', 'ace of spades']

// using simple conditions
cards.indexOf('jack of clubs') // 1
cards.indexOf('ace of spades') // 3
cards.indexOf('ace of spades',2) // 3
cards.indexOf('ten of diamonds',3)// -1

// using complex conditions Array.prototype.find()
// pass it as a callback function 
// allows execution of more complex searches through passing in a callback function

// . . . work and work to attain and put your faith in the Lord 

// array of numbers has odd values example of callback function 
function isOdd(element,index,array){
  return element % 2 === 1
}
const numbers = [4,5,7,8,9,10,11]

numbers.find(isOdd)
