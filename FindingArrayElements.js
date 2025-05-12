const cards = ['queen of hearts', 'jack of clubs', 'ten of diamonds', 'ace of spades']

// using simple conditions
cards.indexOf('jack of clubs') // 1
cards.indexOf('ace of spades') // 3
cards.indexOf('ace of spades',2) // 3
cards.indexOf('ten of diamonds',3)// -1

// using complex conditions Array.prototype.find()
// pass it as a callback function 
