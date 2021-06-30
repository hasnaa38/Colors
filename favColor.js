//This script tells the user what their favorite primary color means 

var name = prompt("Please enter you name:")
alert("Hello " + name + ", Please check the end of the page so you can find a button that shows you what your favourite primary color mean! ^-^")
var favColor = "color"

function favColorButton() {
  favColor = prompt("Choose your favorite primary color, available options: blue, red, yellow")

  //favourite color 
  if (favColor == "blue") {
    alert("Your favorite primary color is blue! If blue is your favorite primary color you love harmony, are reliable, sensitive and always make an effort to think of others. You like to keep things clean and tidy and feel that stability is the most important aspect in life.")
  }
  else if (favColor == "red") {
    alert("Your favorite primary color is red! If red is your favorite primary color, you are stimulating to be with and you radiate a great deal of energy. You are extroverted, optimistic, courageous, confident,  action oriented and you have strong survival instincts.")
  }
  else if (favColor == "yellow") {
    alert("Your favorite primary color is yellow! If yellow is your favorite primary color, uou have a happy disposition and are cheerful and fun to be with. You are creative, often being the one who comes up with new ideas and you tend to have your head in the clouds much of the time. You analyze everything, all the time, and are methodical in your thinking.")
  }
  else {
    alert('Choosing something else, that is not among the options means that you are someone who hates rules and commitment and "wants to be outside the box". However, in order to get a result, please choose a color from the given options - blue, red, yellow :)')
  }

}
