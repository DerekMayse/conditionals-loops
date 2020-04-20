// conditionals

// if(2 +2 === 3){
//     console.log("great at math")

// } else{
//     console.log("no bueno")
// }

// var myFavoriteFood = "tacos"

// if(myFavoriteFood === "tacos"){
//     console.log ("yum")
// }

// Lightning Exercise
// Bon Voyage!
// In your JavaScript file, declare a new variable called likesToTravel and set it equal to true or false.
// If likesToTravel is true, log "Bon voyage!" to the console. If not, log "Enjoy your couch!" to the console.

// var likesToTravel = true

// if(likesToTravel === true){
// console.log ("bon voyage!")
// } else {
//     console.log ("enjoy your couch")
// }

// Fried Pickles are the Best
// In your JavaScript file, declare a new variable called favoriteFood and set it equal to your favorite food.
// Write a conditional that checks to see if the favoriteFood variable is equal to "fried pickles" OR "pepperoni rolls". If so, log "Congratulations! You have excellent taste!" to the console. Otherwise, log "Clearly you have not tried fried pickles or pepperoni rolls." to the console.

// var favoriteFood = "pasta"

// if (favoriteFood === "fried pickles"||favoriteFood === "peperoni rolls"){
// console.log ("Congratulations")
// } else{
//     console.log ("Clearly you have not tried fried or peperoni rolls")
// }

// or you can do it this way

// var favoriteFood = "pasta"

// if (favoriteFood === "fried pickles"){
// console.log ("Congratulations")
// } else if (favoriteFood === "peperoni rolls"){
//     console.log ("Congratulations")
// } else {
//     console.log ("Clearly you have not tried fried or peperoni rolls")
// }

// loops

// for loops

// for(var i = 0; i < 10; i++){
// console.log("uh oh")
// }

// for(var i = 0; i < 100; i++){
//     console.log ("tweet tweet")
// }

// var wordArray = ["hi", "my", "name", "is", "derek"]

// for(var i= 0; i<wordArray.length; i++){
//     console.log(wordArray[i])

// }

// Lightning Exercise 7
// Days of the Week
// In your JavaScript, create a new variable called weekArray. It should store an array of strings representing seven days of the week
// Loop through the array and print each day to the console.

// var weekArray = ["monday", "tuesday", "wedsnday", "thursday", "friday", "saturday", "sunday"]

// for(var i = 0; i<weekArray.length; i++){
// console.log (weekArray[i])
// }

// Use JavaScript to check and see if the following comparisons are true. For each of the following, log "True fact!" to the console if the condition evaluates to true and "LIES!" to the console if it doesn't.
// Is the sum of 1 and 1 greater than 5?
// Is the product of 4 and 5 less than our equal to 20?
// Is the difference between 6 and 2 greater than or equal to 0?

// if(1 + 1 > 5 ){
//     console.log("true fact")
// } else {
//     console.log("lies")
// }

// if(4 * 5 <= 20){
// console.log("true fact")
// } else{
//     console.log("lies")
// }

// if(6 - 2 >= 0){
// console.log("true fact")
// } else{
//     console.log("lies")
// }

// In your JavaScript file, declare a new variable called likesDogs and set it equal to true or false.
// If likesDogs is true, log "You're a dog person!" to the console. If not, log "You're a cat person!" to the console.

// var likesDogs = true

// if(likesDogs === true){
// console.log ("your a dog person")
// } else{
//     console.log("your a cat person")
// }

// Declare a variable called birthYear and set it equal to your birth year.
// Write a conditional statement that checks to see which generation you're part of and log a sentence about that generation to the console.
// Try changing the value of birthYear and see what happens.

// var birthYear = 1992

// if(birthYear === 1992){
// console.log("being born in", birthYear, "means your a millineal" )
// } else {
//     console.log("okay boomer")
// }

// In your JavaScript file, create a new object representing a person. Your object should have at least two properties: one for the person's name and one for their preferred language.

// Write a conditional that checks for the following:

// If the person's preferred language is English, print "Hello, [name]!" to the console.
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.
// If their preferred language is French, print "Bonjour, [name]!" to the console.

// var me = {
//     name:"Derek",
//     language: "English"
// }

