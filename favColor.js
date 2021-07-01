//This script tells the user what their favorite primary color means 

var name = "user"; var favColor = "color"; var times = 0; var crestImg = ""; 
 function favColorButton() {
  name = prompt("Please enter you name:")
  favColor = prompt("Hello " + name + ". Please pick one of the following primary color options: blue, red, yellow")
 
  //User input validation
  while (favColor != "blue" && favColor != "red" && favColor != "yellow") {
    favColor = prompt(name + ". Please pick one of the following primary color options ONLY: blue, red, yellow")
  }
  
  
  //favourite color 
  if (favColor == "blue") {

    crestImg = "<img src='https://i.pinimg.com/564x/25/ee/9d/25ee9d03b070a1bb34d4015e6b61a55c.jpg' alt='Ravenclaw house crest'>" ///image link

    document.getElementById("button").innerHTML += "<h3 style='color: blue;'>Blue</h3>" + "<p>If you know someone whose favorite color is blue, this means that they are reliable, sensitive, love harmony, and always make an effort to think of others. People who love the color blue like to keep things clean and tidy, and feel that stability is the most important aspect in life.</p>" + "<p>In Harry Potter, the blue in Ravenclaw’s house crest is evocative of the air element;  representing the sky. Click on the 'crest' button to see multiple images of the crest. </p>" + "<button onclick='repeatingTheImage()'>Crest</button>"
  }

  else if (favColor == "red") {
    crestImg = "<img src='https://i.pinimg.com/originals/8e/7e/2c/8e7e2c62ed1b2f251953919bae0fbf7d.jpg' alt='Gryffindor house crest'>" ///image link

    document.getElementById("button").innerHTML += "<h3 style='color: maroon;'>Red</h3>" + "<p>If you know someone whose favorite color is red, this means that they are radiating a great deal of energy and stimulating to be around. They are extroverted, optimistic, courageous, confident,  action oriented and they have strong survival instincts.</p>" + "<p>In Harry Potter, the red in Gryffindor's house crest is evocative of the fire element. Click on the 'crest' button to see multiple images of the crest. </p>" + "<button onclick='repeatingTheImage()'>Crest</button>"
  }

  else if (favColor == "yellow") {
    crestImg = "<img src='https://i.pinimg.com/736x/cf/8b/a3/cf8ba3392aa13f4a2c6f9651aa000dfa.jpg' alt='Gryffindor house crest'>" ///image link

    document.getElementById("button").innerHTML += "<h3 style='color: yellow;'>Yellow</h3>" + "<p>If you know someone whose favorite color is yellow, this means that they are cheerful and fun to be with. They are creative, often being the one who comes up with new ideas and they tend to have their head in the clouds much of the time. They analyze everything, all the time, and are methodical in their thinking. </p>" + "<p>In Harry Potter, the yellow in Hufflepuff’s house crest is evocative of the earth element; represebting wheat. Click on the 'crest' button to see multiple images of the crest. </p>" + "<button onclick='repeatingTheImage()'>Crest</button>" 
  }

}


//Repeat Images function: 

function repeatingTheImage() { 
  times = prompt("Please enter the number of times you wish to see the crest:") 
  for (var i=0; i<times; i++) {
    document.getElementById("button").innerHTML += "<div style='text-size=80px;'>" + i + crestImg + "</div>"  
  }
}



  // Most of the pervious code: 
  //var name = prompt("Please enter you name:")
  //alert("Hello " + name + ", Please check the end of the page so you can find a button that shows you what your favourite primary color mean! ^-^")
  // if (favColor == "blue") {
  //   alert("Your favorite primary color is blue! If blue is your favorite primary color you love harmony, are reliable, sensitive and always make an effort to think of others. You like to keep things clean and tidy and feel that stability is the most important aspect in life.")
  // }
  // }

  // else if (favColor == "red") {
  //   alert("Your favorite primary color is red! If red is your favorite primary color, you are stimulating to be with and you radiate a great deal of energy. You are extroverted, optimistic, courageous, confident,  action oriented and you have strong survival instincts.")
  // }
  // else if (favColor == "yellow") {
  //   alert("Your favorite primary color is yellow! If yellow is your favorite primary color, uou have a happy disposition and are cheerful and fun to be with. You are creative, often being the one who comes up with new ideas and you tend to have your head in the clouds much of the time. You analyze everything, all the time, and are methodical in your thinking.")
  // }

  
  // else {
  //   alert('Choosing something else, that is not among the options means that you are someone who hates rules and commitment and "wants to be outside the box". However, in order to get a result, please choose a color from the given options - blue, red, yellow :)')
  // }