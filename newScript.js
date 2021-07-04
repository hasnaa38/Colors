var name; var favColor; var times; var crestImg; 

//calling functions: 
askingForInfo(); 

// Asking for user info function:
function askingForInfo() { 
  name = prompt("Please enter you name:")
  if (name == "") { 
    name = "user"; 
  }

  favColor = prompt("Hello " + name + ". Please pick one of the following primary color options: blue, red, yellow")

  //User input validation
  while (favColor != "blue" && favColor != "red" && favColor != "yellow") {
    favColor = prompt(name + ". Please pick one of the following primary color options ONLY: blue, red, yellow")
  }

  return favColor; 
}

// Know more about each color function: 
function knowMoreAboutPC(favColor) {
  
  if (favColor == "blue") {
    document.getElementById("button").innerHTML +="<h3 style='color: blue;'>Blue</h3>" + "<p>If you know someone whose favorite color is blue, this means that they are reliable, sensitive, love harmony, and always make an effort to think of others. People who love the color blue like to keep things clean and tidy, and feel that stability is the most important aspect in life.</p>"
  }

  else if (favColor == "red") {
    document.getElementById("button").innerHTML +="<h3 style='color: red;'>Red</h3>" + "<p>If you know someone whose favorite color is red, this means that they are radiating a great deal of energy and stimulating to be around. They are extroverted, optimistic, courageous, confident,  action oriented and they have strong survival instincts.</p>"
  }

  else if (favColor == "yellow") {
    document.getElementById("button").innerHTML +="<h3 style='color: yellow;'>Yellow</h3>" + "<p>If you know someone whose favorite color is yellow, this means that they are cheerful and fun to be with. They are creative, often being the one who comes up with new ideas and they tend to have their head in the clouds much of the time. They analyze everything, all the time, and are methodical in their thinking. </p>"
  }
}


// Know Harry Potter house crest function: 
function harryPotterCrest(favColor) { 

  if (favColor == "blue") {
    crestImg = "<img src='https://i.pinimg.com/564x/25/ee/9d/25ee9d03b070a1bb34d4015e6b61a55c.jpg' alt='Ravenclaw house crest'>"

    document.getElementById("button").innerHTML +="<p>In Harry Potter, the blue in Ravenclaw’s house crest is evocative of the air element;  representing the sky.</p>"
  }

  if (favColor == "red") {
        crestImg = "<img src='https://i.pinimg.com/originals/8e/7e/2c/8e7e2c62ed1b2f251953919bae0fbf7d.jpg' alt='Gryffindor house crest'>" ///image link
        
        document.getElementById("button").innerHTML +="<p>In Harry Potter, the red in Gryffindor's house crest is evocative of the fire element.</p>"
  }

  if (favColor == "yellow") { 
    crestImg = "<img src='https://i.pinimg.com/736x/cf/8b/a3/cf8ba3392aa13f4a2c6f9651aa000dfa.jpg' alt='Gryffindor house crest'>" ///image link

    document.getElementById("button").innerHTML +="<p>In Harry Potter, the yellow in Hufflepuff’s house crest is evocative of the earth element; represebting wheat.</p>"
  }

document.getElementById("button").innerHTML +="<p>Click on the 'crest' button to see multiple images of the crest. </p>" + "<button onclick='repeatingTheImage()'>Crest</button>"
}

// Multiple images function: 
function repeatingTheImage() { 
  times = prompt("Please enter the number of times you wish to see the crest:") 
  for (var i=1; i<=times; i++) {
    document.getElementById("button").innerHTML += "<div style='text-size=80px;'>" + i + crestImg + "</div>" 
  }
}