// if(me.language === "English"){
// console.log("hello", me.name)
// } else if(me.language === "Spanish"){
// console.log("hola", me.name)
// } else if(me.name === "french"){
// console.log("bonjour", me.name)
// }

// In your JavaScript file, declare two new variables:
// A variable called time that should store a string that represents a time of day ("1:00 PM", "2:00 PM", etc)
// A variable called isHungry that stores a boolean representing whether or not you're hungry
// Write a conditional that checks the following:
// If it's 7:30 AM and you're hungry, log "Time for breakfast!" to the console
// If it's 12:00 PM and you're hungry, log "Time for luch!" to the console
// If it's 7:00 PM or 8:00 PM and you're hungry, log "Time for dinner!" to the console.
// If you're hungry, log "Time for a snack!" to the console.
// If none of the above are true, log "Have a cookie anyway!" to the console.
// Try changing the values of your variables. You should get different results every time you change them.

// var time = "2:43 PM"
// var isHungry = false

// if(time === "7:30 AM" && isHungry === true){
// console.log ("time for breakfast")
// }

// if(time === "12:00 PM" && isHungry === true){
//     console.log ("time for lunch")
//     }

// if(time === "7:00 PM" || time === "8:00" && isHungry === true){
//     console.log("time for dinner")
// }

// if(isHungry === true){
// console.log("time for a snack")
// } else {
//     console.log("have a cookie anyways")
// }

// In your JavaScript file, declare a new variable called grade and give it a number value between 0 and 100.
// Write a conditional that converts the number grade to a letter grade:
// If the value of grade is greater than or equal to 0 and less than or equal to 69, log "You got an F" to the console.
// If it's between 70 and 76, log "You got a D" to the console.
// If it's between 77 and 84, log "You got a C" to the console.
// If it's between 84 and 92, log "You got a B" to the console.
// If it's between 93 and 100, log "You got an A" to the console.

// var grade = 88

// if(grade >= 0 && grade <= 69 ){
// console.log ("you got an f")
// }
// if(grade >=70 && grade <=76){
//     console.log("you got a d")
// }
// if(grade >=77 && grade <= 84){
//     console.log("you got a c")
// }
// if(grade >=84 && grade <=92){
//     console.log("you got a b")
// }
// if(grade >= 93 && grade <=100){
//     console.log("you got an a")
// }

// Use a for loop to print each student's name to the console.

// var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

// for(var i = 0; i<cohortOneStudents.length; i++){
//     console.log (cohortOneStudents[i])
//     }

// In your JavaScript file, create an array of 5 of your interests.
// Loop through the interests and console log the phrase "One of my interests is: [your interest]." for each of the interests in your array.

// var interest = ["reading", "art", "swimming", "gaming", "walking"]

// for(var i = 0; i < interest.length; i++){
//     console.log("one of my interests is", interest[i])
// }

// Refactor your loop from the previous exercise. Pick one of your interests as your absolute favorite interest. Add a conditional to your loop to check if each interest in the array is your favorite. When the loop gets to your favorite interest, it should print "My absolute favorite interest is:" followed by the name of your interest. Any other interests can be printed the same way that they were in the previous exercise.

// var interest = ["reading", "art", "swimming", "gaming", "walking"];

// for (var i = 0; i < interest.length; i++) {
//   console.log("one of my interests is", interest[i]);
//   if (interest[i] === "gaming") {
//     console.log("my absolute favorite interest is", interest[i]);
//   }
// }

// Use a for loop to output the complete titles to the console.

// var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

// for(var i = 0; i<harryPotterTitles.length; i++){
//     console.log("harry potter",harryPotterTitles[i])
// }

// loop through the grades with a for loop
// If the current grade is greater than or equal to 0 and less than or equal to 69, log "You got an F" to the console.
// If it's between 70 and 76, log "You got a D" to the console.
// If it's between 77 and 84, log "You got a C" to the console.
// If it's between 84 and 92, log "You got a B" to the console.
// If it's between 93 and 100, log "You got an A" to the console.


var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

for(var i = 0; i < grades.length; i++){
    if(grades >= 0 && grades <=69)
    console.log("you got an f")
    if(grades >= 70 && grades <=76)
    console.log("you got an d")
}